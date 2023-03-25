import { SearchModule } from './../search/search.module';
import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';

@Module({
  imports: [SearchModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
