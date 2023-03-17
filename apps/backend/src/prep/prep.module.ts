import { Module } from '@nestjs/common';
import { PrepService } from './prep.service';
import { PrepController } from './prep.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { prepSchema } from './models/prep.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Prep', schema: prepSchema }])
  ],
  providers: [PrepService],
  controllers: [PrepController],
})
export class PrepModule { }
