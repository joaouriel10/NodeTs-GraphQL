import { Router } from 'express';
import { CreateUserController } from '@modules/users/controllers/CreateUserController';
import { GetPostsByUserController } from '@modules/posts/controllers/GetPostsByUserController';

const routes = Router();

const createUserController = new CreateUserController(); 
const getPostByUserService = new GetPostsByUserController(); 

routes.post('/users', createUserController.create);
routes.get('/posts/user/:id', getPostByUserService.get);

export { routes };