import styled, { css, keyframes } from "styled-components";

interface StylesProps {
  activeAnimation: boolean;
}

const animationShow = keyframes`
    from {
        opacity:0
    }

    to{
        opacity:1
    }
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 1rem;
    background-color: #010c20;
    color: #9fa6b1;
    border: none;
    padding: 0px 12px;
  }

  textarea {
    background-color: #010c20;
    color: #9fa6b1;
    border: none;
    padding: 12px 12px;
    font-family: "Raleway", sans-serif;
  }

  button {
    margin-top: 8px;
    background-color: #8f0b4c;
    border: none;
    color: white;
    padding: 16px 10px;
    transition: background-color 200ms linear;
  }

  button:hover {
    background-color: #5c0731;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    margin-top: 1rem;
  }
`;

export const ContainerInput = styled.div<StylesProps>`
  opacity: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  animation: ${(props) =>
    props.activeAnimation
      ? css`
          ${animationShow} 500ms 1s linear forwards;
        `
      : null};

  span {
    color: #8f0b4c;
    font-size: 12px;
    align-self: flex-end;
    margin-top: 4px;
  }

  input {
    height: 3rem;
    margin: 0;
  }
`;
