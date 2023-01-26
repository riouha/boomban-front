import { Omit } from '../../utils/types/omit.type';

export class PostModel {
  id!: number;
  slug!: string;
  title!: string;
  type!: string;
  status!: string;
  content?: string;
  htmlContent?: string;
  thumbnail?: string;
  source?: string;
  sourceData?: {
    name: string;
    title: string;
    logo?: string;
  };
  link?: string;
  publishDate?: string;

  createUserId?: number;
  createUser?: {
    id: number;
    email: string;
    fullname: string;
  };
  createDate!: string;
}

// export class CreatePostData extends Omit(Post, ['id','slug']) {}
export class CreatePostData {
  title?: string;
  status?: string;
  content?: string;
  htmlContent?: string;
  thumbnail?: string;
}
