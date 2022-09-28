import {
    Body,
    Controller,
    Post,
    Route, Tags,
} from "tsoa";
import { sign } from 'jsonwebtoken';

import { LoginParams } from "./loginParams";
import { LoginSuccessResponse } from "./loginSuccessResponse";
import { config } from "../config";
import { log } from "../utils/logger";

@Tags('Authentication')
@Route('login')
export class LoginController extends Controller {
    @Post()
    public async login(@Body() loginParams : LoginParams) : Promise<LoginSuccessResponse> {
        const user = { // we should probably put this in one place (config?) and reference it everywhere
            id: 1,
            email: 'some-user'
        };

        log.info(`User logged in `, user);

        return Promise.resolve({
            success: true,
            token: sign(user, config.jwt.secret)
        });
    }
}
