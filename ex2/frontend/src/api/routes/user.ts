import { api } from "../axios/axios";

interface User {
  cpf: string;
  telefone: string;
}

const registerUser = async (user: User) => {
  try {
    const response = await api.post("/usuarios/", user);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

export const userApi = {
  registerUser,
};
