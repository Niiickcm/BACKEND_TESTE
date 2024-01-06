import { prisma } from "../lib/prisma";

type CreateTask = {
  title: string;
  completed: boolean;
};

export type DeleteTask = {
  id: string;
};

type UpdateTask = {
  id: string;
  completed: boolean;
};

export const getAllTaksUtil = async () => {
  const returnData = await prisma.tasks.findMany();
  return returnData;
};

export const createTaskUtil = async ({ title, completed }: CreateTask) => {
  const returnData = await prisma.tasks.create({
    data: {
      title,
      completed,
    },
  });
  return returnData;
};

export const deleteTaskUtil = async (id: string) => {
  const returnData = await prisma.tasks.delete({
    where: {
      id: id,
    },
  });
  return returnData;
};

export const updateTaskUtil = async ({ id, completed }: UpdateTask) => {
  const returnData = await prisma.tasks.update({
    where: {
      id: id,
    },
    data: {
      completed,
    },
  });
  return returnData;
};
