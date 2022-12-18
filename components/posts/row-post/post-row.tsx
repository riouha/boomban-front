import { BsShare } from 'react-icons/bs';
import { BsThreeDots } from 'react-icons/bs';
import css from './post-row.module.css';

export function PostRow() {
  return (
    <div className={css.block}>
      <div className={css.post}>
        <div className={css.picture}>
          <img src='images/latest-sm-1.jpg' alt='' />
        </div>
        <div className={css.info}>
          <ul className={css.info_top_list}>
            <li>
              <img src='images/woman.png' alt='author' className={css.author} />
              <span>نویسنده مطلب</span>
            </li>
            <li>پرطرفدار</li>
            <li>30 اردیبهشت 1401</li>
          </ul>
          <h3>60 کاری که باید فوراً در مورد ساختمان انجام دهید</h3>
          <p>آرامشی شگفت انگیز تمام روحم را گرفته است، مثل این صبح های شیرین در کنار دوستان</p>
          <div className={css.operations}>
            <BsShare color='#8f9bad' />
            <BsThreeDots color='#8f9bad' size='20px' />
          </div>
        </div>
      </div>
    </div>
  );
}
