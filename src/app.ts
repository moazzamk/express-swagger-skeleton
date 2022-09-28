import express from "express";
import bodyParser from "body-parser";
import * as swaggerUi from 'swagger-ui-express';
import { config as dotConfig } from 'dotenv';

import { RegisterRoutes } from "../build/routes";
import * as swaggerJson from '../build/swagger.json';
import { config } from './config';
import {corsProvider} from "../providers/cors";
import { log } from './utils/logger';

dotConfig();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(corsProvider());

RegisterRoutes(app);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.listen(config.port, () => {
    log.info(`API started on port ${config.port}`);
});
