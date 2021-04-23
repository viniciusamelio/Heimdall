import { PrismaClient } from ".prisma/client";
import { Request } from "express";
import BCryptService from "../../services/hashService";
import JWTService from "../../services/jwtService";
import checkToken from "./checkToken";
import login from "./login";

export default class AuthController{
    private hashService:BCryptService;
    private prisma: PrismaClient;
    private jwtService: JWTService;

    constructor(){
        this.hashService = new BCryptService();
        this.prisma = new PrismaClient();
        this.jwtService = new JWTService();
    }

    login = (request:Request) => login(request,this.prisma,this.hashService,this.jwtService);

    checkToken = (request:Request) => checkToken(request,this.prisma,this.jwtService);
}