import prisma from '../config/database.js'

export const ensureDataExist = async (req, res, next) =>{
    const {id} = req.params
    const data = await prisma.todo.findFirst({
        where:{
            id: Number(id)
        }
    })
    if(!data){
        return res.status(400).json("Todo não encontrado!")
    }
    
    return next()
}