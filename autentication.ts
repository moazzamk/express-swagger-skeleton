import express from 'express';

export function expressAuthentication(
    request: express.Request,
    securityName: string,
    scopes?: string[]
) {

    if (securityName == 'api_key') {
        const key = request.headers['x-api_key'];
        if (key == 'abc') {
            return Promise.resolve({
                id: 1,
                name: 'some-user',
            });
        }
        else {
            Promise.reject({});
        }
    }
}

