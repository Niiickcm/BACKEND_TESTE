type AddItemTask = {
  id: number;
  title: string;
  completed: boolean;
};

type UpdateItemTask = {
  completed: boolean;
};

// Simulação de uma base de dados em memória
export var tasks: AddItemTask[] = [
  { id: 1, title: "Fazer Café", completed: true },
  { id: 2, title: "Ir no shopping", completed: false },
  { id: 3, title: "Estudar", completed: true },
];

// Função para listar todos os itens
export function getAllItems() {
  return tasks;
}

// Função para buscar um item pelo ID
export function getItemById(id: number) {
  return tasks.find((item) => item.id === id);
}

// Função para adicionar um novo item
export function addItem(newItem: AddItemTask) {
  tasks.push(newItem);
}

// Função para atualizar um item existente
export function updateItem(id: number, updatedItem: UpdateItemTask) {
  const index = tasks.findIndex((item) => item.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...updatedItem };
    return true;
  }
  return false;
}

// Função para remover um item pelo ID
export function removeItem(id: number) {
  tasks = tasks.filter((item) => item.id !== id);
}
