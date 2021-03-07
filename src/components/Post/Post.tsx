import React, { useEffect } from "react";
import { formateDate } from "../../helpers/formatters";
import { setRichTextAsHtml, setRichTextAsText } from "../../services/prismic";
import { ResultResponsePrismic } from "../../types/ResponsePrismic";
import Breadcrumbs from "../Breadcrumbs/Breadcumbs";
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
  console.log(props);
  return (
    <Wrapper>
      <Breadcrumbs
        root={"blog"}
        steps={[props.data.title[0].text]}
      ></Breadcrumbs>
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
        </ContainerContent>
        <ContainerRest>
          <p>dkaoo</p>
        </ContainerRest>
      </Container>
    </Wrapper>
  );
};

export default Post;
