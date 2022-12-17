import css from './header.module.css';
import { FaInstagram } from 'react-icons/fa';

export function Header() {
  return (
    <header className={css.header}>
      <a className={css.brand}>
        <img src='logo.svg' alt='logo' />
      </a>
      <FaInstagram />
    </header>
  );
}
