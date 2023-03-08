import React from 'react';
import {useState} from 'react';
import WordList from './wordList.jsx';
import AddWord from './addWord.jsx';
import Search from './search.jsx';

const App = () => {

  const [words, setWords] = useState([{name:'test'}, {name:'text'}, {name:'goes'}, {name:'here'}]);

  return (
    <div>
      Message from App.js
      <div>
        <>
          <AddWord />
        </>
        <>
          <Search />
        </>
      </div>
      <div>
        <WordList words={words}/>
      </div>
    </div>
  )
}

export default App;