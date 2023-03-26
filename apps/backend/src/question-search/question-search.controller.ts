import { SearchService } from '../search/search.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('question')
export class QuestionSearchController {

  constructor(private readonly searchService: SearchService) { }

  // @Post('createIndex')
  // async createIndex(@Body() body) {
  //   return await this.searchService.createIndex(body.data);
  // }

  @Post('indexQuestion')
  async indexQuestion(@Body() body) {
    return await this.searchService.indexQuestion(body.data);
  }

  @Post('search')
  async searchQuestion(@Body() body) {
    return await this.searchService.searchQuestion(body.data);
  }

  @Post('remove')
  async removeQuestion(@Body() body) {
    return this.searchService.deleteQuestionIndex(body.data);
  }
}
