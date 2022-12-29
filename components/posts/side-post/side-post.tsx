import css from './side-post.module.css';
import { IPost } from '../interfaces';

export function SidePost(props: { post: IPost }) {
  return (
    <div className={css.block}>
      <div className={css.sidepost}>
        <div className={css.circleimg}>
          <div className={css.inner}>
            <a>
              <img src={props.post.image} alt='' />
            </a>
          </div>
        </div>
        <div className={css.details}>
          <h6>{props.post.title}</h6>
          <ul className={css.info}>
            <li>{props.post.author}</li>
            <li>{props.post.date}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
