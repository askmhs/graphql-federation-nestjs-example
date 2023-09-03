import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [];

  create(createPostInput: CreatePostInput) {
    this.posts.push(createPostInput);

    return createPostInput;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: string) {
    return this.posts.find((post) => post.id === id);
  }

  update(id: string, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: string) {
    return `This action removes a #${id} post`;
  }

  forAuthor(authorId: string) {
    return this.posts.filter((post) => post.authorId === authorId);
  }
}
