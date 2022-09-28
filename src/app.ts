import express from "express";
import bodyParser from "body-parser";
import * as swaggerUi from 'swagger-ui-express';
import { config as dotConfig } from 'dotenv';

import { RegisterRoutes } from "../build/routes";
import * as swaggerJson from '../build/swagger.json';
import { config } from './config';

dotConfig();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

RegisterRoutes(app);

console.log(swaggerJson, 'hi');


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.listen(config.port, () => {
    console.log(`API started on port ${config.port}`);
});
