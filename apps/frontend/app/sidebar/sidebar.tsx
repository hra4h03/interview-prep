import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../constants';
import SidebarCategory from '../sidebar-category/sidebar-category';
import SidebarPost from '../sidebar-post/sidebar-post';
import SidebarSearch from '../sidebar-search/sidebar-search';
import { AppDispatch, RootState } from '../store/store';

/* eslint-disable-next-line */
export interface SidebarProps { }

export function Sidebar(props: SidebarProps) {

  return (
    <div className="widget-area">

      <SidebarSearch></SidebarSearch>

      <SidebarPost></SidebarPost>

      <SidebarCategory></SidebarCategory>

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
