import React, { useEffect, useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [calculatedResult, setCalculatedResult] = useState("");
  
  const clickHandler = (event) => {
    setCalculatedResult(calculatedResult.concat(event.target.value));
    console.log(calculatedResult);
  }

  const clearHandler = () => {
    setCalculatedResult("");
  }

  const backspaceHandler = () => {
    setCalculatedResult(calculatedResult.slice(0, calculatedResult.length - 1)); // or -1
  }

  const calculate = () => {

    try{
      setCalculatedResult(eval(calculatedResult).toString());
    }catch(err){
      setCalculatedResult("Invalid Input!");
    }


    
  }

  return (
    <React.Fragment>
      <div className="container">
        <form>
          <input type="text" value={calculatedResult} />
        </form>
        <div className="keypad">
          <button onClick={clearHandler} id="clear" className="highlight">Clear</button>
          <button onClick={backspaceHandler} id="backspace" className="highlight">C</button>
          <button onClick={clickHandler} value="/" className="highlight">&divide;</button>
          <button onClick={clickHandler} value="7">7</button>
          <button onClick={clickHandler} value="8">8</button>
          <button onClick={clickHandler} value="9">9</button>
          <button onClick={clickHandler} value="*" className="highlight">&times;</button>
          <button onClick={clickHandler} value="4">4</button>
          <button onClick={clickHandler} value="5">5</button>
          <button onClick={clickHandler} value="6">6</button>
          <button onClick={clickHandler} value="-" className="highlight">&ndash;</button>
          <button onClick={clickHandler} value="1">1</button>
          <button onClick={clickHandler} value="2">2</button>
          <button onClick={clickHandler} value="3">3</button>
          <button onClick={clickHandler} value="+" className="highlight">+</button>
          <button onClick={clickHandler} value="0">0</button>
          <button onClick={clickHandler} value=".">.</button>
          <button onClick={calculate} id="equal" className="highlight">=</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calculator;
