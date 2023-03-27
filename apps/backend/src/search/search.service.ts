import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

interface QuestionSearchBody {
  id: string,
  title: string,
  categoryId: string,
  description: string,
  categoryName: string,
  categoryImage: string
}

interface QuestionSearchResult {
  hits: {
    total: number;
    hits: Array<{
      _source: QuestionSearchBody;
    }>;
  };
}

@Injectable()
export class SearchService {
  constructor(
    private readonly esService: ElasticsearchService,
    private readonly configService: ConfigService,
  ) { }

  async indexQuestion(question: QuestionSearchBody) {
    console.log('question ', question);

    return this.esService.index<QuestionSearchBody>({
      index: this.configService.get('ELASTICSEARCH_INDEX'),
      body: {
        id: question.id,
        title: question.title,
        categoryId: question.categoryId,
        description: question.description,
        categoryName: question.categoryName,
        categoryImage: question.categoryImage
      }
    })
  }

  // async createIndexType() {
  //   await this.esService.indices.putMapping({
  //     body: {
  //       mappings: {
  //         properties: {
  //           id: {
  //             type: 'long'
  //           },
  //           title: {
  //             type: 'text',
  //           },
  //           description: {
  //             type: 'text',
  //           },
  //           categoryId:{
  //             type: 'long'
  //           },
  //           categoryName: {
  //             type: 'text',
  //           },
  //           categoryImage: {
  //             type: 'text',
  //           }
  //         },
  //       },
  //     },
  //   })
  // }

  async createIndexType() {
    const index = this.configService.get('ELASTICSEARCH_INDEX');
    const isIndexExist = await this.esService.indices.exists({
      index: index
    });

    if (!isIndexExist) {
      this.esService.indices.create({
        index: this.configService.get('ELASTICSEARCH_INDEX'),
        body: {
          mappings: {
            properties: {
              id: {
                type: 'long'
              },
              title: {
                type: 'text',
              },
              description: {
                type: 'text',
              },
              categoryId:{
                type: 'long'
              },
              categoryName: {
                type: 'text',
              },
              categoryImage: {
                type: 'text',
              }
            },
          },
        },
      });
    }
  }

  async searchQuestion(search: { key: string }) {
    const results = new Set();
    const response = await this.esService.search({
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

  async deleteQuestionIndex(question) {
    this.esService.deleteByQuery({
      index: this.configService.get('ELASTICSEARCH_INDEX'),
      body: {
        query: {
          match: {
            id: question.id
          }
        }
      }
    })
  }
}
