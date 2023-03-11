import { useState } from 'react';

const F1Form = ({ textHandler, handleNext }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameHandler = (e) => {
    textHandler(e.target.value, setName);
  }
  const emailHandler = (e) => {
    textHandler(e.target.value, setEmail);
  }
  const passwordHandler = (e) => {
    textHandler(e.target.value, setPassword);
  }

  return (
    <form>
      <h3>F1 Form</h3>
      name<input type='text' name='username' value={name} onChange={nameHandler}></input>
      email<input type='text' name='email' value={email} onChange={emailHandler}></input>
      password<input type='text' name='password' value={password} onChange={passwordHandler}></input>
      <input type='button' name='user-submit' value='Next' onClick={handleNext}></input>
    </form>
  )
}

export default F1Form;