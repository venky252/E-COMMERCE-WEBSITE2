import React, { useState } from 'react';

const Search = ({ setSearchTerm }) => {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    setSearchTerm(term);
  };

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search products..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
