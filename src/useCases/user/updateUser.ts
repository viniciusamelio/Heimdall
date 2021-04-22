import { PrismaClient } from ".prisma/client";
import { Request } from "express";
import BCryptService from "../../services/hashService";

const updateUser = async(request:Request, prisma:PrismaClient,hashService: BCryptService)=>{
    try {
        const data = request.body;
        const password = await hashService.hash(data.password);
        const updateduser = await prisma.users.update({
            data: {
                name: data.name,
                password : password,
                sex: data.sex,
                birthdate: new Date(data.birthdate)
            },
            where:{
                id: parseInt(request.params.id)
            }
        });
    
        return updateduser;
    } catch (error) {
        console.log(error);
        throw error;
    }

}

export default updateUser;