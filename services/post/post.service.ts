import { axiosInstance } from '../../api/axios.instance';
import { SearchFilters } from '../../utils/base-classes/search-filters';
import { IApiResponse } from '../../utils/interfaces/api-response';
import { Post, CreatePostData } from './post.model';
import { IPostService } from './post.service.interface';
import { SearchResult } from '../../utils/types/search-result.type';

class PostService implements IPostService {
  async upload(data: FormData): Promise<IApiResponse<{ url: string }>> {
    try {
      const result = await axiosInstance.post('/file/image', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return {
        data: { url: 'http://localhost:3400/file/' + result.data.filename },
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }
  async upload2(file: Blob): Promise<IApiResponse<{ url: string }>> {
    try {
      const data = new FormData();
      data.append('files', file);

      const result = await axiosInstance.post('/file/image', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return {
        data: { url: 'http://localhost:3400/file/' + result.data.filename },
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }
  async getPosts(): Promise<IApiResponse<{ posts: Post[] }>> {
    try {
      const result = await axiosInstance.get('/post');
      return {
        data: { posts: result.data },
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }
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

export const postService = new PostService();
