import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';


@Injectable()
export class SearchService {
  constructor(
    private readonly esService: ElasticsearchService,
    private readonly configService: ConfigService,
  ) { }

  async searchPost(search: { key: string }) {
    const keys = Object.keys(search);
    const searchQuery = { [keys[0]]: search[keys[0]] };
    console.log('searchQuery ', searchQuery);
    
    const results = new Set();
    const response: any = await this.esService.search({
      index: this.configService.get('ELASTICSEARCH_INDEX'),
      body: {
        size: 50,
        query: {
          match_phrase: searchQuery
        }
      }
    });
    const hits = response?.body?.hits?.hits;

    hits.map((item) => results.add(item._source));

    return { results: Array.from(results), total: response.body?.hits?.total };
  }
}
