import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 40px;
  background: #056f97;
  color: #f8f8f8;
  margin: 0;
  font-size: 0.6vw;
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
