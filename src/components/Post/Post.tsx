import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { formateDate } from "../../helpers/formatters";
import { setRichTextAsHtml, setRichTextAsText } from "../../services/prismic";
import { ResultResponsePrismic } from "../../types/ResponsePrismic";
import MediaShared from "../MediaShared/MediaShared";
import Tag from "../Tag/Tag";
import TextWithUnderscore from "../TextWithUnderscore/TextWithUnderscore";
import {
  Container,
  ContainerContent,
  ContainerInfo,
  ContainerPostContent,
  ContainerRest,
  PostTitle,
  Wrapper,
} from "./Post.styles";

// import { Container } from './styles';

const Post = (props: ResultResponsePrismic): JSX.Element => {
  const router = useRouter();
  let shareUrl = null;

  if (process.env.NODE_ENV == "production") {
    shareUrl = `https://alder-dev.vercel.app${router.asPath}`;
  } else {
    shareUrl = `https://localhost:3000${router.asPath}`;
  }

  console.log(shareUrl);
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
          <ContainerInfo></ContainerInfo>
        </ContainerRest>
      </Container>
    </Wrapper>
  );
};

export default Post;
