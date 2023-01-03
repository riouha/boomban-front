import { useState } from 'react';
import { BoombanCard } from '../../components/boomban-card/boomban-card';
import { Header } from '../../components/header/header';
import { SideNavbar } from '../../components/navbar/side-navbar/side-navbar';
import { LargeOverlayedPost } from '../../components/posts/large-overlayed/large-overlayed-post';

export default function Post() {
  const [showSideMenu, SetShowSideMenu] = useState(false);
  return (
    <>
      <Header handleOpenSideMenu={SetShowSideMenu} />
      {/* <Navbar handleOpenSideMenu={SetShowSideMenu} /> */}
      <SideNavbar show={showSideMenu} setShow={SetShowSideMenu} />
      <div className='home_container'>
        <div className='hot_favourites'>
          <div className='hot_post'>
            <LargeOverlayedPost
              post={{
                id: 1,
                slug: '1',
                title: 'جدیدترین پیش بینی قیمت مسکن در سال جدید',
                image: 'https://katen.ny3.ir/rtl/images/posts/featured-lg.jpg',
                category: 'الهام بخش',
                date: '27/9/1401',
                author: {
                  id: 1,
                  title: 'نام نویسنده',
                },
              }}
            />
          </div>
          <div className='favourite_posts'>
            <BoombanCard />
          </div>
        </div>
      </div>
    </>
  );
}
