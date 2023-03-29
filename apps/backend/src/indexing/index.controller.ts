import { IndexService } from './../indexing/indexService';
import { SearchService } from '../search/search.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('index')
export class IndexController {

  constructor(private readonly searchService: SearchService, private indexService: IndexService) { }

  @Post('create')
  async createIndex(@Body() body) {
    return await this.indexService.createIndex(body.data);
  }

  @Post('createType')
  async createIndexType() {
    return await this.indexService.createIndexType();
  }

  @Post('removeByQuery')
  async removeIndex(@Body() body) {
    return this.indexService.deleteByQuery(body.data);
  }
}
