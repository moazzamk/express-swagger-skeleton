import * as winston from "winston";
import { config } from '../config';

export const log = winston.createLogger({
    // We can add winston config here based on project requirements
});

if (config.nodeEnv !== 'production') {
    log.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}