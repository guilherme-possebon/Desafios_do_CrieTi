import styled from "styled-components";

interface LabelProps {
  htmlFor: string;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const Label = styled.label<LabelProps>`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme["base-text"]};
`;

export const InputField = styled.input`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 16px;
  outline: none;
  font-size: 1rem;

  &:focus {
    border-color: ${(props) => props.theme["green-500"]};
  }
`;

export const TextareaField = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 16px;
  outline: none;
  font-size: 1rem;

  &:focus {
    border-color: ${(props) => props.theme["green-500"]};
  }
`;
