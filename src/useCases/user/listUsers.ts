import { PrismaClient } from '@prisma/client';
const listUsers = async(prisma:PrismaClient)=>{
    const users = await prisma.users.findMany();
    return users;
}

export default listUsers;