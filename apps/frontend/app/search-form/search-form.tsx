import React, { useEffect, useState } from 'react'
import Router from 'next/router';
import { API_URL } from '../constants';

function getLatest() {
  return fetch(`${API_URL}/latest`).then(data => data.json())
}

const SearchForm = () => {

  const [search, setSearch] = React.useState({ search: '' })

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSearch(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    Router.push({
      pathname: '/courses/search',
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
        value={search.search}
        onChange={handleOnChange}
      />
      <button type="submit">
        <i className="flaticon-search"></i>
      </button>
    </form>
  )
}

export default SearchForm
