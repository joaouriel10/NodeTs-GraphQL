import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { User } from '@models/User';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, username } = request.body;
        const createUserService = container.resolve(CreateUserService) 
        const user = await createUserService.execute({ name, username });

        return response.status(201).json(user);
    }
}

export { CreateUserController }