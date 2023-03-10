import React from 'react';

const Word = ({ word }) => {

  return (
    <div>
      <div>{word.name}: {word.def}</div>
    </div>
  )
}

export default Word;