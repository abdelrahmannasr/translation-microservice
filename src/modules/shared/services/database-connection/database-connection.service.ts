import { GlobalRepository } from '../../data';
import { Constants } from './../../../../common';
import {
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class DatabaseConnectionService {
  private logger = new Logger('DatabaseConnectionService', { timestamp: true });

  constructor(
    @InjectConnection() private globalConnection: Connection,
    @Inject(forwardRef(() => GlobalRepository)) private readonly globalRepository: GlobalRepository,
  ) {}

  async getDatabaseConnection(envId: string): Promise<Connection> {
    try {
      let dataBaseConnection = this.globalConnection;
      if (this.globalConnection) {
        this.logger.log(`Connecting to ${Constants.GLOBAL_DB} DB...`);
        this.globalConnection.useDb(Constants.GLOBAL_DB);
        this.logger.log(`Connected to ${Constants.GLOBAL_DB} DB`);
      }

      const tenantDatabase = await this.globalRepository.getTenantInfoByEnvId(envId);

      if (!tenantDatabase) {
        throw new NotFoundException(`No database found for env ID: ${envId}`);
      }

      if (this.globalConnection) {
        this.logger.log(`Connecting to ${tenantDatabase.dbName} DB...`);
        dataBaseConnection = this.globalConnection.useDb(tenantDatabase.dbName);
        this.logger.log(`Connected to  ${tenantDatabase.dbName} DB...`);
        this.logger.log(dataBaseConnection.name);
      }

      return dataBaseConnection;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException();
    }
  }
}
