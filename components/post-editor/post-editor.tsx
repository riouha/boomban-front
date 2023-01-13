import { EditableQuill, ReadonlyQuill } from './quill';
import css from './post-editor.module.css';
import { Modal } from '../modal/modal';
import { ChangeEvent, useState } from 'react';
import { Backdrop } from '../backdrop/backdrop';
import { postService } from '../../services/post/post.service';
import { fileService } from '../../services/file/file.service';

export function PostEditor() {
  const [thumbnail, setThumbnail] = useState<File>();
  const [thumnailUrl, setThumbnailUrl] = useState<string>();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState();
  const [showPreview, setShowPreview] = useState(false);

  const handleSaveDraft = async () => {
    console.log(content);
    const result = await postService.addPost({
      title,
      content,
      thumbnail: thumnailUrl,
      status: 'Published',
    });
    console.log(result);
  };

  const handleChooseThumbnail = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      setThumbnail(file);
    }
  };

  const handleUploadThumbnail = async () => {
    if (!thumbnail) return;
    const result = await fileService.uploadImage(thumbnail);
    if (result.error) console.log(result);
    setThumbnailUrl(result.data?.filepath);
  };

  return (
    <>
      <div className={css.newpost}>
        <div style={{ background: '#888', width: '100%', marginBottom: '10px' }}>انتشار پست جدید</div>

        <div className={css.post}>
          <div className={css.editor}>
            <input
              className={css.title}
              placeholder='عنوان پست'
              value={title}
              onChange={(e: any) => setTitle(e.target.value)}
            />
            <EditableQuill setValue={setContent} rtl />
          </div>
          <div className={css.settings}>
            <button className='appbtn' style={{ borderRadius: '5px', marginLeft: '10px' }}>
              ذخیره و انتشار
            </button>
            <button className='appbtn' style={{ borderRadius: '5px', marginLeft: '10px' }} onClick={handleSaveDraft}>
              ذخیره پیشنویس
            </button>
            <button
              className='appbtn'
              style={{ borderRadius: '5px', marginLeft: '10px' }}
              onClick={() => setShowPreview(true)}
            >
              پیشنمایش
            </button>
            <br />
            <br />
            <br />
            <input type='file' onChange={handleChooseThumbnail} />
            {thumbnail && (
              <>
                <img src={URL.createObjectURL(thumbnail)} alt='' width={100} />
                <button onClick={handleUploadThumbnail}>save thumbnail mage</button>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal show={showPreview}>
        <h1>{title}</h1>
        <ReadonlyQuill value={content} />
      </Modal>
      <Backdrop show={showPreview} setShow={setShowPreview} />
    </>
  );
}
