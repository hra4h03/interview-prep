import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

const client = new Client({
    cloud: { id: '<cloud-id>' },
    auth: { apiKey: 'base64EncodedKey' }
})

@Injectable()
export class SearchService {
    async getSearchResults() {
        const results = await client.search({
            index: 'game-of-thrones',
            query: {
                match: { quote: 'winter' }
            }
        })
        return results
    }

    async createSearchIndex() {
        const index =await client.index({
            index: 'game-of-thrones',
            document: {
                character: 'Ned Stark',
                quote: 'Winter is coming.'
            }
        })
        return index;
    }
}
