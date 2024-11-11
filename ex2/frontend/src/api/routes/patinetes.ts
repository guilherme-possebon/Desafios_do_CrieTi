import { api } from "../axios/axios";
interface PatineteInterface {
  funcionando?: boolean;
  locado: boolean;
}

const getAllPatinetes = async () => {
  try {
    const response = await api.get("/patinetes/");
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

const updatePatinete = async (id: number, patinete: PatineteInterface) => {
  try {
    const response = await api.put("/patinetes/" + id, patinete);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

export const getPatineteById = async (id: number) => {
  const response = await api.get(`/patinetes/${id}`);
  return response.data;
};

export const patinetesApi = {
  getAllPatinetes,
  updatePatinete,
  getPatineteById,
};
