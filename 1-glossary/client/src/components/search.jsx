import {useState} from 'react';

const Search = ({searchWord}) => {
  const[searchText, setSearchText] = useState('');

  const inputText = (e) => {
    setSearchText(e.target.value);
  }

  const search = () => {
    searchWord(searchText);
  }

  return (
    <div>
      <input type='search' value={searchText} onChange={inputText}></input>
      <input type='button' value='Search' onClick={search}></input>
    </div>

  )
}

export default Search;