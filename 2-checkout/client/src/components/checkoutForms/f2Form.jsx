import { useState } from 'react';

const F2Form = ({ textHandler, handleNext }) => {
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setzipCode] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');

  const address1Handler = (e) => {
    textHandler(e.target.value, setAddress1);
  }
  const address2Handler = (e) => {
    textHandler(e.target.value, setAddress2);
  }
  const cityHandler = (e) => {
    textHandler(e.target.value, setCity);
  }
  const stateHandler = (e) => {
    textHandler(e.target.value, setState);
  }
  const zipCodeHandler = (e) => {
    textHandler(e.target.value, setzipCode);
  }
  const phoneNumberHandler = (e) => {
    textHandler(e.target.value, setphoneNumber);
  }

  return (
    <form>
      <h3>F2 Form</h3>
      address line 1<input type='text' name='address1' value={address1} onChange={address1Handler}></input>
      address line 2<input type='text' name='address2' value={address2} onChange={address2Handler}></input>
      city<input type='text' name='password' value={city} onChange={cityHandler}></input>
      state<input type='text' name='state' value={state} onChange={stateHandler}></input>
      zip code<input type='text' name='zip-code' value={zipCode} onChange={zipCodeHandler}></input>
      phone number<input type='text' name='phone-number' value={phoneNumber} onChange={phoneNumberHandler}></input>
      <input type='button' name='user-submit' value='Next' onClick={handleNext}></input>
    </form>
  )
}

export default F2Form;