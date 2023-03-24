import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { getPostsByCategory, getCategories } from '../store/slices/categorySlice';

/* eslint-disable-next-line */
export interface SidebarCategoryProps { }

export function SidebarCategory(props: SidebarCategoryProps) {
  const store = useSelector((store: RootState) => store.category);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <>
      <div className="widget widget_tag_cloud">
        <h3 className="widget-title">Popular Tags</h3>

        <div className="tagcloud">
          {store.categories.map((item) => {
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
