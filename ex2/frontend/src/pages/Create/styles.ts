import styled from "styled-components";

export const CreateContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 32px;
  border-radius: 16px;
  border: none;
  background-color: ${(props) => props.theme["base-button"]};
  cursor: pointer;
  color: ${(props) => props.theme["gray-900"]};
  font-size: 2rem;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;
