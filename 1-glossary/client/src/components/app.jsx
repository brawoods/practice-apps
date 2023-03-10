const axios = require('axios');
import React from 'react';
import {useState, useEffect} from 'react';
import {createPortal} from 'react-dom';
import WordList from './wordList.jsx';
import AddWord from './addWord.jsx';
import Search from './search.jsx';
import EditModal from './editModal.jsx';



const App = () => {
  // test data - [{name:'test'}, {name:'text'}, {name:'goes'}, {name:'here'}]
  const [words, setWords] = useState([]);
  const [editVisible, setEditVisible] = useState(false);

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

  const showEditModal = () => {
    if (editVisible) {
      setEditVisible(false);
    } else {
      setEditVisible(true);
    }
  }
  // pass through WordList to Word
  const editWord = (word) => {
    setEditVisible(false);
    // open pop up table or modify in place
    // take new data and enter PUT request
    // PUT request
    // GET request to refresh list

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
        {editVisible && createPortal(
          <EditModal editWord={editWord} />,
          document.getElementById("root")
        )}
      <div>
        <WordList words={words} deleteWord={deleteWord} showEditModal={showEditModal}/>
      </div>
    </div>
  )
}

export default App;