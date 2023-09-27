import './App.css';
import { useState } from 'react';

import SearchBar from './components/search-bar/search-bar';
import ImageList from './components/image-list/image-list';

function App() {
  const [searchResult, setSearchResult] = useState(null);

  const handleSearchResult = (result) => setSearchResult(result);
  
  return (
    <div className="App">
      <SearchBar onSearchResult={handleSearchResult}/>
      <ImageList searchResults={searchResult}/>
    </div>
  );
}

export default App;
