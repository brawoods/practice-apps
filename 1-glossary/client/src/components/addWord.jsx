import { useState } from 'react';

const AddWord = ({postWord}) => {

  const [wordName, setWordName] = useState('');
  const [def, setDef] = useState('');

  const inputWord = (e) => {
    setWordName(e.target.value);
  }

  const inputDef = (e) => {
    setDef(e.target.value);
  }

  const post = () => {
    postWord(wordName, def);
    setWordName('');
    setDef('');
  }

  return (
    <div>
      <div>Add New Word:
        <input type='search' value={wordName} onChange={inputWord} ></input>
        <input type='button' value='Add Word' onClick={post}></input>
      </div>
      <div> Add Definition:
        <input type='search' value={def} onChange={inputDef} ></input>
      </div>
    </div>

  )
}

export default AddWord;