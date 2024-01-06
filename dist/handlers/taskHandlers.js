"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteOneTask = exports.createNewTask = exports.getTasks = void 0;
const prisma_1 = require("../utils/prisma");
const ErrorInitialMessage = "Ocorreu um erro ao ";
//função para listar todas as tasks
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Alltasks = yield (0, prisma_1.getAllTaksUtil)();
        res.json(Alltasks);
    }
    catch (error) {
        res.status(500).json({ error: ErrorInitialMessage + "obter as tarefas." });
    }
});
exports.getTasks = getTasks;
//função para adicionar uma task
const createNewTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, completed } = req.body;
        yield (0, prisma_1.createTaskUtil)({ title, completed });
        res.status(201).json({ message: "Tarefa criada com sucesso!" });
    }
    catch (error) {
        res.status(500).json({ error: ErrorInitialMessage + "criar a tarefa." });
    }
});
exports.createNewTask = createNewTask;
//função para deletar uma task
const deleteOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = req.params.id;
        yield (0, prisma_1.deleteTaskUtil)(taskId);
        res.status(204).json({ message: "Tarefa deletada com sucesso!" });
    }
    catch (error) {
        res.status(500).json({ error: ErrorInitialMessage + "excluir a tarefa." });
    }
});
exports.deleteOneTask = deleteOneTask;
//função para atulizar uma task especifica
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = req.params.id;
        const { completed } = req.body;
        const taskUpdate = yield (0, prisma_1.updateTaskUtil)({ id: taskId, completed });
        res.status(200).json(taskUpdate);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: ErrorInitialMessage + "atualizar a tarefa." });
    }
});
exports.updateTask = updateTask;
