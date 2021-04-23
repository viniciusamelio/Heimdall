import express from 'express';
import AuthController from '../../useCases/auth';

const router = express.Router();

const authController = new AuthController();

router.post('/login',async(request,response)=>{
    try {
        const authUser = await authController.login(request);
        if(!authUser) return response.status(404).json({message: "E-mail e/ou senha não batem!"});
        return response.json(authUser);
    } catch (error) {
        return response.status(500).json(error);
    }
});

router.get('/jwt',async(request,response)=>{
    try {
        const foundUser = await authController.checkToken(request);
        return response.json(foundUser);
    } catch (error) {
        return response.status(403).json(error);
    }
});

export default router;