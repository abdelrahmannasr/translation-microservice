import { TranslationResponse } from '../../shared/data';
import { Controller, Get, InternalServerErrorException, Logger, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TranslationService } from '../services/translation.service';
import { Constants } from './../../../common';

@Controller(Constants.TRANSLATIONS_PATH)
export class TranslationController {
  private logger = new Logger('TranslationController', { timestamp: true });

  constructor(private readonly translationService: TranslationService) {}

  @Get()
  @ApiOperation({ summary: 'Get list of translations', tags: [Constants.TRANSLATION_TAG] })
  @ApiResponse({ status: 200, description: 'translations retrieved successfully', type: [TranslationResponse] })
  @UsePipes(new ValidationPipe({ transform: true }))
  getAllTranslations(): Promise<TranslationResponse[]> {
    try {
      return this.translationService.getAllTranslations();
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException();
    }
  }
}
