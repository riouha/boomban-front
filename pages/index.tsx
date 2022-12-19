import { Header } from '../components/header/header';
import { Navbar } from '../components/navbar/navbar';
import { PostRow } from '../components/posts/row-post/post-row';
import { LargeOverlayedPost } from '../components/posts/large-overlayed/large-overlayed-post';
import { BoombanCard } from '../components/boomban-card/boomban-card';
import { CategorySidebar } from '../components/categories/category-sidebar';
import { SideNavbar } from '../components/navbar/side-navbar/side-navbar';
import { useState } from 'react';

export default function Home() {
  const [showSideMenu, SetShowSideMenu] = useState(false);
  return (
    <>
      <Header handleOpenSideMenu={SetShowSideMenu} />
      <Navbar handleOpenSideMenu={SetShowSideMenu} />
      <SideNavbar show={showSideMenu} setShow={SetShowSideMenu} />
      <div className='home_container'>
        <div className='hot_favourites'>
          <div className='hot_post'>
            <LargeOverlayedPost
              post={{
                title: 'جدیدترین پیش بینی قیمت مسکن در سال جدید',
                image: 'https://katen.ny3.ir/rtl/images/posts/featured-lg.jpg',
                category: 'الهام بخش',
                date: '27/9/1401',
                author: 'نام نویسنده',
              }}
            />
          </div>
          <div className='favourite_posts'>
            <BoombanCard />
          </div>
        </div>

        <div className='sublayout'>
          <div className='post'>
            <PostRow
              post={{
                title: '60 کاری که باید فوراً در مورد ساختمان انجام دهید',
                content:
                  'بازار مسکن یکی از پرطرفدارترین بازارهای سرمایه است که هر ساله خریداران و سرمایه گذاران زیادی وارد آن می‌شوند',
                category: 'پرطرفدار',
                date: new Intl.DateTimeFormat('fa-IR').format(Date.now()),
                author: 'نام نویسنده',
                image: 'https://katen.ny3.ir/rtl/images/posts/latest-sm-1.jpg',
              }}
              style={{ marginBottom: '30px' }}
            />
            <PostRow
              post={{
                title: '60 کاری که باید فوراً در مورد ساختمان انجام دهید',
                content:
                  'بازار مسکن یکی از پرطرفدارترین بازارهای سرمایه است که هر ساله خریداران و سرمایه گذاران زیادی وارد آن می‌شوند',
                category: 'پرطرفدار',
                date: new Intl.DateTimeFormat('fa-IR').format(Date.now()),
                author: 'نام نویسنده',
                image: 'https://katen.ny3.ir/rtl/images/posts/latest-sm-1.jpg',
              }}
              style={{ marginBottom: '30px' }}
            />
            <PostRow
              post={{
                title: '60 کاری که باید فوراً در مورد ساختمان انجام دهید',
                content:
                  'بازار مسکن یکی از پرطرفدارترین بازارهای سرمایه است که هر ساله خریداران و سرمایه گذاران زیادی وارد آن می‌شوند',
                category: 'پرطرفدار',
                date: new Intl.DateTimeFormat('fa-IR').format(Date.now()),
                author: 'نام نویسنده',
                image: 'https://katen.ny3.ir/rtl/images/posts/latest-sm-1.jpg',
              }}
              style={{ marginBottom: '30px' }}
            />
            <PostRow
              post={{
                title: '60 کاری که باید فوراً در مورد ساختمان انجام دهید',
                content:
                  'بازار مسکن یکی از پرطرفدارترین بازارهای سرمایه است که هر ساله خریداران و سرمایه گذاران زیادی وارد آن می‌شوند',
                category: 'پرطرفدار',
                date: new Intl.DateTimeFormat('fa-IR').format(Date.now()),
                author: 'نام نویسنده',
                image: 'https://katen.ny3.ir/rtl/images/posts/latest-sm-1.jpg',
              }}
              style={{ marginBottom: '30px' }}
            />
          </div>

          <div className='side'>
            <CategorySidebar
              categories={[
                { id: 1, name: 'بررسی ساختمان', postsCount: 5 },
                { id: 2, name: 'خرید آپارتمان', postsCount: 4 },
                { id: 3, name: 'خرید ویلا', postsCount: 3 },
                { id: 4, name: 'سبک زندگی', postsCount: 1 },
                { id: 5, name: 'سیاست', postsCount: 14 },
                { id: 6, name: 'اقتصاد', postsCount: 10 },
                { id: 7, name: 'فرهنگ', postsCount: 1 },
                { id: 8, name: 'علمی' },
              ]}
            />
          </div>
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
            margin-left: 1rem;
          }
          .favourite_posts {
            flex: 5;
          }

          .home_container {
            padding: 0 20vw;
          }

          .sublayout {
            margin: 40px auto;
            display: flex;
          }

          .post {
            flex: 12;
            // width: 55%
            padding: 30px;
            border: 1px solid #ebebeb;
            border-radius: 10px;
            margin-left: 1rem;
          }

          .side {
            flex: 5;
            // width: 45%;
            // background: #aaa;
          }

          @media only screen and (max-width: 1200px) {
            .home_container {
              padding: 0 3vw;
            }
          }

          @media only screen and (max-width: 600px) {
            .side {
              display: none;
            }
            .favourite_posts {
              display: none;
            }
            .hot_post {
              margin-left: 0;
            }
            .post {
              margin-left: 0;
            }
          }
        `}
      </style>
    </>
  );
}
