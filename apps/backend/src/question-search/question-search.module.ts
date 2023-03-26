import { SearchModule } from '../search/search.module';
import { Module } from '@nestjs/common';
import { QuestionSearchService } from './question-search.service';
import { QuestionSearchController } from './question-search.controller';

@Module({
  imports: [SearchModule],
  controllers: [QuestionSearchController],
  providers: [QuestionSearchService],
})
export class QuestionSearchModule {}
