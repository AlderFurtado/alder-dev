import React, { useEffect } from "react";
import ResponsePrismic from "../../types/ResponsePrismic";
import {
  ContainerInfo,
  ContainerMainPost,
  ContainerTag,
  ContainerInfoPublished,
  Layer,
  Wrapper,
  ContainerPosts,
  ContainerPost,
} from "./Blog.styles";

import Tag from "../Tag/Tag";

import Link from "next/link";
import { formateDate } from "../../helpers/formatters";

interface BlogProps {
  postsResponse: ResponsePrismic;
}

const Blog = ({ postsResponse }: BlogProps): JSX.Element => {
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
      <Link href={"/blog/" + postsResponse.results[0].id}>
        <ContainerMainPost>
          <Layer>
            <ContainerInfo>
              <ContainerTag>
                {postsResponse.results[0].tags.map((tag) => (
                  <Tag
                    key={`${postsResponse.results[0].id} - ${tag}`}
                    tag={tag}
                  ></Tag>
                ))}
              </ContainerTag>
              <h4>{postsResponse.results[0].data.title[0].text}</h4>
              <ContainerInfoPublished>
                <p>
                  Publicado em
                  {" " +
                    formateDate(
                      new Date(postsResponse.results[0].first_publication_date)
                    )}
                </p>
                <p>
                  Escrito por {postsResponse.results[0].data.author[0].text}
                </p>
              </ContainerInfoPublished>
            </ContainerInfo>
          </Layer>
          <img src={postsResponse.results[0].data.main_image.url} />
        </ContainerMainPost>
      </Link>

      <ContainerPosts>
        {postsResponse.results.slice(1).map((post) => {
          return (
            <Link key={`post ${post.id}`} href={"/blog/" + post.id}>
              <ContainerPost>
                <Layer>
                  <ContainerInfo>
                    <ContainerTag>
                      {post.tags.map((tag) => (
                        <Tag key={`${post.id} - ${tag}`} tag={tag}></Tag>
                      ))}
                    </ContainerTag>
                    <h4>{post.data.title[0].text}</h4>
                    <ContainerInfoPublished>
                      <p>
                        Publicado em
                        {" " +
                          formateDate(new Date(post.last_publication_date))}
                      </p>
                      <p>Escrito por {post.data.author[0].text}</p>
                    </ContainerInfoPublished>
                  </ContainerInfo>
                </Layer>
                <img src={post.data.main_image.url} />
              </ContainerPost>
            </Link>
          );
        })}
      </ContainerPosts>
    </Wrapper>
  );
};

export default Blog;
