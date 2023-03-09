const axios = require('axios');
import React from 'react';
// import axios from 'axios';
import {useState} from 'react';
import WordList from './wordList.jsx';
import AddWord from './addWord.jsx';
import Search from './search.jsx';

const App = () => {
  // test data - replace with get from database
  const [words, setWords] = useState(
    [{name:'test'}, {name:'text'}, {name:'goes'}, {name:'here'}]
    // use test data until get call is ready
    // use axios.get to return a promise of the current database and set as default words array
    );

  // for useState on initialization
  // const genAllWords = () => {
  //   axios.get('/glossary')
  //   .then((res) => {
  //     console.log(res.data);
  //     setWords(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }
  // console.log('get all words: ', genAllWords());

  const search = (text) => {
    // axios get given text
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
    .then((res) => {
      console.log('I got a response! ', res);
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