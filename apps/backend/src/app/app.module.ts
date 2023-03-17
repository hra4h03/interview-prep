import { PrepService } from '../prep/prep.service';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PrepController } from '../prep/prep.controller';
import { prepSchema } from '../prep/models/prep.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/interview-prep', { useNewUrlParser: true }),
    MongooseModule.forFeature([{ name: 'Prep', schema: prepSchema }])
  ],
  controllers: [AppController, PrepController],
  providers: [AppService, PrepService],
})
export class AppModule { }
