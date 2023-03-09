const axios = require('axios');
import React from 'react';
// import axios from 'axios';
import {useState} from 'react';
import WordList from './wordList.jsx';
import AddWord from './addWord.jsx';
import Search from './search.jsx';

const App = () => {
  const [words, setWords] = useState([{name:'test'}, {name:'text'}, {name:'goes'}, {name:'here'}]);

  const postWord = (text) => {
    // test post

    // TODO change data before submitting
    axios.post('/glossary', {
        id: 1,
        name: text,
        def: 'definition of the word'
    })
    .then((res) => {
      console.log('I got a response! ', res);
    })
    .catch((err) => {
      console.log(err);
    })
    console.log(text, 'posted');
    // perform an axios post
    // .then perform a get

    // let data = '';
    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: '/glossary',
    //   headers: {},
    //   data: data
    // }

    // axios(config)
  }

  return (
    <div>
      Message from App.js
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