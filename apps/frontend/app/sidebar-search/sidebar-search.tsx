import SearchForm from '../search-form/search-form';
import styles from './sidebar-search.module.scss';

/* eslint-disable-next-line */
export interface SidebarSearchProps { }

export function SidebarSearch(props: SidebarSearchProps) {
  return (
    <div className="widget widget_search">
      <h3 className="widget-title">Search</h3>

      <SearchForm />
    </div>
  );
}

export default SidebarSearch;
