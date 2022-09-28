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

	/**
	 * Gets a user by ID and/or name
	 * @summary Gets a user by ID and/or name
	 */
	@Security('api_key')
	@Get('{userId}')
	public async getUser(@Request() req: any) : Promise<User> {
		console.log(req.user);
		return new UsersService().get(req.query.userId, req.query.name);
	}

	/**
	 * Adds a user
	 * @summary Adds a user
	 */
	@SuccessResponse('201', 'Created')
	@Post()
	public async createUser(
		@Body() requestBody: UserCreationParams
	) : Promise<void> {

		this.setStatus(201);
		new UsersService().create(requestBody);
	}
}

