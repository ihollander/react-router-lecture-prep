import React from "react";

function SearchBar(props) {
  const handleChange = event => {
    props.setFilter(event.target.value);
  };

  return (
    <div className="search-container">
      <div className="overlay" />
      <form className="search-form">
        <input
          name="filterValue"
          value={props.filterValue}
          onChange={handleChange}
          className="input"
        />
        <button className="submit" type="submit">
          <i className="fas fa-search icon" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
