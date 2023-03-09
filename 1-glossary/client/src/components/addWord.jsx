import { useState } from 'react';

const AddWord = ({postWord}) => {

  const [text, setText] = useState('');

  const inputText = (e) => {
    setText(e.target.value);
  }

  const post = () => {
    console.log('clicked it!')
    postWord(text);
  }

  return (
    <div>
      <input type='search' value={text} onChange={inputText} ></input>
      <input type='button' value='Add Word' onClick={post}></input>
    </div>
  )
}

export default AddWord;