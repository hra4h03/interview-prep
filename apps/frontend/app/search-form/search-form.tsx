import React, { useEffect, useMemo } from 'react'
import Router from 'next/router';
import debounce from "lodash.debounce";

const SearchForm = () => {
  const [search, setSearch] = React.useState({ search: '' })

  const handleOnChange = (e) => {
    console.log('e.target.value ', e.target.value);
    const { name, value } = e.target;
    setSearch(prevState => ({ ...prevState, [name]: value }))
  }

  const debouncedResults = useMemo(() => {
    return debounce(handleOnChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log('search on submit ', search);
    
    Router.push({
      pathname: '/blog/search',
      query: { q: search.search }
    })
  }

  return (
    <form className="search-box" onSubmit={handleSearch}>
      <input

        type="text"
        className="input-search"
        placeholder="Search for anything"
        name='search'
        onChange={debouncedResults}
      />
      <button type="submit">
        <i className="flaticon-search"></i>
      </button>
    </form>
  )
}

export default SearchForm
