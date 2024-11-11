import { useState } from "react";
import { userApi } from "../../api/routes/user"; // Ensure the path is correct
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button,
  ErrorMessage,
} from "./styled";
import Swal from "sweetalert2";

interface User {
  cpf: string;
  telefone: string;
}

export function Register() {
  const [user, setUser] = useState<User>({ cpf: "", telefone: "" });
  const [error, setError] = useState<string>("");
  const [successAlert, setSuccessAlert] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (successAlert) {
    Swal.fire({
      title: "Registrado com sucesso!",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      }
    });
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(user);

    try {
      const response = await userApi.registerUser(user);
      console.log(response);
      setSuccessAlert(true);
      setError("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Title>Create an Account</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="cpf">CPF</Label>
        <Input
          type="text"
          id="cpf"
          name="cpf"
          value={user.cpf}
          onChange={handleChange}
          required
        />

        <Label htmlFor="telefone">Phone Number</Label>
        <Input
          type="text"
          id="telefone"
          name="telefone"
          value={user.telefone}
          onChange={handleChange}
          required
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </Button>
      </Form>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}
