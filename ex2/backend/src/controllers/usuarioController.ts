import { Request, Response } from "express";
import { Usuario } from "../models/Usuario";
import AppDataSource from "../config/data-source";

const usuarioRepository = AppDataSource.getRepository(Usuario);

// CREATE: Create a new Usuario
export const createUsuario = async (req: Request, res: Response) => {
  const { cpf, telefone } = req.body;

  // Validate required fields
  if (!cpf || !telefone) {
    res.status(400).json({ message: "CPF and Telefone are required" });
    return;
  }

  // Validate CPF format (Brazilian CPF - 11 digits)
  const cpfRegex = /^\d{11}$/;
  if (!cpfRegex.test(cpf)) {
    res.status(400).json({ message: "Invalid CPF format" });
    return;
  }

  // Validate Telefone format (Brazilian telefone - 9 digits)
  const telefoneRegex = /^\d{9}$/;
  if (!telefoneRegex.test(telefone)) {
    res.status(400).json({ message: "Invalid telefone format" });
    return;
  }

  try {
    const usuario = usuarioRepository.create({ cpf, telefone });
    await usuarioRepository.save(usuario);
    res.status(201).json(usuario);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error creating usuario", error });
    return;
  }
};

// GET: Get all Usuarios
export const getUsuarios = async (_req: Request, res: Response) => {
  try {
    const usuarios = await usuarioRepository.find();
    res.json(usuarios);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error fetching usuarios", error });
    return;
  }
};

// GET: Get a single Usuario by ID
export const getUsuarioById = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Validate ID
  if (isNaN(Number(id))) {
    res.status(400).json({ message: "Invalid ID format" });
    return;
  }

  try {
    const usuario = await usuarioRepository.findOneBy({ id: Number(id) });

    if (!usuario) {
      res.status(404).json({ message: "Usuario not found" });
      return;
    }

    res.json(usuario);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error fetching usuario", error });
    return;
  }
};

// UPDATE: Update a Usuario by ID (do not allow CPF update)
export const updateUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { telefone } = req.body;

  // Validate required fields
  if (!telefone) {
    res.status(400).json({ message: "Telefone is required" });
    return;
  }

  // Validate Telefone format (Brazilian telefone - 9 digits)
  const telefoneRegex = /^\d{9}$/;
  if (!telefoneRegex.test(telefone)) {
    res.status(400).json({ message: "Invalid telefone format" });
    return;
  }

  try {
    const usuario = await usuarioRepository.findOneBy({ id: Number(id) });

    if (!usuario) {
      res.status(404).json({ message: "Usuario not found" });
      return;
    }

    // Prevent CPF from being updated
    if (req.body.cpf) {
      res.status(400).json({ message: "CPF cannot be updated" });
      return;
    }

    usuario.telefone = telefone;

    await usuarioRepository.save(usuario);
    res.json(usuario);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error updating usuario", error });
    return;
  }
};

// DELETE: Delete a Usuario by ID
export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Validate ID
  if (isNaN(Number(id))) {
    res.status(400).json({ message: "Invalid ID format" });
    return;
  }

  try {
    const usuario = await usuarioRepository.findOneBy({ id: Number(id) });

    if (!usuario) {
      res.status(404).json({ message: "Usuario not found" });
      return;
    }

    await usuarioRepository.remove(usuario);
    res.status(200).send();
    return;
  } catch (error) {
    res.status(500).json({ message: "Error deleting usuario", error });
    return;
  }
};
