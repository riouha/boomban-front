import { Header } from '../components/header/header';
import { Navbar } from '../components/navbar/navbar';
import { PostRow } from '../components/post/post-row';

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />

      <div className='home_container'>
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
      </div>
      <style jsx>
        {`
          .home_container {
            padding: 0 20vw;
          }
          @media only screen and (max-width: 1200px) {
            .home_container {
              padding: 0 3vw;
            }
          }

          .content {
            margin: 40px auto;
            display: flex;
          }

          .post {
            // flex: 12;
            // width: 100%
          }

          .side {
            // flex: 5;
            width: 45%;
            background: #aaa;
          }

          @media only screen and (max-width: 600px) {
            .side {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}
