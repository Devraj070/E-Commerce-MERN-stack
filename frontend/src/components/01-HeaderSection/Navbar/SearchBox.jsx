import React, { useState, useEffect } from 'react';
import search_icon_w from '../../../assets/search-w.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const fetchSearchResults = async (query) => {
    try {
      const response = await axios.get(`http://localhost:3006/api/search?query=${query}`);
      const filteredResults = response.data.filter(result => !result.name.includes('(') && !result.name.includes(')'));
      setSearchResults(filteredResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      fetchSearchResults(searchTerm);
    } else {
      setSearchResults([]); // Reset search results if search term is empty
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/search?query=${searchTerm}`);
      setSearchResults([]); // Clear search results


    }
  };

  const handleSearchItemClick = (selectedItem) => {
    setSearchTerm(selectedItem.name);
    navigate(`/search?query=${selectedItem.name}`);
    setSearchResults([]);
  };


  return (
    <div className='relative bg-black w-96 flex items-center rounded-full' >
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='bg-black text-white outline-none rounded-full w-80 ml-2 focus:ring-2 focus:ring-blue-500'
        />
        <img
          src={search_icon_w}
          alt="Search"
          onClick={handleSearchSubmit}
          className='w-5 cursor-pointer absolute m-2 right-4 transform -translate-y-1/2 '
        />
        {/* Display search results */}
        {searchTerm && (
          <ul className="absolute bg-black w-96 rounded-lg shadow-lg mt-2 overflow-y-auto max-h-48">
            {searchResults.map((result) => (
              // Check if searchTerm matches the name property of the result
              searchTerm !== result.name && (
                <li key={result._id} className="px-4 py-2 cursor-pointer hover:bg-gray-500" onClick={() => handleSearchItemClick(result)}>
                  <div>{result.name}</div>
                  <div>{result.category}</div>
                  {/* Add other fields you want to display */}
                </li>
              )
            ))}
          </ul>
        )}

      </form>
    </div>
  );
}

export default SearchBox;