import React from 'react';

const Word = ({ word, deleteWord }) => {

  let remove = () => {
    deleteWord(word);
  }

  return (
    <div>
      <div>{word.name}: {word.def}</div>
      <input type='button' value='Edit'></input>
      <input type='button' value='Delete' onClick={remove}></input>
    </div>
  )
}

export default Word;