import React from 'react';
import {useState} from 'react';
import WordList from './wordList.jsx';

const App = () => {

  const [words, setWords] = useState([{name:'test'}, {name:'text'}, {name:'goes'}, {name:'here'}]);

  return (
    <div>
      Message from App.js
      <WordList words={words}/>
    </div>
  )
}

export default App;