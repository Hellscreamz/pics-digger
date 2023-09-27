import searchImages from '../../api/api';
import './SearchBar.css'
import { useState } from 'react';

function SearchBar ({ onSearchResult }) {
    const [inputValue, setInputValue]  = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleRequest = async (event) => {
        event.preventDefault();
        const response = await searchImages(inputValue);
        onSearchResult(response);
    }

    return (
        <div>
            <form onSubmit={handleRequest}>
                <input
                    type='text'
                    onChange={handleInputChange}
                    value={inputValue}
                    placeholder='Find your picture'
                    className='search-bar'
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;
