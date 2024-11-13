import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import {
  ButtonContainer,
  FormContainer,
  LoginContainer,
  LoginTitle,
  ErrorMessage,
} from "./styles";

interface LoginFormData {
  email: string;
  password: string;
}

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const submitForm = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <LoginContainer>
      <LoginTitle>Faça seu login na aplicação</LoginTitle>
      <FormContainer onSubmit={handleSubmit(submitForm)}>
        <div>
          <Input
            label="E-mail"
            type="email"
            {...register("email", {
              required: "E-mail é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "E-mail inválido",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <div>
          <Input
            label="Senha"
            type="password"
            {...register("password", {
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <ButtonContainer>
          <button type="submit">Entrar </button>
        </ButtonContainer>
      </FormContainer>
    </LoginContainer>
  );
}
