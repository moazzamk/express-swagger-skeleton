import {
	Body,
	Controller,
	Get,
	Path,
	Post,
	Query,
	Request,
	Route,
	Tags,
	Security,
  	SuccessResponse,
} from "tsoa";

import { User } from './user';
import { UsersService, UserCreationParams } from './usersService';


@Route('users')
@Tags('Users')
export class UsersController extends Controller {

	@Security('api_key')
	@Get('{userId}')
	public async getUser(@Request() req: any) : Promise<User> {
		console.log(req.user);
		return new UsersService().get(req.query.userId, req.query.name);
	}

	@SuccessResponse('201', 'Created')
	@Post()
	public async createUser(
		@Body() requestBody: UserCreationParams
	) : Promise<void> {

		this.setStatus(201);
		new UsersService().create(requestBody);
	}


}

