import { useState } from 'react';
import './App.css';
import Button from './Button';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';

function App() {

  const [number, setnumber] = useState(0)

  const increament = () => {
    setnumber(number + 1);
  }
  const decreament = () => {
    setnumber((value) => {
      if (value < 1) {
        setnumber(0)
        return alert("reach 0");
      }
      else {
        return value - 1;
      }
    });
  }
  return (
    <>
      <div className="back">
        <div className="box">
          <div className="box1">
            <h1>{number}</h1>
            <div>
              <Button text={<PlusOneIcon/>} bcolor="#3333ff" onSelect={increament} />
              <Button text={<ExposureNeg1Icon/>} bcolor="#ff3300"
                onSelect={decreament} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
