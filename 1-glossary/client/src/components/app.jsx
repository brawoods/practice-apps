const axios = require('axios');
import React from 'react';
// import axios from 'axios';
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
      console.log(res.data);
      setWords(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // generate initial list from database
  useEffect(genAllWords, []);


  const search = (text) => {
    // axios get given text
    axios.get('/glossary')
    .then((res) => {
      console.log(res.data);
      setWords(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
    // text through to get controller
    // adjust search criteria as needed
    // invoke findOne from model
  }

  const postWord = (text, def) => {
    // test post

    // TODO change data before submitting
    axios.post('/glossary', {
        name: text,
        def: def
    })
    .then(() => {
      // console.log('I got a response! ', res);
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
        <WordList words={words}/>
      </div>
    </div>
  )
}

export default App;