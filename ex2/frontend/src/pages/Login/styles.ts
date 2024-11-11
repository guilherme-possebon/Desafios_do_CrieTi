import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["green-300"]};
  height: calc(100vh - 84px);
  border-radius: 16px;
  margin: 41px 0;
`;
export const LoginTitle = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.white};
  margin-bottom: 30px;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  padding: 30px;
  background-color: ${(props) => props.theme.white};
  border-radius: 16px;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  max-width: 500px;

  & button {
    width: 100%;
    padding: 10px;
    background-color: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme.white};
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme["red-500"]};
  font-size: 0.875rem;
  margin-top: 5px;
  display: block;
`;
