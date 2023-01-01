import { Omit } from '../../utils/types/omit.type';

export class Post {
  id!: number;
  slug!: string;
  title!: string;
  type!: string;
  status!: string;
  content?: string;
  thumbnail?: string;
  source?: string;
  sourceData?: {
    name: string;
    title: string;
    logo?: string;
  };
  link?: string;
  publishDate?: string;
  createDate!: string;
}

export class CreatePostData extends Omit(Post, ['id']) {}
