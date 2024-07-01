import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import SearchResultItem from './SearchResultItem';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchResult() {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const query = useQuery();
    const searchTerm = query.get('query');

    useEffect(() => {
        const fetchSearchResults = async () => {
            setIsLoading(true);
            setError('');
            try {
                const response = await axios.get(`http://localhost:3006/api/search?query=${searchTerm}`);
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
                setError('Failed to fetch search results. Please try again.');
            } finally {
                setIsLoading(false);  // Correct function name here
            }
        };

        if (searchTerm) {
            fetchSearchResults();
        } else {
            setSearchResults([]);  // Optionally clear results when search term is empty
        }
    }, [searchTerm]);


    return (
        <div className='p-4'>
            <h2>Search Results for "{searchTerm}"</h2>
            {error && <p className="text-red-500">{error}</p>}
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                searchResults.length === 0 ? (
                    <p>No results found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {searchResults.map((result) => (
                            <SearchResultItem key={result._id} result={result} />
                        ))}
                    </div>

                )
            )}
        </div>
    );
}

export default SearchResult;
