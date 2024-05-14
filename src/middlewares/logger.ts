import { Request, Response, NextFunction } from 'express';
import { Logger } from 'winston';

export function injectLog(req: Request, res: Response, next: NextFunction, logger: Logger) {
  // logger.info(`Request path: ${req.path}`);
  next();
}
