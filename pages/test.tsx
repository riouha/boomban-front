import { useState, useEffect } from 'react';
import { SideNavbar } from '../components/navbar/side-navbar/side-navbar';
import RssParser from 'rss-parser';

const NEWS = [
  {
    guid: 1,
    title: 'چرا دلالان مسکن برنده بازارها شدند؟',
    enclosure: { url: 'https://media.fardayeeghtesad.com/d/2022/12/04/4/10670.jpg' },
  },
  {
    guid: 2,
    title: 'معاملات مسکن داغ‌تر می‌شود؟',
    enclosure: { url: 'https://media.fardayeeghtesad.com/d/2022/12/21/4/11882.jpg' },
  },
  {
    guid: 3,
    title: 'سرنوشت ناامیدکننده مسکن ملی',
    enclosure: { url: 'https://media.fardayeeghtesad.com/d/2022/11/05/4/8436.jpg' },
  },
  {
    guid: 4,
    title: 'اقتصاد انلاین',
    enclosure: {
      url: 'https://static3.eghtesadonline.com/thumbnail/BDdiU9gbKj0s/XNE-VVgRri1eRAk6IJ6Mza55scbpkrmAkjGBs_do02Xvt6CP8LgvBUk7bhAwqB4R1ua0tqkDH_rTYT42RrYhphbJ9Q2XvX6L/%D8%AF%D8%B1+%DA%86%D9%87+%D8%B4%D8%B1%D8%A7%DB%8C%D8%B7%DB%8C+%D9%85%D8%A7%D9%84%DA%A9%D8%A7%D9%86+%D8%AE%D8%A7%D9%86%D9%87+%D9%85%D8%B3%DA%A9%D9%88%D9%86%DB%8C+%D8%A7%D8%B2+%D9%BE%D8%B1%D8%AF%D8%A7%D8%AE%D8%AA+%D9%85%D8%A7%D9%84%DB%8C%D8%A7%D8%AA+%D9%85%D8%B9%D8%A7%D9%81+%D9%85%DB%8C+%D8%B4%D9%88%D9%86%D8%AF%D8%9F.jpg',
    },
  },
  {
    guid: 5,
    title: 'دنیای اقتصاد',
    enclosure: {
      url: 'https://static3.donya-e-eqtesad.com/thumbnail/Vlkq3m6sXTWE/QHn8O9nsSzT8qCU7RegsN6Pbb5v74eEtbKeSOh05RaYla9wWYBYrfEt7TZyzEhnm/%D8%A2%D9%84%D9%88%D8%AF%DA%AF%DB%8C+%D8%A8%D9%87+%D8%A2%D8%B3%D9%85%D8%A7%D9%86+%D8%AA%D9%87%D8%B1%D8%A7%D9%86+%D8%A8%D8%A7%D8%B2%DA%AF%D8%B4%D8%AA+copy.jpg',
    },
  },
  {
    guid: 6,
    title: 'ملکانا',
    enclosure: { url: 'https://www.melkana.com/blog/wp-content/uploads/2022/12/6642-150x150.jpg' },
  },
  {
    guid: 7,
    title: 'اقتصاد نیوز',
    enclosure: {
      url: 'https://static4.eghtesadnews.com/thumbnail/msKL78TZh1EV/HNXPOu-gYQgnB2fMDkK7mke0S39fxhogKjffI2V27aS9oGCdDQCFyXxRyX647MzQwGcBsTrR56ozVVP8dMbHmum7ioSbEEkx85GlR9oCoZ3DaRzXwcxoLg,,/youlLa3Li32T.jpg',
    },
  },
  {
    guid: 8,
    title: 'اکوایران',
    enclosure: {
      url: 'https://static3.ecoiran.com/thumbnail/L5pADqW6FpMe/oZRmDytQCqPbx64THpRbAF899BMitgIDSfP66penUZ6m9xMsVHbWjBoW4bIRHlTclq6Z_b1l_bR3FJ_vqz--jOehnuZmMO0s_4ngQ9jVKYg,/%D9%81%D8%B1%D9%88%D8%B1%DB%8C%D8%B2%D8%B4.jpg',
    },
  },
  {
    guid: 9,
    title: 'دارایان',
    enclosure: { url: 'https://www.daraian.com/fa/media/k2/items/cache/1c7c8641d8b115b778eeda8c8002b8a9_L.jpg' },
  },
];

function Test() {
  const [show, setShow] = useState(false);
  const [news, setNews] = useState([]);

  // useEffect(() => {
  //   const parser = new RssParser();
  //   const CORS_PROXY = 'https://thingproxy.freeboard.io/fetch/';

  //   parser
  //     .parseURL(CORS_PROXY + 'https://www.fardayeeghtesad.com/rss/tp/71')
  //     .then((result: any) => {
  //       console.log(result.items);

  //       setNews(result.items);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <>
      {NEWS.map((x: any) => (
        <div key={x.guid}>
          <h3>{x.title}</h3>
          <img src={x.enclosure.url} alt='' width={100} />
        </div>
      ))}
    </>
  );
}

export default Test;
