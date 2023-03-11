import { useState } from 'react';
import F1Form from './checkoutForms/f1Form.jsx';
import F2Form from './checkoutForms/f2Form.jsx';
import F3Form from './checkoutForms/f3Form.jsx';

const App = () => {
  const [f1View, setF1View] = useState(true);
  const [f2View, setF2View] = useState(true);
  const [f3View, setF3View] = useState(true);

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
      {f2View && <F2Form textHandler={textHandler}/>}
      {f3View && <F3Form textHandler={textHandler}/>}
      {/* Confirmation form*/}
    </div>
  </div>
  )
}

export default App;

{/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}