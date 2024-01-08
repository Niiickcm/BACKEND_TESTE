import { generateRandomNumber } from "../utils";

type AddItemTask = {
  id: string;
  title: string;
  completed: boolean;
};

type UpdateItemTask = {
  completed: boolean;
};

const hash = generateRandomNumber();

// Simulação de uma base de dados em memória
export var tasks: AddItemTask[] = [
  { id: hash, title: "Fazer Café", completed: true },
];

// Função para listar todos os itens
export function getAllItems() {
  return tasks;
}

// Função para buscar um item pelo ID
export function getItemById(id: string) {
  return tasks.find((item) => item.id === id);
}

// Função para adicionar um novo item
export function addItem(newItem: AddItemTask) {
  tasks.push(newItem);
}

// Função para atualizar um item existente
export function updateItem(id: string, updatedItem: UpdateItemTask) {
  const index = tasks.findIndex((item) => item.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...updatedItem };
    return true;
  }
  return false;
}

// Função para remover um item pelo ID
export function removeItem(id: string) {
  tasks = tasks.filter((item) => item.id !== id);
}
