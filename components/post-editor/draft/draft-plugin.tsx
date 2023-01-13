import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import Editor, { composeDecorators, createEditorStateWithText } from '@draft-js-plugins/editor';
import createToolbarPlugin, { Separator } from '@draft-js-plugins/static-toolbar';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from '@draft-js-plugins/buttons';
import createImagePlugin from '@draft-js-plugins/image';
import createAlignmentPlugin from '@draft-js-plugins/alignment';
import createFocusPlugin from '@draft-js-plugins/focus';
import createResizeablePlugin from '@draft-js-plugins/resizeable';
import styles from './styles.module.css';
import { ImageAdder } from './image-adder/image-adder';
import { useState, useRef } from 'react';
import 'draft-js/dist/Draft.css';

const staticToolbarPlugin = createToolbarPlugin({ theme: { buttonStyles: styles, toolbarStyles: styles } });
const focusPlugin = createFocusPlugin({
  theme: { focused: styles.image_focused, unfocused: styles.image_unfocused },
});
const resizeablePlugin = createResizeablePlugin();
const alignmentPlugin = createAlignmentPlugin();
const decorator = composeDecorators(resizeablePlugin.decorator, alignmentPlugin.decorator, focusPlugin.decorator);
const imagePlugin = createImagePlugin({ decorator });

const plugins = [focusPlugin, alignmentPlugin, resizeablePlugin, imagePlugin, staticToolbarPlugin];

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//###########################################################################################

export default function DraftPlugin() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editor = useRef<Editor>();

  const onChange = (editorState: EditorState) => {
    // console.log(convertToRaw(editorState.getCurrentContent()));
    // console.log(editorState.getCurrentContent().getPlainText(' '));
    setEditorState(editorState);
  };

  const focus = () => {
    editor.current?.focus();
  };

  return (
    <div>
      <staticToolbarPlugin.Toolbar>
        {(externalProps) => (
          <div>
            <BoldButton {...externalProps} />
            <ItalicButton {...externalProps} />
            <UnderlineButton {...externalProps} />
            <CodeButton {...externalProps} />
            {/* <Separator /> */}
            <HeadlineOneButton {...externalProps} />
            <HeadlineTwoButton {...externalProps} />
            <HeadlineThreeButton {...externalProps} />
            <UnorderedListButton {...externalProps} />
            <OrderedListButton {...externalProps} />
            <BlockquoteButton {...externalProps} />
            <CodeBlockButton {...externalProps} />
            {/* <AlignLeftOutlined onMouseDown={() => applyAlignment('left')} />
                <AlignCenterOutlined onMouseDown={() => applyAlignment('center')} />
                <AlignRightOutlined onMouseDown={() => applyAlignment('right')} /> */}
            <ImageAdder
              editorState={editorState}
              handleEditorChange={onChange}
              addImageHandler={imagePlugin.addImage}
            />
            {/* <AlignmentTool /> */}
          </div>
        )}
      </staticToolbarPlugin.Toolbar>
      <div className={styles.editor} onClick={focus}>
        <Editor
          editorState={editorState}
          onChange={onChange}
          plugins={plugins}
          ref={editor as any}
          placeholder='start typing ...'
        />
      </div>
    </div>
  );
}
