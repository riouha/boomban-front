import { FaCheck, FaVideo } from 'react-icons/fa';
import css from './boomban-card.module.css';

export function BoombanCard() {
  return (
    <div className={css.card}>
      <h1>بوم‌بان</h1>
      <p>
        بوم‌بان سامانه ارزیابی و نظارت فنی برساختمان های درحالِ بهره برداری درکشور است که با برقراری ارتباط بین مشتریان،
        مدیران و مهندسین بناسنج در سریعترین زمان ممکن، املاک شما را سه حوزه برق، مکانیک، عمران و سازه قبل از هرگونه
        خرید، فروش و اجاره، ملک، مورد بازبینی قرار داده و گزارشی کامل از وضعیت فنی ملک دراختیار شما قرار خواهد داد.
      </p>
      <div className={css.details}>
        <span>بوم‌بان چه میکند، ببینید</span>
        <button className='appbtn'>
          <FaVideo color='#FFF' />
        </button>
      </div>
      <ul className={css.list}>
        <li>
          <FaCheck style={{ marginLeft: '5px' }} />
          پیشگیری از حوادث و کاهش خسارات
        </li>
        <li>
          <FaCheck style={{ marginLeft: '5px' }} />
          کاهش هزینه های تعمیرات
        </li>
        <li>
          <FaCheck style={{ marginLeft: '5px' }} />
          مجهز به ابزاردقیق مهندسی روز دنیا
        </li>
        <li>
          <FaCheck style={{ marginLeft: '5px' }} />
          سامانه برخط درخواست و پیگیری
        </li>
        <li>
          <FaCheck style={{ marginLeft: '5px' }} />
          اطمینان خاطر برای ساکنین ساختمان
        </li>
      </ul>
    </div>
  );
}
