import React from 'react';

const Word = ({ word, deleteWord, showEditModal }) => {

  const remove = () => {
    deleteWord(word);
  }

  return (
    <div>
      <div>{word.name}</div>
      <div>{word.def}</div>
      <input type='button' value='Edit' onClick={showEditModal}></input>
      <input type='button' value='Delete' onClick={remove}></input>
    </div>
  )
}

export default Word;