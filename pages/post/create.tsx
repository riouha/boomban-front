import { useState } from 'react';
import { FixedSideNavbar } from '../../components/navbar/side-navbar/side-navbar';
import { PostEditor } from '../../components/post-editor/post-editor';

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
