import React from 'react';
import F1Form from './f1Form.jsx';
import F2Form from './f2Form.jsx';
import F3Form from './f3Form.jsx';

const Confirmation = ({submitData}) => {

  return (
   <div>
    <F1Form />
    <F2Form />
    <F3Form />
    <input type='button' value='Confirm' onClick={submitData}></input>
   </div>
  )
}

export default Confirmation;