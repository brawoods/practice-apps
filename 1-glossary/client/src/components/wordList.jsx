import React from 'react';
import Word from './word.jsx';

const WordList = ({words}) => {

  return (
    <div>
      <>
        Word List: word components go here!
      </>
      {words.map( word =>
        <Word key={word.name} word={word}/>
      )}
    </div>
  )
}

export default WordList;