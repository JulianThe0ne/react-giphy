import React from 'react';

const SearchBar = (props) => {
  const { searchGifs } = props;
  const handleChange = (event) => {
    searchGifs(event.currentTarget.value);
  };

  return (
    <input className="form-search form-control" type="text" onChange={handleChange} />
  );
};

export default SearchBar;
