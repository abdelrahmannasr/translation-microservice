import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuditLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('auditLoggerMiddleware');

  use(req: Request, res: Response, next: NextFunction) {
    const { rawHeaders, httpVersion, method, body, originalUrl, params, query, session } = req;

    const headers = res.getHeaders();
    this.logger.log('\u001b[' + 32 + 'm' + `[timestamp] >>>>> ${this.logger.localInstance}` + '\u001b[0m');
    this.logger.log('\u001b[' + 32 + 'm' + `[session] >>>>> ${JSON.stringify(session)}` + '\u001b[0m');
    this.logger.log('\u001b[' + 32 + 'm' + `[route] >>>>> ${JSON.stringify(originalUrl)}` + '\u001b[0m');
    this.logger.log('\u001b[' + 32 + 'm' + `[method] >>>>> ${JSON.stringify(method)}` + '\u001b[0m');
    this.logger.log('\u001b[' + 32 + 'm' + `[body] >>>>> ${JSON.stringify(body)}` + '\u001b[0m');
    this.logger.log('\u001b[' + 32 + 'm' + `[params] >>>>> ${JSON.stringify(params)}` + '\u001b[0m');
    this.logger.log('\u001b[' + 32 + 'm' + `[query] >>>>> ${JSON.stringify(query)}` + '\u001b[0m');
    this.logger.verbose('\u001b[' + 93 + 'm' + `[headers] >>>>> ${JSON.stringify(headers)}` + '\u001b[0m');
    this.logger.verbose('\u001b[' + 93 + 'm' + `[rawHeaders] >>>>> ${JSON.stringify(rawHeaders)}` + '\u001b[0m');
    this.logger.verbose('\u001b[' + 93 + 'm' + `[httpVersion] >>>>> ${JSON.stringify(httpVersion)}` + '\u001b[0m');
    next();
  }
}
