import { SearchModule } from '../search/search.module';
import { Module } from '@nestjs/common';
import { IndexController } from './index.controller';
import { IndexService } from './indexService';

@Module({
  imports: [SearchModule],
  controllers: [IndexController],
  providers: [IndexService],
})
export class IndexModule {}
