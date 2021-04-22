import { PrismaClient } from ".prisma/client";
import { Request } from "express";

const deleteUser =async(request:Request, prisma: PrismaClient)=>{
    try {   
        await prisma.users.delete({
            where:{
                id: parseInt(request.params.id)
            }
        });
        return {message: "Usuário removido!"}
    } catch (error) {
        throw error;
    }
}

export default deleteUser;