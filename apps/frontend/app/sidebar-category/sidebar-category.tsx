import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../constants';
import { getPostsByCategory } from '../store/slices/blogSlice';
import { RootState, AppDispatch } from '../store/store';

/* eslint-disable-next-line */
export interface SidebarCategoryProps { }
const getCategories = () => fetch(`${API_URL}/categories`).then(data => data.json());

export function SidebarCategory(props: SidebarCategoryProps) {
  const blog = useSelector((store: RootState) => store.blog);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getCategories().then(categories => setCategories(categories))
  }, [])

  return (
    <>
      <div className="widget widget_tag_cloud">
        <h3 className="widget-title">Popular Tags</h3>

        <div className="tagcloud">
          {categories.map((item) => {
            return (
              <>
                <Link legacyBehavior href="#">
                  <a onClick={(e) => dispatch(getPostsByCategory(item._id))}>
                    {/* {item.categoryName} <span className="tag-link-count"> (3)</span> */}
                    {item.categoryName} <span className="tag-link-count"></span>
                  </a>
                </Link>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default SidebarCategory;
