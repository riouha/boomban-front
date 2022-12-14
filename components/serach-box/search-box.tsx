import { FaSearch } from 'react-icons/fa';
import css from './search-box.module.css';

export function SearchBox() {
  return (
    <>
      <div className={css.box}>
        <input type='text' placeholder='جستجو کنید...' className={css.input} />
        <button className={css.btn}>
          <FaSearch color='#FFF' />
        </button>
      </div>
    </>
  );
}
