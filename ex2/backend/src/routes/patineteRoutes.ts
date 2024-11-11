import { Router } from "express";
import {
  createPatinete,
  getPatinetes,
  getPatineteById,
  updatePatinete,
  deletePatinete,
} from "../controllers/patineteController";

export const patineteRoutes = Router();

patineteRoutes.post("/", createPatinete); // Create Patinete
patineteRoutes.get("/locado/:locado", getPatinetes); // Get all Patinetes
patineteRoutes.get("/:id", getPatineteById); // Get Patinete by ID
patineteRoutes.put("/:id", updatePatinete); // Update Patinete by ID
patineteRoutes.delete("/:id", deletePatinete); // Delete Patinete by ID
