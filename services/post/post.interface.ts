import { SearchFilters } from '../../utils/base-classes/search-filters';
import { Post, CreatePostData } from './post.model';
import { SearchResult } from '../../utils/types/search-result.type';
import { IApiResponse } from '../../utils/interfaces/api-response';

export interface IPostService {
  searchPosts: (filters: SearchFilters) => Promise<IApiResponse<SearchResult<{ posts: Post[] }>>>;
  getPost: (id: number) => Promise<IApiResponse<Post>>;
  addPost: (data: CreatePostData) => Promise<IApiResponse<Post>>;
}
