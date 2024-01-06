import { Request, Response } from "express";
import {
  createTaskUtil,
  deleteTaskUtil,
  getAllTaksUtil,
  updateTaskUtil,
} from "../utils/prisma";

const ErrorInitialMessage = "Ocorreu um erro ao ";

//função para listar todas as tasks
export const getTasks = async (req: Request, res: Response) => {
  try {
    const Alltasks = await getAllTaksUtil();

    res.json(Alltasks);
  } catch (error) {
    res.status(500).json({ error: ErrorInitialMessage + "obter as tarefas." });
  }
};

//função para adicionar uma task
export const createNewTask = async (req: Request, res: Response) => {
  try {
    const { title, completed } = req.body;

    await createTaskUtil({ title, completed });

    res.status(201).json({ message: "Tarefa criada com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: ErrorInitialMessage + "criar a tarefa." });
  }
};

//função para deletar uma task
export const deleteOneTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;

    await deleteTaskUtil(taskId);

    res.status(204).json({ message: "Tarefa deletada com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: ErrorInitialMessage + "excluir a tarefa." });
  }
};

//função para atulizar uma task especifica
export const updateTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    const { completed } = req.body;

    const taskUpdate = await updateTaskUtil({ id: taskId, completed });

    res.status(200).json(taskUpdate);
  } catch (error) {
    res
      .status(500)
      .json({ error: ErrorInitialMessage + "atualizar a tarefa." });
  }
};
