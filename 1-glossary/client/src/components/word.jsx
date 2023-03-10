import {useState} from 'react';
import EditModal from './editModal.jsx';

const Word = ({ word, deleteWord, editWord }) => {
  const [editVisible, setEditVisible] = useState(false);
  // const [editName, setEditName] = useState('');
  // const [editDef, setEditDef] = useState('');

  const remove = () => {
    deleteWord(word);
  }

  const showEditModal = () => {
    if (editVisible) {
      setEditVisible(false);
    } else {
      setEditVisible(true);
    }
  }

  const submitEdit = (editName, editDef) => {
    editWord(word, editName, editDef);
  }

  return (
    <div>
      <div>{word.name}</div>
      <div>{word.def}</div>
      <input type='button' value='Edit' onClick={showEditModal}></input>
      <input type='button' value='Delete' onClick={remove}></input>
      <div>
      {editVisible && <EditModal submitEdit={submitEdit} showEditModal= {showEditModal} />}
      </div>
    </div>
  )
}

export default Word;