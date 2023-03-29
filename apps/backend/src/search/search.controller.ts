import { Body, Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  // @Get('post')
  // async searchPost(@Body() body) {
  //   return await this.searchService.searchPost(body.data);
  // }
  @Get('post')
  async searchPost(@Query() query) {
    return await this.searchService.searchPost(query);
  }
}
