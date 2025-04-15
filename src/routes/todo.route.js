import { Router } from "express";
import { createTodoController, deleteToDoController, listToDoController, updateToDoController } from "../controllers/todo.controller.js";
import { ensureDataIsValid } from "../middlewares/ensureDataisValided.middleware.js";
import { ensureDataExist } from "../middlewares/ensureDataExist.middleware.js";

const router = Router()

router.post('/todo', ensureDataIsValid, createTodoController)
router.get('/todo', listToDoController)
router.delete('/todo/:id', ensureDataExist, deleteToDoController)
router.patch('/todo/:id', ensureDataExist, ensureDataIsValid, updateToDoController)

export default router