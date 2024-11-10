import { Request, Response } from "express";
import { Login } from "../models/Login";
import AppDataSource from "../config/data-source";

const loginRepository = AppDataSource.getRepository(Login);

export const createLogin = async (req: Request, res: Response) => {
  const { usuario, senha, admin } = req.body;
  const login = loginRepository.create({ usuario, senha, admin });
  await loginRepository.save(login);
  res.status(201).json(login);
};

export const getLogins = async (_req: Request, res: Response) => {
  const logins = await loginRepository.find();
  res.json(logins);
};

export const getLoginById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const login = await loginRepository.findOneBy({ id: parseInt(id) });
  res.json(login);
};

export const updateLogin = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { usuario, senha, admin } = req.body;
  await loginRepository.update(id, { usuario, senha, admin });
  res.sendStatus(200);
};

export const deleteLogin = async (req: Request, res: Response) => {
  const { id } = req.params;
  await loginRepository.delete(id);
  res.sendStatus(200);
};
