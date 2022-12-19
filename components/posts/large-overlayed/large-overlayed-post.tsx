import css from './styles.module.css';
import { IPost } from '../interfaces';

export function LargeOverlayedPost(props: { post: IPost }) {
  return (
    <div className={css.large_overlayed_post}>
      <div className={css.details}>
        <span>{props.post.category}</span>
        <h2 className={css.title}>{props.post.title}</h2>
        <ul className={css.meta}>
          <li>{props.post.author}</li>
          <li>{props.post.date}</li>
        </ul>
      </div>
      <div className={css.image_div}>
        <div className={css.inner_img} style={{ backgroundImage: `url(${props.post.image})` }}></div>
      </div>
    </div>
  );
}
