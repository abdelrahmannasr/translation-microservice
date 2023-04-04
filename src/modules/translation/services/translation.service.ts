import { MapperHelper } from './../../shared';
import { TranslationRepository, TranslationResponse } from '../../shared/data';
import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';

@Injectable()
export class TranslationService {
  private logger = new Logger('TranslationService', { timestamp: true });

  constructor(private readonly translationRepository: TranslationRepository) {}

  async getAllTranslations(): Promise<TranslationResponse[]> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.translationRepository.testConnections();
        const translations = await this.translationRepository.findAllTranslation();

        const mappedResponse = MapperHelper.toClientList(TranslationResponse, translations);
        resolve(mappedResponse);
      } catch (error) {
        this.logger.error(error);
        return reject(new InternalServerErrorException());
      }
    });
  }
}
