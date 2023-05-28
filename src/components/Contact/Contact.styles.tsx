import styled, { keyframes, css } from "styled-components";

interface StylesProps {
  activeAnimation: boolean;
}

const showAnimation1 = keyframes`
    from{
        transform:translateX(-1200px)
    }

    to{
        transform:translateX(0px)
    }
`;

const showAnimation2 = keyframes`
    from {
        transform:translateX(1200px)
    }

    to{
        transform: translateX(0px)
    }
`;

export const Wrapper = styled.section<StylesProps>`
  margin: 2em 12%;
  color: #f8f8f8;

  h2 {
    font-size: 32px;
  }

  ul {
    transform: translateX(-1200px);

    list-style: none;
    padding: 0;
    margin: 0;
    animation: ${(props) =>
      props.activeAnimation
        ? css`
            ${showAnimation1} 700ms ease forwards;
          `
        : null};
  }

  ul li {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`;

export const Container = styled.div<StylesProps>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    flex: 1;
  }
`;

export const ContainerForm = styled.div<StylesProps>`
  transform: translateX(1200px);
  animation: ${(props) =>
    props.activeAnimation
      ? css`
          ${showAnimation2} 700ms ease forwards;
        `
      : null};
`;
