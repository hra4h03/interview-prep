import styles from './sidebar-search.module.scss';

/* eslint-disable-next-line */
export interface SidebarSearchProps { }

export function SidebarSearch(props: SidebarSearchProps) {
  return (
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
  );
}

export default SidebarSearch;
