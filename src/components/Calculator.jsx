import React, { useEffect, useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [calculatedResult, setCalculatedResult] = useState("");

  const clickHandler = (event) => {
    setCalculatedResult(event.target.name);
    console.log(calculatedResult);
  }

  return (
    <React.Fragment>
      <div className="container">
        <form>
          <input type="text" value={calculatedResult} />
        </form>
        <div className="keypad">
          <button onClick={clickHandler} >Clear</button>
          <button onClick={clickHandler} >C</button>
          <button onClick={clickHandler} >&divide;</button>
          <button onClick={clickHandler} >7</button>
          <button onClick={clickHandler} >8</button>
          <button onClick={clickHandler} >9</button>
          <button onClick={clickHandler} >&times;</button>
          <button onClick={clickHandler} >4</button>
          <button onClick={clickHandler} >5</button>
          <button onClick={clickHandler} >6</button>
          <button onClick={clickHandler} >&ndash;</button>
          <button onClick={clickHandler} >1</button>
          <button onClick={clickHandler} >2</button>
          <button onClick={clickHandler} >3</button>
          <button onClick={clickHandler} >+</button>
          <button onClick={clickHandler} >0</button>
          <button onClick={clickHandler} >.</button>
          <button onClick={clickHandler} >=</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calculator;
