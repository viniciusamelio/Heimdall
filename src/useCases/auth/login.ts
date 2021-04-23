import { PrismaClient } from ".prisma/client";
import { Request } from "express";
import BCryptService from "../../services/hashService";
import JWTService from "../../services/jwtService";

const login = async(request:Request, prisma:PrismaClient, hashService: BCryptService, jwtService: JWTService)=>{
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
        user.password = "";
        user.token = jwtService.sign(user);
        return user;
    } catch (error) {
        throw error;
    }
}

export default login;