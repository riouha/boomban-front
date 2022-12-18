import css from './styles.module.css';

export function LargeOverlayedPost(props: {
  title: string;
  image: string;
  author: string;
  date: string;
  category: string;
}) {
  return (
    <div className={css.large_overlayed_post}>
      <div className={css.details}>
        <span>{props.category}</span>
        <h2 className={css.title}>{props.title}</h2>
        <ul className={css.meta}>
          <li>{props.author}</li>
          <li>{props.date}</li>
        </ul>
      </div>
      <div className={css.image_div}>
        <div className={css.inner_img} style={{ backgroundImage: `url(${props.image})` }}></div>
      </div>
    </div>
  );
}
