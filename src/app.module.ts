import { TranslationModule } from './modules/translation/translation.module';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AuditLoggerMiddleware } from './middleware';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [SharedModule, TranslationModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuditLoggerMiddleware).forRoutes({ path: '**', method: RequestMethod.ALL });
    consumer.apply().exclude().forRoutes({ path: '**', method: RequestMethod.ALL });
  }
}
