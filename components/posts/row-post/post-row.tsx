import { BsShare } from 'react-icons/bs';
import { BsThreeDots } from 'react-icons/bs';
import css from './post-row.module.css';
import { IPost } from '../interfaces';

export function PostRow(props: { post: IPost; style?: React.CSSProperties }) {
  return (
    <div className={css.block} style={props.style}>
      <div className={css.post}>
        <div className={css.picture}>
          <img src={props.post.image} alt='' />
        </div>
        <div className={css.info}>
          <ul className={css.info_top_list}>
            <li>
              <img src='images/woman.png' alt='author' className={css.author} />
              <span>{props.post.author}</span>
            </li>
            <li>{props.post.category}</li>
            <li>{props.post.date}</li>
          </ul>
          <h3>{props.post.title}</h3>
          <p>{props.post.content ?? ''}</p>
          <div className={css.operations}>
            <BsShare color='#8f9bad' />
            <BsThreeDots color='#8f9bad' size='20px' />
          </div>
        </div>
      </div>
    </div>
  );
}
