import React, { useEffect } from "react";
import ResponsePrismic from "../../types/ResponsePrismic";
import {
  ContainerInfo,
  ContainerMainPost,
  ContainerTag,
  ContainerInfoPublished,
  Layer,
  Tag,
  Wrapper,
  ContainerPosts,
  ContainerPost,
} from "./Blog.styles";

interface BlogProps {
  postsResponse: ResponsePrismic;
}

const Blog = ({ postsResponse }: BlogProps): JSX.Element => {
  useEffect(() => {
    console.log(postsResponse);
  }, []);

  const formateDate = (data: Date) => {
    return (
      data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()
    );
  };

  return (
    <Wrapper>
      <h2>Blog</h2>
      <p>
        Aqui escrevemos, primoridalmente, sobre tecnologia, programação e
        empreededorismo, mas não se espante se ver algo inusitado😅
      </p>

      <h5>
        Postagem mais <span>recentes</span>
      </h5>
      <ContainerMainPost>
        <Layer>
          <ContainerInfo>
            <ContainerTag>
              {postsResponse.results[0].tags.map((tag) => (
                <Tag key={`${postsResponse.results[0].id} - ${tag}`}>{tag}</Tag>
              ))}
            </ContainerTag>
            <h4>{postsResponse.results[0].data.title[0].text}</h4>
            <ContainerInfoPublished>
              <p>
                Publicado em
                {" " +
                  formateDate(
                    new Date(postsResponse.results[0].last_publication_date)
                  )}
              </p>
              <p>Escrito por {postsResponse.results[0].data.author[0].text}</p>
            </ContainerInfoPublished>
          </ContainerInfo>
        </Layer>
        <img src={postsResponse.results[0].data.main_image.url} />
      </ContainerMainPost>
      <ContainerPosts>
        {postsResponse.results.slice(1).map((post) => {
          return (
            <ContainerPost key={`post ${post.id}`}>
              <Layer>
                <ContainerInfo>
                  <ContainerTag>
                    {post.tags.map((tag) => (
                      <Tag key={`${post.id} - ${tag}`}>{tag}</Tag>
                    ))}
                  </ContainerTag>
                  <h4>{post.data.title[0].text}</h4>
                  <ContainerInfoPublished>
                    <p>
                      Publicado em
                      {" " + formateDate(new Date(post.last_publication_date))}
                    </p>
                    <p>Escrito por {post.data.author[0].text}</p>
                  </ContainerInfoPublished>
                </ContainerInfo>
              </Layer>
              <img src={post.data.main_image.url} />
            </ContainerPost>
          );
        })}
      </ContainerPosts>
    </Wrapper>
  );
};

export default Blog;
