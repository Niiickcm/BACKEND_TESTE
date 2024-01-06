import express, { Router } from "express";
import {
  getTasks,
  createNewTask,
  deleteOneTask,
  updateTask,
} from "../handlers/taskHandlers";

const router: Router = express.Router();

router.get("/", getTasks);
router.post("/", createNewTask);
router.delete("/:id", deleteOneTask);
router.put("/:id", updateTask);

export default router;
