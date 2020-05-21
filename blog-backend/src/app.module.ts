import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './app.entities';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'secret',
      database: 'nest-blog',
      autoLoadEntities: true,
      entities,
      migrations: ['migrations/*.ts'],
      cli: {
        migrationsDir: 'migrations',
      },
      synchronize: true,
    }),
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
