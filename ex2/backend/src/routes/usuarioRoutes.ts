import { Router } from "express";
import {
  createUsuario,
  getUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
} from "../controllers/usuarioController";

export const usuarioRoutes = Router();

usuarioRoutes.post("/", createUsuario); // Create Usuario
usuarioRoutes.get("/", getUsuarios); // Get all Usuarios
usuarioRoutes.get("/:id", getUsuarioById); // Get Usuario by ID
usuarioRoutes.put("/:id", updateUsuario); // Update Usuario by ID
usuarioRoutes.delete("/:id", deleteUsuario); // Delete Usuario by ID
