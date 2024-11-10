import { Request, Response } from "express";
import { Locacao } from "../models/Locacao";
import AppDataSource from "../config/data-source";
import { Usuario } from "../models/Usuario";
import { Patinete } from "../models/Patinete";
import { FormaPagamento } from "../models/FormaPagamento";

const locacaoRepository = AppDataSource.getRepository(Locacao);
const usuarioRepository = AppDataSource.getRepository(Usuario);
const patineteRepository = AppDataSource.getRepository(Patinete);
const formaPagamentoRepository = AppDataSource.getRepository(FormaPagamento);

// CREATE: Create a new Locacao
export const createLocacao = async (req: Request, res: Response) => {
  const {
    data_locacao,
    data_devolucao,
    usuario,
    patinete,
    formaPagamento,
    valor_pagamento,
  } = req.body;

  // Validate required fields
  if (
    !data_locacao ||
    !usuario ||
    !patinete ||
    !formaPagamento ||
    valor_pagamento === undefined
  ) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  // Validate if the usuario exists
  const usuarioExist = await usuarioRepository.findOneBy({ id: usuario.id });
  if (!usuarioExist) {
    res.status(400).json({ message: "Usuario not found" });
    return;
  }

  // Validate if the patinete exists
  const patineteExist = await patineteRepository.findOneBy({ id: patinete.id });
  if (!patineteExist) {
    res.status(400).json({ message: "Patinete not found" });
    return;
  }

  // Validate if the formaPagamento exists
  const formaPagamentoExist = await formaPagamentoRepository.findOneBy({
    id: formaPagamento.id,
  });
  if (!formaPagamentoExist) {
    res.status(400).json({ message: "FormaPagamento not found" });
    return;
  }

  try {
    const locacao = locacaoRepository.create({
      data_locacao,
      data_devolucao,
      usuario: usuarioExist,
      patinete: patineteExist,
      formaPagamento: formaPagamentoExist,
      valor_pagamento,
    });

    await locacaoRepository.save(locacao);
    res.status(201).json(locacao);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error creating locacao", error });
    return;
  }
};

// GET: Get all Locacoes
export const getLocacoes = async (_req: Request, res: Response) => {
  try {
    const locacoes = await locacaoRepository.find({
      relations: ["usuario", "patinete", "formaPagamento"],
    });
    res.json(locacoes);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error fetching locacoes", error });
    return;
  }
};

// GET: Get a single Locacao by ID
export const getLocacaoById = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Validate ID
  if (isNaN(Number(id))) {
    res.status(400).json({ message: "Invalid ID format" });
    return;
  }

  try {
    const locacao = await locacaoRepository.findOne({
      where: { id: Number(id) },
      relations: ["usuario", "patinete", "formaPagamento"],
    });

    if (!locacao) {
      res.status(404).json({ message: "Locacao not found" });
      return;
    }

    res.json(locacao);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error fetching locacao", error });
    return;
  }
};

// UPDATE: Update a Locacao by ID
export const updateLocacao = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    data_locacao,
    data_devolucao,
    usuario,
    patinete,
    formaPagamento,
    valor_pagamento,
  } = req.body;

  // Validate required fields
  if (
    !data_locacao ||
    !usuario ||
    !patinete ||
    !formaPagamento ||
    valor_pagamento === undefined
  ) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  // Validate if the usuario exists
  const usuarioExist = await usuarioRepository.findOneBy({ id: usuario.id });
  if (!usuarioExist) {
    res.status(400).json({ message: "Usuario not found" });
    return;
  }

  // Validate if the patinete exists
  const patineteExist = await patineteRepository.findOneBy({ id: patinete.id });
  if (!patineteExist) {
    res.status(400).json({ message: "Patinete not found" });
    return;
  }

  // Validate if the formaPagamento exists
  const formaPagamentoExist = await formaPagamentoRepository.findOneBy({
    id: formaPagamento.id,
  });
  if (!formaPagamentoExist) {
    res.status(400).json({ message: "FormaPagamento not found" });
    return;
  }

  try {
    const locacao = await locacaoRepository.findOneBy({ id: Number(id) });

    if (!locacao) {
      res.status(404).json({ message: "Locacao not found" });
      return;
    }

    locacao.data_locacao = data_locacao;
    locacao.data_devolucao = data_devolucao;
    locacao.usuario = usuarioExist;
    locacao.patinete = patineteExist;
    locacao.formaPagamento = formaPagamentoExist;
    locacao.valor_pagamento = valor_pagamento;

    await locacaoRepository.save(locacao);
    res.json(locacao);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error updating locacao", error });
    return;
  }
};

// DELETE: Delete a Locacao by ID
export const deleteLocacao = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Validate ID
  if (isNaN(Number(id))) {
    res.status(400).json({ message: "Invalid ID format" });
    return;
  }

  try {
    const locacao = await locacaoRepository.findOneBy({ id: Number(id) });

    if (!locacao) {
      res.status(404).json({ message: "Locacao not found" });
      return;
    }

    await locacaoRepository.remove(locacao);
    res.status(204).send(); // 204: No content
    return;
  } catch (error) {
    res.status(500).json({ message: "Error deleting locacao", error });
    return;
  }
};
