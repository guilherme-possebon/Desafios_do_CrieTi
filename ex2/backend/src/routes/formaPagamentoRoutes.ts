import { Router } from "express";
import {
  createFormaPagamento,
  getFormaPagamentoById,
  updateFormaPagamento,
  deleteFormaPagamento,
  getFormaPagamentos,
} from "../controllers/formaPagamentoController";

export const formaPagamentoRoutes = Router();

formaPagamentoRoutes.post("/", createFormaPagamento); // Create FormaPagamento
formaPagamentoRoutes.get("/", getFormaPagamentos); // Get all FormaPagamentos
formaPagamentoRoutes.get("/:id", getFormaPagamentoById); // Get FormaPagamento by ID
formaPagamentoRoutes.put("/:id", updateFormaPagamento); // Update FormaPagamento by ID
formaPagamentoRoutes.delete("/:id", deleteFormaPagamento); // Delete FormaPagamento by ID
