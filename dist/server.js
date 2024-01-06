"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
//a
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Rotas para tarefas
app.use("/tasks", taskRoutes_1.default);
// Handler para erros 404
app.use((req, res, next) => {
    const error = new Error("Recurso não encontrado");
    res.status(404).json({ message: error.message });
});
// Handler para outros erros
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
//Setando a porta do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
