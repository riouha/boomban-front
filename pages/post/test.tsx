import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { SunEditorReactProps } from 'suneditor-react/dist/types/SunEditorReactProps';
import { fileService } from '../../services/file/file.service';
import { postService } from '../../services/post/post.service';
import { ImageGallery } from '../../components/image-gallery/image-gallery';
import { Modal } from '../../components/modal/modal';
import { GalleryFile } from '../../services/file/file.model';
import { Backdrop } from '../../components/backdrop/backdrop';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const SunEditor = dynamic<SunEditorReactProps>(
  async () => {
    const { default: SunEditor } = await import('suneditor-react');
    return ({ ...props }) => <SunEditor {...props} />;
  },
  {
    ssr: false,
  }
);

const MyComponent = () => {
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [thumbnail, setThumbnaul] = useState<string>();
  console.log('thumbnail', thumbnail);

  const editor = useRef<any>();
  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };

  const onImageUploadBefore = (files: File[], info: any, uploadHandler: any) => {
    fileService
      .uploadImage(files[0])
      .then((result) => {
        uploadHandler({
          result: [
            {
              url: fileService.getImageUrl(result.data?.filepath!),
              name: result.data?.name,
              size: result.data?.size,
            },
          ],
        });
        return undefined;
      })
      .catch((err) => console.log(err));
  };

  const handleSavePost = async () => {
    if (!thumbnail) return;
    if (!editor.current) return;
    console.log(editor.current);

    const html = editor.current.getContents();

    // editor.current?.getText(' ');

    const result = await postService.addPost({
      title: 'some title',
      content: html.replace(/<[^>]+>/g, ' '),
      htmlContent: encodeURI(html),
      thumbnail,
      status: 'Published',
    });
    console.log(result);
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ direction: 'ltr', width: '60%', fontFamily: 'Vazirmatn' }}>
          <SunEditor
            setDefaultStyle='font-family: Vazirmatn;border:none !important;'
            autoFocus={true}
            onImageUploadBefore={onImageUploadBefore}
            // onImageUpload={handleImageUpload}
            getSunEditorInstance={getSunEditorInstance}
            setOptions={{
              resizingBar: false,
              // rtl: true,

              buttonList: [
                [
                  'font',
                  'fontSize',
                  'formatBlock',
                  'bold',
                  'fontColor',
                  'list',
                  'dir',
                  'align',
                  'image',
                  'table',
                  'link',
                  'outdent',
                  'indent',
                  'preview',
                ],
                [
                  '-right',
                  ':i-More Misc-default.more_vertical',
                  'undo',
                  'redo',
                  'blockquote',
                  'underline',
                  'italic',
                  'strike',
                  'removeFormat',
                  'hiliteColor',
                  'subscript',
                  'superscript',
                  'textStyle',
                  'horizontalRule',
                  'lineHeight',
                  'video',
                  // 'imageGallery',
                  'showBlocks',
                  // 'codeView',
                  // 'save',
                ],
              ],
              imageGalleryUrl: 'http://localhost:3400/file/gallery',
              imageGalleryHeader: { key: 'images' },
              font: ['Vazirmatn', 'Arial', 'Comic Sans MS', 'Courier New', 'Impact'],
            }}
            // defaultValue={}
            // readOnly={true}
            // hideToolbar={true}
            // disableToolbar={true}
            // disable={true}

            // onSave={handleSavePost}
          />

          <style jsx>{`
            .test {
            }
            .sun-editor {
              border: none !important;
            }
          `}</style>
        </div>
        <div style={{ width: '40%' }}>
          <button onClick={() => setShowGalleryModal(true)}>select thumbnail</button>
          <br />
          {thumbnail && <img src={fileService.getImageUrl(thumbnail)} width={300} alt='' />}
          <br />
          <button onClick={handleSavePost}>save</button>
        </div>
      </div>
      <Modal show={showGalleryModal}>
        <ImageGallery
          onImageSelect={(image: GalleryFile) => {
            setThumbnaul(image.filepath);
            setShowGalleryModal(false);
          }}
        />
      </Modal>
      <Backdrop show={showGalleryModal} setShow={setShowGalleryModal} />
    </>
  );
};
export default MyComponent;
