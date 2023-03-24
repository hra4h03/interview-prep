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
    <div className="widget widget_categories">
      <h3 className="widget-title">Categories</h3>

      <ul>
        {categories.map((item) => {
          return (
            <li key={item._id}>
              {/* <Link legacyBehavior href={`/${item._id}`}> */}
              <Link legacyBehavior href="">
                {/* <a>{item} <span className="post-count">(03)</span></a> */}
                <a onClick={(e) => {
                  // e.preventDefault()
                  dispatch(getPostsByCategory(item._id))
                }}>{item.categoryName} <span className="post-count"></span></a>
              </Link>
            </li>
          )
        })}

      </ul>
    </div>
  );
}

export default SidebarCategory;
