const axios = require('axios');
import React from 'react';
import {useState, useEffect} from 'react';
import WordList from './wordList.jsx';
import AddWord from './addWord.jsx';
import Search from './search.jsx';

const App = () => {
  // test data - [{name:'test'}, {name:'text'}, {name:'goes'}, {name:'here'}]
  const [words, setWords] = useState([]);

  // for useState on initialization
  const genAllWords = () => {
    axios.get('/glossary')
    .then((res) => {
      setWords(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // generate initial list from database
  useEffect(genAllWords, []);

  const search = (text) => {
    axios.get('/glossary')
    .then((res) => {
      setWords(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const postWord = (text, def) => {
    axios.post('/glossary', {
        name: text,
        def: def
    })
    .then(() => {
      return axios.get('/glossary');
    })
    .then((res) => {
      setWords(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const deleteWord = (word) => {
    axios.delete('/glossary', {
      data: word
    })
    .then(() => {
      return axios.get('/glossary');
    })
    .then((res) => {
      setWords(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      <h1>Glossary</h1>
      <div>
        <>
          <AddWord postWord={postWord}/>
        </>
        <>
          <Search searchWord={search}/>
        </>
      </div>
      <div>
        <WordList words={words} deleteWord={deleteWord}/>
      </div>
    </div>
  )
}

export default App;