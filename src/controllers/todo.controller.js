import {createTodoService, deleteTodoService, listTodoService, updateTodoService } from "../services/toDos.js"

export const createTodoController = async(req, res) =>{
    const { title } = req.body
    const toDo = await createTodoService(title)

    return res.status(200).json(toDo)
}

export const listToDoController = async (req, res) => {
    const {search} = req.query
    const listTodo = await listTodoService(search)

    return res.status(200).json(listTodo)
}

export const deleteToDoController = async (req, res) =>{
    const {id} = req.params
    await deleteTodoService(id)

    return res.status(204).send()
}

export const updateToDoController = async (req, res) =>{
    const {title, done} = req.body
    const {id} = req.params
    const updatedTodo = await updateTodoService(id,title,done)

    res.status(200).json(updatedTodo)
}