import React from 'react';
import Word from './word.jsx';

const WordList = ({words, deleteWord}) => {

  return (
    <div>
      <>
        <h3>Word List</h3>
      </>
      {words.map( word =>
        <Word key={word.name} word={word} deleteWord={deleteWord}/>
      )}
    </div>
  )
}

export default WordList;