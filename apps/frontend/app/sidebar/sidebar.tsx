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

    </div>
  );
}

export default Sidebar;
