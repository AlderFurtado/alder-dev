import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { formateDate } from "../../helpers/formatters";
import {
  getPosts,
  setRichTextAsHtml,
  setRichTextAsText,
} from "../../services/prismic";
import { ResultResponsePrismic } from "../../types/ResponsePrismic";
import MediaShared from "../MediaShared/MediaShared";
import Tag from "../Tag/Tag";
import TextWithUnderscore from "../TextWithUnderscore/TextWithUnderscore";
import {
  Container,
  ContainerContent,
  ContainerInfo,
  ContainerItem,
  ContainerPostContent,
  ContainerRest,
  PostTitle,
  Wrapper,
  PostSubtitle,
} from "./Post.styles";

// import { Container } from './styles';

const Post = (props: ResultResponsePrismic): JSX.Element => {
  const [newPosts, setNewPosts] = useState(null);
  const router = useRouter();
  let shareUrl = null;

  if (process.env.NODE_ENV == "production") {
    shareUrl = `https://alder-dev.vercel.app${router.asPath}`;
  } else {
    shareUrl = `https://localhost:3000${router.asPath}`;
  }

  useEffect(() => {
    (async () => {
      const { results } = await getPosts();
      console.log("posts", results);
      setNewPosts(results);
    })();
  }, []);

  console.log(props);
  return (
    <Wrapper>
      {/* <Breadcrumbs
        root={"blog"}
        steps={[props.data.title[0].text]}
      ></Breadcrumbs> */}
      <Container>
        <ContainerContent>
          <img src={props.data.main_image.url} />
          <ContainerInfo>
            <span>
              Publicado em {formateDate(new Date(props.first_publication_date))}
            </span>
            <span>Escrito por {props.data.author[0].text}</span>
          </ContainerInfo>
          <PostTitle>{setRichTextAsText(props.data.title)}</PostTitle>
          <PostSubtitle>{setRichTextAsText(props.data.subtitle)}</PostSubtitle>

          <ContainerPostContent
            dangerouslySetInnerHTML={{
              __html: setRichTextAsHtml(props.data.content),
            }}
          />
          <hr></hr>
          <TextWithUnderscore
            textNormal={"Tags "}
            textUnderscore={"relacionadas"}
          />
          <div style={{ display: "flex" }}>
            {props.tags.map((tag) => (
              <Tag key={`tag ${tag}`} tag={tag} />
            ))}
          </div>
          <TextWithUnderscore
            textNormal={"Se gostou, "}
            textUnderscore={"compartilhe"}
          />
          <MediaShared url={shareUrl} />
          <br></br>
          <br></br>
        </ContainerContent>
        <ContainerRest>
          <TextWithUnderscore
            textNormal={"Postagens mais "}
            textUnderscore={"recente"}
          />
          {newPosts?.map((post: ResultResponsePrismic) => {
            return (
              <ContainerItem>
                <img src={post.data.main_image.url}></img>
                <div>
                  <Link href={post.id}>
                    <h2>{setRichTextAsText(post.data.title)}</h2>
                  </Link>
                  <div>
                    <span>Escrito por {post.data.author[0].text}</span>
                    <br></br>
                    <span>
                      Publicado em{" "}
                      {formateDate(new Date(props.first_publication_date))}
                    </span>
                  </div>
                </div>
              </ContainerItem>
            );
          })}
        </ContainerRest>
      </Container>
    </Wrapper>
  );
};

export default Post;
