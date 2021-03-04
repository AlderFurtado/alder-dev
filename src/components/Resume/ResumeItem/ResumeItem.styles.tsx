import styled, { css, keyframes } from "styled-components";

interface ContainerStylesProps {
  activeAnimation: boolean;
  delay: number;
}

const animationShow = keyframes`
    from{
        transform: translateX(-1200px)
    }

    to{
         transform: translateX(-0px)
    }
`;

export const Container = styled.div<ContainerStylesProps>`
  transform: translateX(-1200px);
  max-width: 320px;
  margin-top: 1.5em;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.356);
  border-top: 10px solid #8f0b4c;
  border-radius: 5px;
  animation: ${(props) =>
    props.activeAnimation
      ? css`
          ${animationShow} 500ms ${props.delay + "ms"} linear forwards
        `
      : null};
  h3 {
    font-size: 1.5em;
    margin: 0;
  }

  p {
    font-size: 1rem;
    height: 60px;
    font-weight: 400;
    color: #909090;
  }
`;

export const ContainerPeriod = styled.div`
  color: #909090;
  margin-top: 1.5em;
  display: flex;
  justify-content: flex-end;

  span {
    font-size: 0.8rem;
  }
`;
