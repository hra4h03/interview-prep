import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../constants';

/* eslint-disable-next-line */
export interface SidebarProps { }

const getLatest = () => fetch(`${API_URL}/latest`).then(data => data.json());
const getCategories = () => fetch(`${API_URL}/categories`).then(data => data.json());

export function Sidebar(props: SidebarProps) {
  const [latest, setLatest] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getLatest().then(latest => setLatest(latest))
    getCategories().then(categories => {
      setCategories(categories[0]?.categoryName)
    })
  }, [])

  return (
    <div className="widget-area">
      <div className="widget widget_search">
        <h3 className="widget-title">Search</h3>

        <form className="search-form">
          <label>
            <input type="search" className="search-field" placeholder="Search..." />
          </label>
          <button type="submit">
            <i className="bx bx-search-alt"></i>
          </button>
        </form>
      </div>

      <div className="widget widget_blog_posts_thumb">
        <h3 className="widget-title">Popular Posts</h3>

        {latest.map((item, index) => {
          return (
            <div className="item" key={index}>
              <Link legacyBehavior href="#">
                <a className="thumb">
                  <img src={item.categoryImage} alt={item.categoryName}></img>
                </a>
              </Link>
              <div className="info">
                <span>{item.created_at}</span>
                <h4 className="title usmall">
                  <Link legacyBehavior href="#">
                    <a>{item.title}</a>
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </div>
          )
        })}

      </div>

      <div className="widget widget_categories">
        <h3 className="widget-title">Categories</h3>

        <ul>
          {categories.map((item, index) => {
            return (
              <li key={index}>
                <Link legacyBehavior href="#">
                  {/* <a>{item} <span className="post-count">(03)</span></a> */}
                  <a>{item} <span className="post-count"></span></a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {/* <div className="widget widget_tag_cloud">
        <h3 className="widget-title">Popular Tags</h3>

        <div className="tagcloud">
          <Link legacyBehavior href="#">
            <a>
              Business <span className="tag-link-count"> (3)</span>
            </a>
          </Link>

          <Link legacyBehavior href="#">
            <a>
              Design <span className="tag-link-count"> (3)</span>
            </a>
          </Link>

          <Link legacyBehavior href="#">
            <a>
              Braike <span className="tag-link-count"> (2)</span>
            </a>
          </Link>

          <Link legacyBehavior href="#">
            <a>
              Fashion <span className="tag-link-count"> (2)</span>
            </a>
          </Link>

          <Link legacyBehavior href="#">
            <a>
              Travel <span className="tag-link-count"> (1)</span>
            </a>
          </Link>

          <Link legacyBehavior href="#">
            <a>
              Smart <span className="tag-link-count"> (1)</span>
            </a>
          </Link>

          <Link legacyBehavior href="#">
            <a>
              Marketing <span className="tag-link-count"> (1)</span>
            </a>
          </Link>

          <Link legacyBehavior href="#">
            <a>
              Tips <span className="tag-link-count"> (2)</span>
            </a>
          </Link>
        </div>
      </div> */}

    </div>
  );
}

export default Sidebar;
