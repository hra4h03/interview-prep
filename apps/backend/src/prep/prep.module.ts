import { Module } from '@nestjs/common';
import { PrepService } from './prep.service';
import { PrepController } from './prep.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PrepSchema } from './models/prep.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: PrepSchema }])
  ],
  providers: [PrepService],
  controllers: [PrepController],
})
export class PrepModule { }
