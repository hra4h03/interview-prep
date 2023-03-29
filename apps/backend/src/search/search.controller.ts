import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('blog')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('search')
  async searchPost(@Query() query) {
    return await this.searchService.searchPost(query);
  }
}
