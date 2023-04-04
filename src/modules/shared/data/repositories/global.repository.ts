import { Global } from '../schemas';
import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class GlobalRepository {
  private logger = new Logger('GlobalRepository');

  constructor(@InjectModel(Global.name) private readonly globalModel: Model<Global>) {
    mongoose.set('debug', true);
  }

  async getTenantInfoByEnvId(envId: string): Promise<Global> {
    try {
      const envObjectId = new mongoose.Types.ObjectId(envId);
      const tenantDatabase = await this.globalModel.findOne({ envId: envObjectId }).exec();
      this.logger.log(tenantDatabase);
      return tenantDatabase;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException();
    }
  }
}
