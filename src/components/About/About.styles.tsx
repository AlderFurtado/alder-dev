import styled, { css, keyframes } from "styled-components";

const animationShow = keyframes`
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
`;

interface StylesProps {
  activeAnimation: boolean;
}

export const Wrapper = styled.section`
  padding: 3em 12%;
  display: flex;
  flex-direction: row;
  color: #f8f8f8;
  justify-content: space-between;
  margin-top: 6rem;
  background-color: #010d21;

  div {
    flex: 1;
  }

  p {
    font-size: 16px;
    color: #909090;
    line-height: 22px;
    letter-spacing: 1px;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    p {
      font-size: 14px;
    }
  }
`;

export const ContainerImage = styled.div<StylesProps>`
  opacity: 0;
  text-align: center;
  animation: ${(props) =>
    props.activeAnimation
      ? css`
          ${animationShow} 500ms linear forwards;
        `
      : null};
`;

export const Title = styled.h2<StylesProps>`
  opacity: 0;
  font-size: 32px;
  animation: ${(props) =>
    props.activeAnimation
      ? css`
          ${animationShow} 500ms 300ms linear forwards;
        `
      : null};
`;

export const Subtitle = styled.p<StylesProps>`
  opacity: 0;
  font-size: 16px;
  color: #909090;
  line-height: 22px;
  letter-spacing: 1px;
  animation: ${(props) =>
    props.activeAnimation
      ? css`
          ${animationShow} 500ms 600ms linear forwards;
        `
      : null};

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
