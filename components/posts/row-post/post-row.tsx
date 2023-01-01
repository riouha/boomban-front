import Link from 'next/link';
import { BsShare, BsThreeDots } from 'react-icons/bs';
import { FaRegEye, FaHeart, FaBookmark, FaRegBookmark, FaRegHeart } from 'react-icons/fa';
import { IPost } from '../interfaces';
import css from './post-row.module.css';

export function PostRow(props: { post: IPost; style?: React.CSSProperties }) {
  return (
    <div className={css.block} style={props.style}>
      <div className={css.post}>
        <Link href={props.post.link || `/post/${props.post.slug}`} target={props.post.link ? '_blank' : undefined}>
          <div className={css.picture}>
            <img src={props.post.image} alt='' />
          </div>
        </Link>
        <div className={css.info}>
          <ul className={css.info_top_list}>
            <li>
              <img src={props.post.author.avatar || 'images/woman.png'} alt='author' className={css.author} />
              <span>{props.post.author.title}</span>
            </li>
            <li>{props.post.category}</li>
            <li>{props.post.date}</li>
          </ul>
          <Link href={props.post.link || `/post/${props.post.slug}`} target={props.post.link ? '_blank' : undefined}>
            <h3>{props.post.title}</h3>
          </Link>
          <p>{props.post.content ?? ''}</p>
          <div className={css.operations}>
            <div>
              <FaRegHeart className={css.operation_icon} />
              <FaRegBookmark className={css.operation_icon} />
              <BsShare className={css.operation_icon} />
              <div className={css.views}>
                <FaRegEye />
                <span>1</span>
              </div>
            </div>
            <Link href={props.post.link || `/post/${props.post.slug}`} target={props.post.link ? '_blank' : undefined}>
              <BsThreeDots className={css.more} size='20px' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
