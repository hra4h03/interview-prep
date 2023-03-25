import { SearchService } from './../search/search.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  constructor(private readonly searchService: SearchService) {}

  @Post('search')
  async search(@Body() body) {
    return await this.searchService.search(body.data);
  }
}
