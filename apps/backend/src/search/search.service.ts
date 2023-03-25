import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

type dataResponse = {
  UnitPrice: number;
  Description: string;
  Quantity: number;
  Country: string;
  InvoiceNo: string;
  InvoiceDate: Date;
  CustomerID: number;
  StockCode: string;
};

@Injectable()
export class SearchService {
  constructor(
    private readonly esService: ElasticsearchService,
    private readonly configService: ConfigService,
  ) {}

  async createIndex() {
    const isIndexExist = await this.esService.indices.exists({
      index: this.configService.get('ELASTICSEARCH_INDEX'),
    });

    if (!isIndexExist) {
      this.esService.indices.create({
        index: this.configService.get('ELASTICSEARCH_INDEX'),
        body: {
          mappings: {
            properties: {
              '@timestamp': {
                type: 'date',
              },
              budget: {
                type: 'long',
              },
              genres: {
                type: 'text',
              },
              homepage: {
                type: 'keyword',
              },
              id: {
                type: 'long',
              },
              keywords: {
                type: 'text',
              },
              original_language: {
                type: 'keyword',
              },
              original_title: {
                type: 'text',
              },
              overview: {
                type: 'text',
              },
              popularity: {
                type: 'double',
              },
              production_companies: {
                type: 'text',
              },
              production_countries: {
                type: 'text',
              },
              release_date: {
                type: 'date',
                format: 'iso8601',
              },
              revenue: {
                type: 'long',
              },
              runtime: {
                type: 'long',
              },
              spoken_languages: {
                type: 'text',
              },
              status: {
                type: 'keyword',
              },
              tagline: {
                type: 'text',
              },
              title: {
                type: 'text',
              },
              vote_average: {
                type: 'double',
              },
              vote_count: {
                type: 'long',
              },
            },
          },
        },
      });
    }
  }

  async search(search: {key: string}) {
    const results = new Set();
    const response = await this.esService.search({
      index: this.configService.get('ELASTICSEARCH_INDEX'),
      body: {
        size: 50,
        query: {
          match_phrase: search
        },
      },
    });
    const hits = response.hits.hits;
    hits.map((item) => {
      results.add(item._source as dataResponse);
    });

    return { results: Array.from(results), total: response.hits.total };
  }
}
