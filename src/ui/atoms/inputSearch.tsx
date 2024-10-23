"use client"
import { FiSearch } from "react-icons/fi";
import { useState } from 'react';

const InputSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <>
      <div className="search-container">
        <span><FiSearch /></span>
        <input
          className="input-search"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </>
  );
};

export default InputSearch;