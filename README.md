# Typescript ExpressJS API Skeleton

This is a skeleton API that uses Typescript, Express and Swagger for 
API documentation. The swagger spec is generated from annotations
on top of controller methods along with routes for Express. It helps
keep the docs for the API up to date .

### Setup

To start the project, you need to run: 
```
yarn install

# This is optional but helpful if you want to
# maintain multiple environments
cp example.env .env

# Start the development server
yarn dev
```


### Commands

- To start the development server , run :
  ```
  yarn dev
  ```
  It listens to any changes to `.ts` files and restarts the web server.


- To generate swagger spec (and thus, swagger docs) and the API routes, run
  ```
  yarn build 
  ```
  
- To run tests
  ```
  yarn test
  ```

### Places
- `tsoa.json` contains the general OpenAPI spec. You
  can define your security schemes, tags, etc in it
- Routes are defined in controllers using annotations. These are used
  to generate the actual routes file and the OpenAPI spec in `build`
  folder
- `GET /users/{id}` is a protected endpoint that requires an authenticated user. You 
  can use it as an example to create other protected endpoints
- `/providers` contains all middleware
- `http://.../docs` will show Swagger UI with API endpoints that you
  can use to test the API out
  
### Helpful links
- https://github.com/lukeautry/tsoa/blob/master/packages/tsoa/tsconfig.json
- https://tsoa-community.github.io/docs/getting-started.html