import { Request, Response } from "express";
import { FormaPagamento } from "../models/FormaPagamento";
import AppDataSource from "../config/data-source";

const formaPagamentoRepository = AppDataSource.getRepository(FormaPagamento);

// CREATE: Create a new FormaPagamento
export const createFormaPagamento = async (req: Request, res: Response) => {
  const { forma_pagamento } = req.body;

  // Validate required fields
  if (!forma_pagamento) {
    res.status(400).json({ message: "Forma pagamento is required" });
    return;
  }

  try {
    const formaPagamento = formaPagamentoRepository.create({ forma_pagamento });
    await formaPagamentoRepository.save(formaPagamento);
    res.status(201).json(formaPagamento);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error creating formaPagamento", error });
    return;
  }
};

// GET: Get all FormaPagamentos
export const getFormaPagamentos = async (_req: Request, res: Response) => {
  try {
    const formaPagamentos = await formaPagamentoRepository.find();
    res.json(formaPagamentos);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error fetching formaPagamentos", error });
    return;
  }
};

// GET: Get a single FormaPagamento by ID
export const getFormaPagamentoById = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Validate ID
  if (isNaN(Number(id))) {
    res.status(400).json({ message: "Invalid ID format" });
    return;
  }

  try {
    const formaPagamento = await formaPagamentoRepository.findOneBy({
      id: Number(id),
    });

    if (!formaPagamento) {
      res.status(404).json({ message: "FormaPagamento not found" });
      return;
    }

    res.json(formaPagamento);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error fetching formaPagamento", error });
    return;
  }
};

// UPDATE: Update a FormaPagamento by ID
export const updateFormaPagamento = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { forma_pagamento } = req.body;

  // Validate required fields
  if (!forma_pagamento) {
    res.status(400).json({ message: "Forma pagamento is required" });
    return;
  }

  try {
    const formaPagamento = await formaPagamentoRepository.findOneBy({
      id: Number(id),
    });

    if (!formaPagamento) {
      res.status(404).json({ message: "FormaPagamento not found" });
      return;
    }

    formaPagamento.forma_pagamento = forma_pagamento;

    await formaPagamentoRepository.save(formaPagamento);
    res.json(formaPagamento);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error updating formaPagamento", error });
    return;
  }
};

// DELETE: Delete a FormaPagamento by ID
export const deleteFormaPagamento = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Validate ID
  if (isNaN(Number(id))) {
    res.status(400).json({ message: "Invalid ID format" });
    return;
  }

  try {
    const formaPagamento = await formaPagamentoRepository.findOneBy({
      id: Number(id),
    });

    if (!formaPagamento) {
      res.status(404).json({ message: "FormaPagamento not found" });
      return;
    }

    await formaPagamentoRepository.remove(formaPagamento);
    res.status(200).send();
    return;
  } catch (error) {
    res.status(500).json({ message: "Error deleting formaPagamento", error });
    return;
  }
};
