import { Request, Response } from "express";
import { Patinete } from "../models/Patinete";
import AppDataSource from "../config/data-source";

const patineteRepository = AppDataSource.getRepository(Patinete);

// CREATE: Create a new Patinete
export const createPatinete = async (req: Request, res: Response) => {
  const { funcionando, locado } = req.body;

  // Validate required fields
  if (funcionando === undefined || locado === undefined) {
    res.status(400).json({ message: "Funcionando and Locado are required" });
    return;
  }

  // Validate 'funcionando' and 'locado' must be boolean
  if (typeof funcionando !== "boolean") {
    res.status(400).json({ message: "Funcionando must be a boolean" });
    return;
  }

  if (typeof locado !== "boolean") {
    res.status(400).json({ message: "Locado must be a boolean" });
    return;
  }

  try {
    // Create and save the Patinete entity
    const patinete = patineteRepository.create({ funcionando, locado });
    await patineteRepository.save(patinete);
    res.status(201).json(patinete);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error creating patinete", error });
    return;
  }
};

// GET: Get all Patinetes
export const getPatinetes = async (_req: Request, res: Response) => {
  try {
    const locado = _req.params.locado;

    let validatedLocado: boolean = false;

    if (locado == "true") {
      validatedLocado = true;
    } else if (locado == "false") {
      validatedLocado = false;
    } else {
      res.status(500).json({ message: "Send true or false" });
      return;
    }

    const patinetes = await patineteRepository.find({
      where: {
        locado: validatedLocado,
      },
      order: {
        id: "ASC",
      },
    });
    res.json(patinetes);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error fetching patinetes", error });
    return;
  }
};

// GET: Get a single Patinete by ID
export const getPatineteById = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Validate ID
  if (isNaN(Number(id))) {
    res.status(400).json({ message: "Invalid ID format" });
    return;
  }

  try {
    const patinete = await patineteRepository.findOneBy({ id: Number(id) });

    if (!patinete) {
      res.status(404).json({ message: "Patinete not found" });
      return;
    }

    res.json(patinete);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error fetching patinete", error });
    return;
  }
};

// UPDATE: Update a Patinete by ID
export const updatePatinete = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { funcionando, locado } = req.body;

  // Validate required fields
  if (funcionando === undefined || locado === undefined) {
    res.status(400).json({ message: "Funcionando and Locado are required" });
    return;
  }

  // Validate 'funcionando' and 'locado' must be boolean
  if (typeof funcionando !== "boolean") {
    res.status(400).json({ message: "Funcionando must be a boolean" });
    return;
  }

  if (typeof locado !== "boolean") {
    res.status(400).json({ message: "Locado must be a boolean" });
    return;
  }

  try {
    const patinete = await patineteRepository.findOneBy({ id: Number(id) });

    if (!patinete) {
      res.status(404).json({ message: "Patinete not found" });
      return;
    }

    patinete.funcionando = funcionando;
    patinete.locado = locado;

    await patineteRepository.save(patinete);
    res.json(patinete);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error updating patinete", error });
    return;
  }
};

// DELETE: Delete a Patinete by ID
export const deletePatinete = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Validate ID
  if (isNaN(Number(id))) {
    res.status(400).json({ message: "Invalid ID format" });
    return;
  }

  try {
    const patinete = await patineteRepository.findOneBy({ id: Number(id) });

    if (!patinete) {
      res.status(404).json({ message: "Patinete not found" });
      return;
    }

    await patineteRepository.remove(patinete);
    res.status(200).send();
    return;
  } catch (error) {
    res.status(500).json({ message: "Error deleting patinete", error });
    return;
  }
};
