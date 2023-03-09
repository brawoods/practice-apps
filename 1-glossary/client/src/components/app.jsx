const axios = require('axios');
import React from 'react';
// import axios from 'axios';
import {useState} from 'react';
import WordList from './wordList.jsx';
import AddWord from './addWord.jsx';
import Search from './search.jsx';

const App = () => {
  // test data
  const [words, setWords] = useState([{name:'test'}, {name:'text'}, {name:'goes'}, {name:'here'}]);

  const postWord = (text, def) => {
    // test post

    // TODO change data before submitting
    axios.post('/glossary', {
        name: text,
        def: def
    })
    .then((res) => {
      console.log('I got a response! ', res);
    })
    .catch((err) => {
      console.log(err);
    })

    // perform an axios post
    // .then perform a get
  }

  return (
    <div>
      <h1>Glossary</h1>
      <div>
        <>
          <AddWord postWord={postWord}/>
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