import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 0 12%;
  color: #f8f8f8;
  min-height: 90vh;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 12px 0 0;
    font-weight: bold;
    font-size: 3.2vw;
  }

  p {
    width: 70%;
    font-size: 1.2rem;
  }

  h5 {
    font-size: 1.6rem;
    font-weight: 400;
  }

  span {
    border-bottom: 3px solid #8f0b4c;
  }

  @media (max-width: 800px) {
    h2 {
      margin-top: 30px;
      font-size: 6.2vw;
    }

    p {
      font-size: 3.4vw;
      width: 100%;
    }

    h5 {
      font-size: 3.6vw;
      font-weight: 400;
    }

    .container_img {
      justify-content: center;
      margin-right: 0;
    }
  }
`;

export const ContainerMainPost = styled.div`
  width: 100%;
  height: 60vh;
  background: #31182e;
  position: relative;
  margin-bottom: 2em;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 800px) {
    height: 30vh;
  }
`;

export const Layer = styled.div`
  background: rgba(49, 24, 46, 0.72);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: flex-end;
  transition: background-color ease 500ms;
  :hover {
    background: rgba(49, 24, 46, 0.3);
  }
`;

export const ContainerInfo = styled.div`
  height: 40%;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(37, 24, 49, 1) 0%,
    rgba(49, 24, 46, 0) 100%
  );
  padding: 12px 2vw 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h4 {
    font-weight: bold;
    margin: 0;
    font-size: 3vw;
    width: 70%;
  }

  @media (max-width: 800px) {
    h4 {
      font-size: 4vw;
      width: 80%;
    }
  }
`;

export const ContainerTag = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

export const Tag = styled.div`
  background: #056f97;
  margin: 0;
  font-size: 0.8vw;
  font-weight: 600;
  margin-right: 12px;
  padding: 6px 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  @media (max-width: 800px) {
    font-size: 1.5vw;
    padding: 4px 6px;
  }
`;

export const ContainerInfoPublished = styled.div`
  display: flex;
  color: #777777;
  justify-content: space-between;
  p {
    font-size: 1vw;
    width: fit-content;
  }

  @media (max-width: 800px) {
    p {
      font-size: 1.5vw;
    }
  }
`;

export const ContainerPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ContainerPost = styled.div`
  max-width: 47%;
  height: 60vh;
  background: #31182e;
  position: relative;
  margin-bottom: 2em;

  img {
    width: 100%;
    height: 100%;
  }

  h4 {
    font-weight: bold;
    margin: 0;
    font-size: 2vw;
    width: 80%;
  }

  p {
    font-size: 0.8vw;
    width: fit-content;
  }

  @media (max-width: 800px) {
    max-width: none;
    height: 30vh;

    h4 {
      font-size: 4vw;
      width: 80%;
    }

    p {
      font-size: 1.5vw;
    }
  }
`;
