import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import taskRoutes from "./routes/taskRoutes";

const app = express();
const PORT = process.env.PORT || 3001;
//a
app.use(express.json());

app.use(cors());

// Rotas para tarefas
app.use("/tasks", taskRoutes);

// Handler para erros 404
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Recurso não encontrado");
  res.status(404).json({ message: error.message });
});

// Handler para outros erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

//Setando a porta do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
