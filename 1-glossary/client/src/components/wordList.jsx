import React from 'react';
import Word from './word.jsx';

const WordList = ({words, deleteWord, editWord}) => {

  return (
    <div>
      <>
        <h3>Word List</h3>
      </>
      {words.map( word =>
        <Word key={word.name} word={word} deleteWord={deleteWord} editWord={editWord} />
      )}
    </div>
  )
}

export default WordList;