import { SharedModule } from '../shared/shared.module';
import { Module } from '@nestjs/common';
import { TranslationController } from './controllers/translation.controller';
import { TranslationService } from './services/translation.service';

@Module({
  imports: [SharedModule],
  controllers: [TranslationController],
  providers: [TranslationService],
})
export class TranslationModule {}
