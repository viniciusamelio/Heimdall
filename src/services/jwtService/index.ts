import jwt from 'jsonwebtoken';

const authConfig = require('../../config/auth');

export default class JWTService{

    sign = (user:any) : string =>{
        const token = jwt.sign({
            id:user.id
        },authConfig.secret, {
            expiresIn: 86400 * 10
        });
        return token;
    }

    check = async (token:String)=>{
        if(!token) throw {message: "Token inválido"};

        const parts = token.split(' ');
        if(parts.length !== 2) throw {message: "Token inválido"};

        const [ type, tokenString ] = parts;

        if(!/^Bearer$/i.test(type)) throw {message: "Token inválido"};

        let jwtContent : any = null;

        await jwt.verify(tokenString,authConfig.secret, async (error : any, decoded : any)=>{
            if(error) throw error;
            jwtContent = decoded;
        });

        return jwtContent;

    }
}