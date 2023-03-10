import {useState} from 'react';

const EditModal = ({submitEdit, showEditModal}) => {
  const [editName, setEditName] = useState('');
  const [editDef, setEditDef] = useState('');

  const submit = () => {
    submitEdit(editName, editDef);
    showEditModal();
  }

  const changeName = (e) => {
    setEditName(e.target.value);
  }

  const changeDef = (e) => {
    setEditDef(e.target.value);
  }

  return (
    <div>
    <>
      Edit Word
    </>
      <input type='text' value={editName} onChange={changeName}></input>
      <input type='text' value={editDef} onChange={changeDef}></input>
      <input type='button' value='Submit' onClick={submit}></input>
    </div>

  )
}

export default EditModal;