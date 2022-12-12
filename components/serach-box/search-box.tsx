import { FaSearch } from 'react-icons/fa';
import css from './search-box.module.css';

export function SearchBox() {
  return (
    <>
      <div className={css.box}>
        {/* <button className={css.btn_search}>
          <FaSearch />
        </button> */}
        <input type='text' placeholder='جستجو کنید...' className={css.input} />
        <button className={css.btn}>
          <FaSearch color='#FFF' />
        </button>
        {/* <input type='text' className={css.input_search} placeholder='Type to Search...' /> */}
      </div>
    </>
  );
}
