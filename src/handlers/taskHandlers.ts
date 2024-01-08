import { Request, Response } from "express";

import { addItem, getAllItems, removeItem, updateItem, tasks } from "../db";
import { idIcrement } from "../utils";

const ErrorInitialMessage = "Ocorreu um erro ao ";

//função para listar todas as tasks
export const getTasks = async (req: Request, res: Response) => {
  try {
    getAllItems();

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: ErrorInitialMessage + "obter as tarefas." });
  }
};

//função para adicionar uma task
export const createNewTask = async (req: Request, res: Response) => {
  try {
    const { title, completed } = req.body;

    const newItem = { id: idIcrement(tasks.length), title, completed };

    addItem(newItem);

    res.status(201).json({ data: newItem });
  } catch (error) {
    res.status(500).json({ error: ErrorInitialMessage + "criar a tarefa." });
  }
};

//função para deletar uma task
export const deleteOneTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;

    removeItem(Number(taskId));

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
    const updatedItem = { completed };

    updateItem(Number(taskId), updatedItem);

    res.status(200).json({ message: "Tarefa alterada com sucesso!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: ErrorInitialMessage + "atualizar a tarefa." });
  }
};
