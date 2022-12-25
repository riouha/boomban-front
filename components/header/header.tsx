import css from './header.module.css';
import { FaBars, FaInstagram, FaSearch } from 'react-icons/fa';

export function Header(props: { handleOpenSideMenu: (show: boolean) => void }) {
  return (
    <header className={css.header}>
      <div className={css.brand}>
        <img src='images/logo.png' alt='logo' width={50} />
        <span>بوم‌بان</span>
      </div>
      <div className={css.mobile}>
        <button className='appbtn'>
          <FaSearch color='#FFF' />
        </button>
        <button
          className='appbtn'
          style={{ marginRight: '5px' }}
          onClick={() => {
            console.log('test');

            props.handleOpenSideMenu(true);
          }}
        >
          <FaBars color='#FFF' />
        </button>
      </div>
      <FaInstagram className={css.desktop} />
    </header>
  );
}
