import { Body, Controller, Post } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post('search')
  async searchPost(@Body() body) {
    return await this.searchService.searchPost(body.data);
  }
}
