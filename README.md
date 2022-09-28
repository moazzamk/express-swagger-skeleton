# Typescript ExpressJS API Skeleton

This is a skeleton API that uses Typescript, Express and Swagger for 
API documentation. The swagger spec is generated from annotations
on top of controller methods along with routes for Express. It helps
keep the docs for the API up to date .


### Places
- To add OpenAPI (or Swagger) specs, you can modify `tsoa.json` . You
  can define your security schemes, tags, etc in it
- Routes are defined in controllers using annotations. These are used
  to generate the actual routes file and the OpenAPI spec in `build`
  folder
  


### Helpful links
- https://github.com/lukeautry/tsoa/blob/master/packages/tsoa/tsconfig.json
