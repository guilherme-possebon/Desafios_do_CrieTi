import express from "express";
import {
  createLogin,
  getLogins,
  getLoginById,
  updateLogin,
  deleteLogin,
} from "../controllers/loginController";

export const loginRoutes = express.Router();

loginRoutes.post("/", createLogin);
loginRoutes.get("/", getLogins);
loginRoutes.get("/:id", getLoginById);
loginRoutes.put("/:id", updateLogin);
loginRoutes.delete("/:id", deleteLogin);
