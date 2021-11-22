import { container } from 'tsyringe';
import { GetUsersService } from '../services/GetUserService';
import { CreateUserService } from '../services/CreateUserService';

const usersResolvers = {
    Query: {
        getAllUsers() {
            const getUserService = container.resolve(GetUsersService);
            const users = getUserService.execute();
            
            return users;
        }
    },
    Mutation: {
        createUsers(_, {input}) {
            const createUserService = container.resolve(CreateUserService);
            const user = createUserService.execute(input);

            return user;
        }
    }
}

export default usersResolvers;