import css from './header.module.css';
import { FaBars, FaInstagram, FaSearch } from 'react-icons/fa';

export function Header() {
  return (
    <header className={css.header}>
      <a className={css.brand}>
        <img src='logo.svg' alt='logo' />
      </a>
      <div className={css.mobile}>
        <button className={css.icon_btn}>
          <FaSearch color='#FFF' />
        </button>
        <button className={css.icon_btn} style={{ marginRight: '5px' }}>
          <FaBars color='#FFF' />
        </button>
      </div>
      <FaInstagram className={css.desktop} />
    </header>
  );
}
