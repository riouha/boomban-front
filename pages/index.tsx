import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/header/header';
import { Navbar } from '../components/navbar/navbar';
import { PostRow } from '../components/post/post-row';
import css from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <div className={css.container}>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>
        <div className='content'>
          <div className='post'>
            <PostRow />
          </div>
          <div className='side'></div>
        </div>

        <style jsx>
          {`
            .content {
              margin: 20px auto;
              display: flex;
              width: 60vw;
            }

            .post {
              flex: 12;
            }

            .side {
              flex: 5;
              background: #aaa;
            }
          `}
        </style>
      </div>
    </>
  );
}
