import React from 'react';

function SearchDropDown() {
  return (
    <div className="search-container">
      <input
        data-testid="search-input"
        className="form-control"
        style={ { width: 340, margin: 'auto' } }
      />
    </div>
  );
}

export default SearchDropDown;
