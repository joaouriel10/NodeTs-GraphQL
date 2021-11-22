import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetPostByUserService } from '../services/GetPostByUserService';

class GetPostsByUserController {
    async get(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getPostByUserService = container.resolve(GetPostByUserService);
        const posts = await getPostByUserService.execute(id);

        return response.json(posts);
    }
}

export { GetPostsByUserController };