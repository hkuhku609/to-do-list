import React from 'react';

const Search = ({ search, setSearch }) => {
  return (
    <section className="searchForm">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search Item..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
