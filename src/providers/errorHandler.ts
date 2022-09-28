import {ValidateError} from "@tsoa/runtime";
import { log } from '../utils/logger';


export const jsonErrorHandler = (err, req, res, next) => {
  res.setHeader('Content-Type', 'application/json');

  if (err instanceof ValidateError) {
    log.warn(`Validation error ${req.path}`, err.fields);
    return res.status(422)
        .json({
          success: false,
          message: 'Validation failed',
          details: err?.fields
        })
  }

  return res.status(err.status)
      .json({
        status: err.status,
        message: err.message
      });
};
