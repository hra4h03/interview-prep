import { IndexService } from './../indexing/indexService';
import { SearchService } from '../search/search.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('index')
export class IndexController {

  constructor(private readonly searchService: SearchService, private indexService: IndexService) { }

  @Post('create')
  async indexPost(@Body() body) {
    return await this.indexService.createIndex(body.data);
  }

  @Post('remove')
  async removePost(@Body() body) {
    return this.indexService.deleteIndex(body.data);
  }
}
