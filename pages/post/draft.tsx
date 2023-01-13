import { EditorState } from 'draft-js';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import DraftPlugin from '../../components/post-editor/draft/draft-plugin';

// const Editor: any = dynamic(
//   async () => {
//     const { Editor } = await import('react-draft-wysiwyg');
//     return ({ ...props }) => <Editor {...props} />;
//     //@ts-ignore
//     // return ({ forwardedRef, ...props }) => <Editor ref={forwardedRef} {...props} />;
//   },
//   {
//     ssr: false,
//   }
// );

// export default function DraftPage() {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   return (
//     <div style={{ direction: 'ltr' }}>
//       <Editor
//         editorState={editorState}
//         toolbarClassName='toolbarClassName'
//         wrapperClassName='wrapperClassName'
//         editorClassName='editorClassName'
//         onEditorStateChange={setEditorState}
//         toolbar={{
//           options: [
//             'inline',
//             'blockType',
//             'fontSize',
//             'fontFamily',
//             'list',
//             'textAlign',
//             'colorPicker',
//             'link',
//             'embedded',
//             'emoji',
//             'image',
//             'remove',
//             'history',
//           ],

//           inline: {
//             inDropdown: false,
//             className: undefined,
//             component: undefined,
//             dropdownClassName: undefined,
//             options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
//           },
//           blockType: {
//             inDropdown: true,
//             options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
//             className: undefined,
//             component: undefined,
//             dropdownClassName: undefined,
//           },
//           fontSize: {
//             options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
//             className: undefined,
//             component: undefined,
//             dropdownClassName: undefined,
//           },
//           fontFamily: {
//             options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
//             className: undefined,
//             component: undefined,
//             dropdownClassName: undefined,
//           },
//           list: { inDropDown: true },
//           textAlign: { inDropDown: true },
//           link: { inDropDown: true },
//           history: { inDropDown: true },
//           image: { uploadCallback: () => {}, alt: { present: true, mandatory: true } },
//         }}
//       />
//     </div>
//   );
// }

const MyDraft = dynamic(() => import('../../components/post-editor/draft/my-draft'), { ssr: false });

export default function Page() {
  return (
    <div style={{ direction: 'ltr', background: '#eee' }}>
      <h1>test draft.js</h1>
      {/* <MyDraft /> */}
      <DraftPlugin />
    </div>
  );
}
