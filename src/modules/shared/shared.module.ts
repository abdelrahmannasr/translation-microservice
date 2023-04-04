import { Constants } from './../../common';
import { Global, GlobalRepository, GlobalSchema, Translation, TranslationRepository, TranslationSchema } from './data';
import { Module } from '@nestjs/common';
import { DatabaseConnectionService } from './services';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`${Constants.DB_BASE_URI}${Constants.GLOBAL_DB}?authSource=admin`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([
      { name: Global.name, schema: GlobalSchema },
      { name: Translation.name, schema: TranslationSchema },
    ]),
  ],
  providers: [DatabaseConnectionService, TranslationRepository, GlobalRepository],
  exports: [DatabaseConnectionService, TranslationRepository, GlobalRepository],
})
export class SharedModule {}
