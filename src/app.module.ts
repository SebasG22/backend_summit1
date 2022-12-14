import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AlbumResolver } from './albums/album.resolver';
import { AlbumService } from './albums/album.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongResolver } from './songs/song.resolver';
import { SongService } from './songs/song.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      debug: false,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AlbumResolver,
    SongResolver,
    AlbumService,
    SongService,
  ],
})
export class AppModule {}
