import { useState } from 'react';

const F3Form = ({ textHandler, handleNext }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setexpDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingZipCode, setbillingZipCode] = useState('');

  const cardNumberHandler = (e) => {
    textHandler(e.target.value, setCardNumber);
  }
  const expDateHandler = (e) => {
    textHandler(e.target.value, setexpDate);
  }
  const cvvHandler = (e) => {
    textHandler(e.target.value, setCvv);
  }
  const billingZipCodeHandler = (e) => {
    textHandler(e.target.value, setbillingZipCode);
  }

  return (
    <form>
      <h3>F3 Form</h3>
      card number<input type='text' name='card-number' value={cardNumber} onChange={cardNumberHandler}></input>
      exp. date<input type='text' name='exp-date' value={expDate} onChange={expDateHandler}></input>
      cvv<input type='text' name='cvv' value={cvv} onChange={cvvHandler}></input>
      billing zip code<input type='text' name='billing-zip-code' value={billingZipCode} onChange={billingZipCodeHandler}></input>
      <input type='button' name='user-submit' value='Next' onClick={handleNext}></input>
    </form>
  )
}

export default F3Form;