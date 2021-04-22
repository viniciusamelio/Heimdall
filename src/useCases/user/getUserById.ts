import { Request } from "express";
import { PrismaClient } from '@prisma/client';

const getUserByIdUseCase = async (request: Request, prisma: PrismaClient) => {
    try {
        const user = await prisma.users.findFirst({
            where: {
                id: parseInt(request.params.id)
            }
        });
        return user;
    } catch (error) {
        throw error;
    }
}

export default getUserByIdUseCase;