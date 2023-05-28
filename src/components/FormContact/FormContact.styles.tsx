import styled, { css, keyframes } from "styled-components";

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

  @media (max-width: 800px) {
    margin-top: 1rem;
  }
`;

export const ContainerInput = styled.div`
  opacity: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

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

export const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    cursor: pointer;
  }
`;
