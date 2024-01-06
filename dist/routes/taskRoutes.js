"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskHandlers_1 = require("../handlers/taskHandlers");
const router = express_1.default.Router();
router.get("/", taskHandlers_1.getTasks);
router.post("/", taskHandlers_1.createNewTask);
router.delete("/:id", taskHandlers_1.deleteOneTask);
router.put("/:id", taskHandlers_1.updateTask);
exports.default = router;
