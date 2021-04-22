import express from 'express';
import UserController from '../../useCases/user';

const router = express.Router();
const userController = new UserController();

router.post('/user',async(request,response)=>{
    try {
        const user = await userController.createUser(request);
        if(user.email == null){
            return response.status(400).json(user);
        }
        return response.status(201).json(user);
    } catch (error) {
        return response.status(500).json(error);
    }   
});


router.get('/user/:id',async(request,response)=>{
    try {
        const user = await userController.getUserById(request);
        if(user == null){
            return response.status(404).json({message: "Usuário não encontrado"});
        }
        return response.json(user);
    } catch (error) {
        return response.status(500).json(error);
    }
});

router.get('/user',async(_,response)=>{
    try {
        const users = await userController.listUsers();
        return response.json(users);
    } catch (error) {
        return response.status(500).json(error);
    }
});

router.put('/user/:id',async(request,response)=>{
    try {
        const user = await userController.updateUser(request);
        return response.json(user);
    } catch (error) {
        return response.status(500).json(error);
    }
});

router.delete('/user/:id',async(request,response)=>{
    try {
        const message = await userController.deleteUser(request);
        return response.json(message);
    } catch (error) {
        return response.status(500).json(error);
    }
})

export default router;