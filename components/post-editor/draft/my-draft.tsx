import { useState, useEffect } from 'react';
import Draft, { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function MyDraft() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const _onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  return (
    <div>
      <div>
        <button onClick={_onBoldClick}>BOLD</button>
      </div>
      <Editor editorState={editorState} onChange={setEditorState} placeholder='start typing...' />
    </div>
  );
}
