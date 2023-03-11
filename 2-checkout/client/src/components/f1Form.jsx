import { useState } from 'react';

const F1Form = ({ textHandler }) => {
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
    <div>
      <input type='text' name='username' value={name} onChange={nameHandler}></input>
      <input type='text' name='email' value={email} onChange={emailHandler}></input>
      <input type='text' name='password' value={password} onChange={passwordHandler}></input>
    </div>
  )
}

export default F1Form;