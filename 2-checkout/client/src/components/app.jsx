import React, { useState } from 'react';
import axios from 'axios';
import F1Form from './checkoutForms/f1Form.jsx';
import F2Form from './checkoutForms/f2Form.jsx';
import F3Form from './checkoutForms/f3Form.jsx';
import Confirmation from './checkoutForms/confirmation.jsx';

const App = () => {
  const [checkoutView, setCheckoutView] = useState(true);
  const [f1View, setF1View] = useState(false);
  const [f2View, setF2View] = useState(false);
  const [f3View, setF3View] = useState(false);
  const [confirmationView, setConfirmationView] = useState(false);

  const textHandler = (value, handler) => {
    console.log(value);
    handler(value);
  };

  const showNextForm = (currentView, nextView) => {
      currentView(false);
      nextView(true);

  };

  // const back = (previousView, currentView) => {
  //   previousView(true);
  //   currentView(false);
  // }

  const handleNext = () => {
    if (checkoutView) {
      showNextForm(setCheckoutView, setF1View);
    } else if (f1View) {
      showNextForm(setF1View, setF2View);
    } else if (f2View) {
      showNextForm(setF2View, setF3View);
    } else if (f3View) {
      showNextForm(setF3View, setConfirmationView);
    }else if (confirmationView) {
      showNextForm(setConfirmationView, setCheckoutView);
    }
  }

  const submitData = () => {
    // axios call users
    // axios.put('/checkout/users', {

    // })
    // .then(() => {
    //   return axios.put
    // })
    // axios call addresses
    // axios call creditCards
    handleNext();
  }

  return (
  <div>
    <h1>Checkout Counter</h1>
    {checkoutView && <input type='button' value='Checkout' onClick={handleNext}></input>}
    <div>
      {f1View && <F1Form textHandler={textHandler} handleNext={handleNext}/>}
      {f2View && <F2Form textHandler={textHandler} handleNext={handleNext}/>}
      {f3View && <F3Form textHandler={textHandler} handleNext={handleNext}/>}
      {confirmationView && <Confirmation submitData={submitData}/>}
    </div>
  </div>
  )
}

export default App;

{/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}