import { IApiResponse } from '../../utils/interfaces/api-response';
import { File, GalleryResult } from './file.model';

export interface IFileService {
  uploadImage: (image: Blob) => Promise<IApiResponse<File>>;
  uploadFormDate: (data: FormData) => Promise<IApiResponse<File>>;
  getImageUrl: (path: string) => string;
  getGallery: () => Promise<IApiResponse<GalleryResult>>;
}
