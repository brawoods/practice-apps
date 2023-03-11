import { useState } from 'react';
import F1Form from './f1Form.jsx';

const App = () => {
  const [f1View, setF1View] = useState(true);

  const textHandler = (value, handler) => {
    console.log(value);
    handler(value);
  }

  return (
  <div>
    <h1>Checkout Counter</h1>
    <input type='button' value='Checkout'></input>
    <div>
      {f1View && <F1Form textHandler={textHandler}/>}
      {/* F2 form*/}
      {/* F3 form*/}
      {/* Confirmation form*/}
    </div>
  </div>
  )
}

export default App;

{/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}