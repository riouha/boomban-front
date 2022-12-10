import { axiosInstance } from '../../api/axios.instance';
import { SearchFilters } from '../../utils/base-classes/search-filters';
import { IApiResponse } from '../../utils/interfaces/api-response';
import { Post, CreatePostData } from './post.model';
import { IPostService } from './post.service.interface';
import { SearchResult } from '../../utils/types/search-result.type';

export class PostService implements IPostService {
  async searchPosts(filters: SearchFilters): Promise<IApiResponse<SearchResult<{ posts: Post[] }>>> {
    try {
      const result = await axiosInstance.get('/post');
      return {
        data: { count: result.data.count, posts: result.data.posts },
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }

  async getPost(id: number): Promise<IApiResponse<Post>> {
    try {
      const result = await axiosInstance.get(`/post/${id}`);
      return {
        data: result.data as Post,
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }

  async addPost(data: CreatePostData): Promise<IApiResponse<Post>> {
    try {
      const result = await axiosInstance.post('/post', { data });
      return {
        data: result.data as Post,
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }
}
