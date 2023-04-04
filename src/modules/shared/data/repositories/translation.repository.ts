import { Translation, TranslationSchema } from '../schemas';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DatabaseConnectionService } from '../..';

@Injectable()
export class TranslationRepository {
  private logger = new Logger('TranslationRepository');

  constructor(
    private databaseConnectionService: DatabaseConnectionService,
    @InjectModel(Translation.name) private translationModel: Model<Translation>,
  ) {}

  async testConnections(): Promise<Translation[]> {
    const conn = await this.databaseConnectionService.getDatabaseConnection('507f1f77bcf86cd799439013');
    this.logger.log(conn);
    return [];
  }

  async findAllTranslation(): Promise<Translation[]> {
    const conn = await this.databaseConnectionService.getDatabaseConnection('507f1f77bcf86cd799439013');

    this.translationModel = conn.model(Translation.name, TranslationSchema);

    const translations = await this.translationModel.find().exec();
    this.logger.log(translations);
    return translations;
  }
}
