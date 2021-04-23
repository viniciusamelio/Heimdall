import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import JWTService from "../../services/jwtService";

const checkToken = async (request:Request, prisma:PrismaClient, jwtService : JWTService)=>{
    try {
        const authHeader = request.headers.authorization;
        if(!authHeader) throw {message: "Token inválido"}
        const jwtDecoded = await jwtService.check(authHeader);
        if(jwtDecoded == undefined) throw {message: "Token inválido"};
        const foundUser = await prisma.users.findFirst({
            where:{
                id: jwtDecoded.id
            }
        });
        if(!foundUser) throw {message: "Token inválido"};
        return {message : "Token válido", expiresIn : jwtDecoded.exp};
    } catch (error) {
        throw error;
    }


}

export default checkToken;