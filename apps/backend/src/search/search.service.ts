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
    const results = new Set();
    const response: any = await this.esService.search({
      index: this.configService.get('ELASTICSEARCH_INDEX'),
      body: {
        size: 50,
        query: {
          match_phrase: search
        }
      }
    });
    const hits = response.hits.hits;
    hits.map((item) => results.add(item._source));

    return { results: Array.from(results), total: response.hits.total };
  }
}
