import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/Post.entity';
import { CreatePostDTO } from './dto/create-post.dto'
@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private postsRepo: Repository<Post>) {}

  findAll() : Promise<Post[]> {
      
    return this.postsRepo.find();
  }

  findOne(id: number) : Promise<Post> {
    
    return this.postsRepo.findOne(id);
  }

  async createPost(createPostDto: CreatePostDTO) : Promise<Post> {
    createPostDto.date = new Date();
    const post = this.postsRepo.create(createPostDto);
    return  this.postsRepo.save(post);

  }

  async updatePost(id: number, createPostDto: CreatePostDTO) : Promise<Post> {
    await this.postsRepo.update(id, createPostDto);

    return await this.postsRepo.findOne(id);

  }

  async deletePost(id: number): Promise<boolean> {
    const results = await this.postsRepo.softDelete(id);
    
    return true;
  }

}
