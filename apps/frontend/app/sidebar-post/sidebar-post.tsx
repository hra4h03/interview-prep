import { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { getPopular } from '../store/slices/sidebarSlice';

/* eslint-disable-next-line */
export interface SidebarPostProps { }

export function SidebarPost(props: SidebarPostProps) {
  const sidebar = useSelector((store: RootState) => store.sidebar);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPopular())
  }, [dispatch])


  return (
    <div className="widget widget_blog_posts_thumb">
      <h3 className="widget-title">Popular Posts</h3>
      <>
        {
          sidebar.articles.map((item, index) => {
            return (
              <div className="item" key={index}>
                <Link legacyBehavior href="#">
                  <a className="thumb">
                    <img src={item.categoryImage} alt={item.categoryName}></img>
                  </a>
                </Link>
                <div className="info">
                  {/* <span>{item}</span> */}
                  <h4 className="title usmall">
                    <Link legacyBehavior href={`/blog-details/${item._id}`}>
                      <a>{item.title}</a>
                    </Link>
                  </h4>
                </div>

                <div className="clear"></div>
              </div>
            )
          })
        }
      </>
    </div>
  );
}

export default SidebarPost;
