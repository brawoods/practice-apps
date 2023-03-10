import {useState} from 'react';

const EditModal = ({editWord}) => {

  return (
    <div>
      <input type='text'></input>
      <input type='text'></input>
      <input type='button' value='Submit' onClick={editWord}></input>
    </div>

  )
}

export default EditModal;