import { useState } from 'react';
import styles from './styles.module.css';

export function ImageAdder(props: { addImageHandler: any; editorState: any; handleEditorChange: any }) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');

  const popoverClassName = open ? styles.addImagePopover : styles.addImageClosedPopover;
  const buttonClassName = open ? styles.addImagePressedButton : styles.addImageButton;

  return (
    <div className={styles.addImage}>
      <button className={buttonClassName} type='button' onClick={() => setOpen(!open)}>
        +
      </button>
      <div className={popoverClassName}>
        <input
          type='text'
          placeholder='Paste the image url …'
          className={styles.addImageInput}
          onChange={(e: any) => setUrl(e.target.value)}
          value={url}
        />
        <button
          className={styles.addImageConfirmButton}
          type='button'
          onClick={() => {
            console.log('handle add image');

            props.handleEditorChange(props.addImageHandler(props.editorState, url));
            setOpen(false);
            setUrl('');
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
