import { PrismaClient } from ".prisma/client";
import { Request } from "express";
import BCryptService from "../../services/hashService";

const login = async(request:Request, prisma:PrismaClient, hashService: BCryptService)=>{
    try {
        const data = request.body;
        const user = await prisma.users.findFirst({
            where:{
                email: data.email,
            }
        });
        
        if(user == null){
            return false;
        }

        const authenticatedUser = await hashService.compare(data.password,user.password);

        if(!authenticatedUser)  return false;
        return user;
    } catch (error) {
        throw error;
    }
}

export default login;