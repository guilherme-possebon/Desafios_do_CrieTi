import { api } from "../axios/axios";

export interface PatineteInterface {
  funcionando?: boolean;
  locado: boolean;
}

const getAllPatinetes = async (locado: boolean) => {
  try {
    const response = await api.get(`/patinetes/locado/${locado}`);
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

export const postPatinete = async () => {
  const patinete: PatineteInterface = {
    funcionando: true,
    locado: false,
  };
  const response = await api.post(`/patinetes/`, patinete);
  return response.data;
};

export const getPatineteById = async (id: number) => {
  const response = await api.get(`/patinetes/${id}`);
  return response.data;
};

export const patinetesApi = {
  getAllPatinetes,
  updatePatinete,
  getPatineteById,
  postPatinete,
};
