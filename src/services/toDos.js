import prisma from '../config/database.js'

export const createTodoService = async(title) =>{
    const toDo = await prisma.todo.create({
        data:{
            title,
            done:false
        }
    })

    return toDo
}

export const listTodoService = async (search) =>{
    if(search){
        const listTodo = await prisma.todo.findMany({
            where:{
                title:{
                    contains: search,
                    mode:'insensitive'
                }
            }
        })
        return listTodo
    }
    
    return await prisma.todo.findMany();
}

export const deleteTodoService = async(id) =>{
    return await prisma.todo.delete({
        where: {
            id: Number(id)
        }
    })
}

export const updateTodoService = async(id, title, done) =>{
    const updateTodo = await prisma.todo.update({
        where:{
            id: Number(id)
        },
        data:{
            title: title,
            done: done ? done : false
        }
    })

    return updateTodo
}