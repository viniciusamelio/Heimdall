import { Request } from "express";
import { PrismaClient } from '@prisma/client';
import HashService from '../../services/hashService/';


const createUser = async (request: Request, prisma: PrismaClient, hashService: HashService) => {
    try {
        const data = request.body;
        const hash = await hashService.hash(data.password);
        const user = await prisma.users.create({
            data: {
                name: data.name,
                email: data.email,
                password: hash,
                created_at: new Date(),
                updated_at: new Date(),
                birthdate: new Date(data.birthdate),
                sex: data.sex
            }
        });
        return user;
    } catch (error) {
        throw error;
    }
}

export default createUser;