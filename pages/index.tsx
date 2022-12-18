import { Header } from '../components/header/header';
import { Navbar } from '../components/navbar/navbar';
import { PostRow } from '../components/posts/row-post/post-row';
import bg from '../public/images/featured-lg.jpg';
import { LargeOverlayedPost } from '../components/posts/large-overlayed/large-overlayed-post';

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />

      <div className='home_container'>
        <div className='hot_favourites'>
          <div className='hot_post'>
            <LargeOverlayedPost
              title='5 راه آسان که می توانید آینده را به موفقیت تبدیل کنید'
              image='https://katen.ny3.ir/rtl/images/posts/featured-lg.jpg'
              category='الهام بخش'
              date='27/9/1401'
              author='نام نویسنده'
            />
          </div>
          <div className='favourite_posts'></div>
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
          .hot_favourites {
            margin: 3vh 0;
            display: flex;
          }
          .hot_post {
            flex: 12;
            position: relative;
          }
          .favourite_posts {
            flex: 5;
          }

          @media only screen and (max-width: 1200px) {
            .favourite_posts {
              display: none;
            }
          }

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
            flex: 12;
            // width: 55%
          }

          .side {
            flex: 5;
            // width: 45%;
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
