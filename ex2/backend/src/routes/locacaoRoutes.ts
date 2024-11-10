import { Router } from "express";
import {
  createLocacao,
  getLocacoes,
  getLocacaoById,
  updateLocacao,
  deleteLocacao,
} from "../controllers/locacaoController";

export const locacaoRoutes = Router();

locacaoRoutes.post("/", createLocacao); // Create Locacao
locacaoRoutes.get("/", getLocacoes); // Get all Locacoes
locacaoRoutes.get("/:id", getLocacaoById); // Get Locacao by ID
locacaoRoutes.put("/:id", updateLocacao); // Update Locacao by ID
locacaoRoutes.delete("/:id", deleteLocacao); // Delete Locacao by ID
