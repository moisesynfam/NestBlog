import {
  Controller,
  Post as PostMethod,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreatePostDTO } from './dto/create-post.dto';
import { PostDTO } from './dto/post.dto';
import { Post } from './entities/post.entity';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @PostMethod()
  async createPost(@Body() createPostDto: CreatePostDTO): Promise<Post> {
    const post = await this.postService.createPost(createPostDto);
    return post;
  }

  @Get()
  async getAll(): Promise<Post[]> {
    return await this.postService.findAll();
  }

  @Get('/:id')
  async getPost(@Param('id') id: number): Promise<Post> {
    return await this.postService.findOne(id);
  }

  @Put('/:id')
  async updatePost(
    @Param('id') id: number,
    @Body() createPostDto: CreatePostDTO,
  ): Promise<Post> {
    return await this.postService.updatePost(id,createPostDto);
  }

  @Delete('/:id')
  async deletePost(
    @Param('id') id: number,
    
  ): Promise<boolean> {
    return await this.postService.deletePost(id);
  }
}
