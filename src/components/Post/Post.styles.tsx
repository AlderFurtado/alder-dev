import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 0 12%;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2em;
`;

export const ContainerContent = styled.div`
  flex: 8;
  min-width: 280px;
  img {
    width: 100%;
  }
`;

export const ContainerInfo = styled.div`
  margin: 1em 0 2em;
  font-size: 1vw;
  color: #8d8d8d;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    font-size: 3vw;
  }
`;

export const PostTitle = styled.h1`
  margin-bottom: 0px;
  color: #f8f8f8;
  font-size: 2.5vw;

  @media (max-width: 800px) {
    font-size: 5vw;
  }
`;

export const ContainerPostContent = styled.div`
  color: #bdbaba;
  letter-spacing: 1.2px;
  line-height: 20px;
  padding: 5px 0px;
  font-size: 0.9rem;
`;

export const ContainerRest = styled.div`
  flex: 4;
  min-width: 250px;
  margin-left: 32px;
  h2 {
    margin: 0;
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  img {
    width: 50px;
    height: 50px;
  }
`;
