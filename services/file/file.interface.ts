import { IApiResponse } from '../../utils/interfaces/api-response';
import { File } from './file.model';

export interface IFileService {
  uploadImage: (image: Blob) => Promise<IApiResponse<File>>;
  uploadFormDate: (data: FormData) => Promise<IApiResponse<File>>;
  getImageUrl: (path: string) => string;
}
