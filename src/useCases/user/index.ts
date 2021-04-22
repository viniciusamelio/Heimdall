import { PrismaClient } from ".prisma/client";
import { Request } from "express";
import BCryptService from "../../services/hashService";
import createUser from "./createUser";
import deleteUser from "./deleteUser";
import getUserByIdUseCase from "./getUserById";
import listUsers from "./listUsers";
import updateUser from "./updateUser";

export default class UserController{
    prisma:PrismaClient;
    hashService:BCryptService;

    constructor(){
        this.prisma = new PrismaClient();
        this.hashService = new BCryptService();
    }

    getUserById = (request: Request) => getUserByIdUseCase(request,this.prisma);

    createUser = (request:Request) => createUser(request,this.prisma, this.hashService);

    listUsers = () => listUsers(this.prisma);

    updateUser = (request:Request) => updateUser(request,this.prisma,this.hashService);

    deleteUser = (request:Request) => deleteUser(request,this.prisma);
}