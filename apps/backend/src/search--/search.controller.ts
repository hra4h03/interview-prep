import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) { }

  @Get('results')
  async search(@Res() res) {
    const results = await this.searchService.getSearchResults();
    return res.status(HttpStatus.OK).json(results);
  }

  @Post('create-index')
  async createIndex(@Res() res) {
    const results = await this.searchService.createSearchIndex();
    return res.status(HttpStatus.OK).json(results);
  }
}
