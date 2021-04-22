import { PrismaClient } from ".prisma/client";
import { Request } from "express";
import BCryptService from "../../services/hashService";
import login from "./login";

export default class AuthController{
    hashService:BCryptService;
    prisma: PrismaClient;

    constructor(){
        this.hashService = new BCryptService();
        this.prisma = new PrismaClient();
    }

    login = (request:Request) => login(request,this.prisma,this.hashService);
}