import express from 'express';
import { verify } from 'jsonwebtoken';

import { config } from './config';

// This will get called for all authentication methods defined in SecurityScheme
export function expressAuthentication(
    request: express.Request,
    securityName: string,
    scopes?: string[]
) : Promise<any> {

    if (securityName == 'api_key') {
        const token = request.headers['x-api-key'];

        return new Promise((resolve, reject) => {
           if (!token) {
               reject(new Error('no token provided'))
           }
           const user = verify(token, config.jwt.secret);

           resolve(user); // this will be available in the controller as request.user
        });
    }
}
