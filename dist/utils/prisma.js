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
exports.updateTaskUtil = exports.deleteTaskUtil = exports.createTaskUtil = exports.getAllTaksUtil = void 0;
const prisma_1 = require("../lib/prisma");
const getAllTaksUtil = () => __awaiter(void 0, void 0, void 0, function* () {
    const returnData = yield prisma_1.prisma.tasks.findMany();
    return returnData;
});
exports.getAllTaksUtil = getAllTaksUtil;
const createTaskUtil = ({ title, completed }) => __awaiter(void 0, void 0, void 0, function* () {
    const returnData = yield prisma_1.prisma.tasks.create({
        data: {
            title,
            completed,
        },
    });
    return returnData;
});
exports.createTaskUtil = createTaskUtil;
const deleteTaskUtil = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const returnData = yield prisma_1.prisma.tasks.delete({
        where: {
            id: id,
        },
    });
    return returnData;
});
exports.deleteTaskUtil = deleteTaskUtil;
const updateTaskUtil = ({ id, completed }) => __awaiter(void 0, void 0, void 0, function* () {
    const returnData = yield prisma_1.prisma.tasks.update({
        where: {
            id: id,
        },
        data: {
            completed,
        },
    });
    return returnData;
});
exports.updateTaskUtil = updateTaskUtil;
