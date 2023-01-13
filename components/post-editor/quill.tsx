import { ComponentType, useMemo, useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { fileService } from '../../services/file/file.service';
import { toast, ToastContainer } from 'react-toastify';

const ReactQuill: any = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    //@ts-ignore
    // const { ImageResize } = await import('quill-image-resize-module-react');
    // RQ.Quill.register('modules/ImageResize', ImageResize);
    // Quill.import('parchment');
    //@ts-ignore
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
  },
  {
    ssr: false,
  }
);

export function EditableQuill(props: { rtl?: boolean; setValue?: Function }) {
  const quillRef = useRef<any>();
  useEffect(() => {
    if (quillRef) {
      quillRef.current?.getEditor().format('direction', 'rtl');
      quillRef.current?.getEditor().format('align', 'right');
    }
  }, [quillRef]);

  const imageHandler = (e: any) => {
    const editor = quillRef.current?.getEditor();
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files![0];
      if (!/^image\//.test(file.type)) return toast.error('invalid file');
      console.log(file);
      const formData = new FormData();
      formData.append('file', file);
      const result = await fileService.uploadFormDate(formData);
      console.log(result);

      if (!result.data) return toast.error(result.message);
      const url = fileService.getImageUrl(result.data?.filepath);
      editor.insertEmbed(editor.getSelection(), 'image', url);
    };
  };
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          [{ direction: 'rtl' }],
          [{ align: [] }],
          ['image', 'link'],
          [
            {
              color: [
                '#000000',
                '#e60000',
                '#ff9900',
                '#ffff00',
                '#008a00',
                '#0066cc',
                '#9933ff',
                '#ffffff',
                '#facccc',
                '#ffebcc',
                '#ffffcc',
                '#cce8cc',
                '#cce0f5',
                '#ebd6ff',
                '#bbbbbb',
                '#f06666',
                '#ffc266',
                '#ffff66',
                '#66b966',
                '#66a3e0',
                '#c285ff',
                '#888888',
                '#a10000',
                '#b26b00',
                '#b2b200',
                '#006100',
                '#0047b2',
                '#6b24b2',
                '#444444',
                '#5c0000',
                '#663d00',
                '#666600',
                '#003700',
                '#002966',
                '#3d1466',
              ],
            },
          ],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      // imageResize: {
      //   displayStyles: {
      //     backgroundColor: 'black',
      //     border: 'none',
      //     color: 'white',
      //   },
      //   modules: ['Resize', 'DisplaySize', 'Toolbar'],
      // },
    }),
    []
  );

  return (
    <>
      <div style={{ direction: 'ltr' }}>
        <ReactQuill theme='snow' forwardedRef={quillRef} modules={modules} onChange={props.setValue} />
      </div>
      <ToastContainer
        position='top-left'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}

export function ReadonlyQuill(props: { value: any }) {
  return <ReactQuill theme='bubble' readOnly value={props.value} />;
}
