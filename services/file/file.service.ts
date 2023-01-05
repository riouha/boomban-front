import { axiosInstance, BaseURL } from '../../api/axios.instance';
import { IApiResponse } from '../../utils/interfaces/api-response';
import { IFileService } from './file.interface';
import { File } from './file.model';

class FileService implements IFileService {
  async uploadImage(image: Blob): Promise<IApiResponse<File>> {
    try {
      const data = new FormData();
      data.append('image', image);

      const result = await axiosInstance.post('/file/image', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return {
        data: result.data as File,
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }
  async uploadFormDate(data: FormData): Promise<IApiResponse<File>> {
    try {
      const result = await axiosInstance.post('/file/image', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return {
        data: result.data as File,
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }

  getImageUrl(path: string) {
    return `${BaseURL}/file/${path}`;
  }
}

export const fileService = new FileService();
