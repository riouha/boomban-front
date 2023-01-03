import { EditableQuill, ReadonlyQuill } from './quill';
import css from './post-editor.module.css';
import { Modal } from '../modal/modal';
import { useState } from 'react';
import { Backdrop } from '../backdrop/backdrop';

export function PostEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState();
  const [showPreview, setShowPreview] = useState(false);

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
            <EditableQuill setValue={setContent} />
          </div>
          <div className={css.settings}>
            <button className='appbtn' style={{ borderRadius: '5px', marginLeft: '10px' }}>
              ذخیره و انتشار
            </button>
            <button className='appbtn' style={{ borderRadius: '5px', marginLeft: '10px' }}>
              ذخیره پیشنویس
            </button>
            <button
              className='appbtn'
              style={{ borderRadius: '5px', marginLeft: '10px' }}
              onClick={() => setShowPreview(true)}
            >
              پیشنمایش
            </button>
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
