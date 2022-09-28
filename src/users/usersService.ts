import { User } from './user';

export type UserCreationParams = Pick<User, 'email' | 'name'>;

export class UsersService {
	public get(id: number, name?: string) : User {
		return {
			id: 1,
			name: 'hi',
			email: 'some@one.com',
			status: 'Happy'
		}
	}

	public create (userCreationParams: UserCreationParams) : User {
		return {
			id: Math.floor(Math.random() * 10000),
			status: 'Happy',
			...userCreationParams,

		};
	}	

}

