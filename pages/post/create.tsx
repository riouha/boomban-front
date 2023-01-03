import dynamic from 'next/dynamic';
import { ComponentType, createRef, forwardRef, useMemo, useRef, useState } from 'react';
import { BoombanCard } from '../../components/boomban-card/boomban-card';
import { Header } from '../../components/header/header';
import { FixedSideNavbar, SideNavbar } from '../../components/navbar/side-navbar/side-navbar';
import { LargeOverlayedPost } from '../../components/posts/large-overlayed/large-overlayed-post';
import { PostEditor } from '../../components/post-editor/post-editor';
import { EditableQuill, ReadonlyQuill } from '../../components/post-editor/quill';

export default function CreatePost() {
  const [showSideMenu, SetShowSideMenu] = useState(false);

  return (
    <>
      <div className='admin_layout'>
        <FixedSideNavbar />
        <div className='test'>
          {/* <EditableQuill />
          <div className='read'>
            <ReadonlyQuill value={'swsw'} />
          </div> */}
          <PostEditor />
        </div>
      </div>
      <style jsx>{`
        .admin_layout {
          display: flex;
        }

        .read {
          background: #eee;
          width: 60%;
        }
      `}</style>
    </>
  );
}
