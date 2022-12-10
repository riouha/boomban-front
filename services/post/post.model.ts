import { Omit } from '../../utils/types/omit.type';

export class Post {
  id!: number;
  title!: string;
  content!: string;
}

export class CreatePostData extends Omit(Post, ['id']) {}
