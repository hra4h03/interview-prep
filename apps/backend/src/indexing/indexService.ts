import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

interface SearchBody {
    _id?: string,
    id: string,
    title: string,
    categoryId: string,
    description: string,
    categoryName: string,
    categoryImage: string
}

interface SearchResult {
    hits: {
        total: number;
        hits: Array<{
            _source: SearchBody;
        }>;
    };
}

@Injectable()
export class IndexService {
    constructor(
        private readonly esService: ElasticsearchService,
        private readonly configService: ConfigService,
    ) { }

    createIndexData(post: SearchBody) {
        const { title, description, categoryId, categoryName, categoryImage } = post;
        const postId = (post._id).toString();
        return {
            id: postId, title, description, categoryId, categoryName, categoryImage
        }
    }

    async createIndex(post: any) {
        const data = this.createIndexData(post);
        this.createIndexType();
        return this.esService.index<SearchBody>({
            index: this.configService.get('ELASTICSEARCH_INDEX'),
            body: {
                id: data.id,
                title: data.title,
                categoryId: data.categoryId,
                description: data.description,
                categoryName: data.categoryName,
                categoryImage: data.categoryImage
            }
        })
    }

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
                            categoryId: {
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

    async deleteByQuery(post) {
        this.esService.deleteByQuery({
            index: this.configService.get('ELASTICSEARCH_INDEX'),
            body: {
                query: {
                    match: {
                        id: post.id
                    }
                }
            }
        })
    }
}
