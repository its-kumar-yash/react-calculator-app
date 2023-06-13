import React, { useState } from "react";
import "./Calculator.css";

const Calculator = (props) => {
  //state to store the result of user input
  const [calculatedResult, setCalculatedResult] = useState("");
  //state to check validate user input
  const [isError, setIsError] = useState(false);

  //reading user input
  const clickHandler = (event) => {
    if(isError){
      return;
    }
    setCalculatedResult(calculatedResult.concat(event.target.value));
    // console.log(calculatedResult);
  }

  //clear use input
  const clearHandler = () => {
    setIsError(false);
    setCalculatedResult("");
  }

  //Backspace logic
  const backspaceHandler = () => {
    setCalculatedResult(calculatedResult.slice(0, calculatedResult.length - 1)); // or -1
  }

  //evalutating user input
  const calculate = () => {
    try{
      setCalculatedResult(eval(calculatedResult).toString());
    }catch(err){
      setIsError(true);
      setCalculatedResult("Invalid Input!"); //error message
    }
  }

  return (
    <React.Fragment>
      <div className={"container " + (props.mode ? "light-container" : "dark-container")}>
        <form>
          <input type="text" value={calculatedResult} className={"user-input " + (props.mode ? "light-input" : "dark-input")} />
        </form>
        <div className="keypad">
          <button onClick={clearHandler} id="clear" className={"highlight " + (props.mode ? "light-highlight" : "dark-highlight")}>Clear</button>
          <button onClick={backspaceHandler} id="backspace" className={"highlight " + (props.mode ? "light-highlight" : "dark-highlight")}>C</button>
          <button onClick={clickHandler} value="/" className={"highlight " + (props.mode ? "light-highlight" : "dark-highlight")}>&divide;</button>
          <button onClick={clickHandler} value="7" className={"btn " +  (props.mode ? "light-btn" : "dark-btn")} >7</button>
          <button onClick={clickHandler} value="8" className={"btn " +  (props.mode ? "light-btn" : "dark-btn")} >8</button>
          <button onClick={clickHandler} value="9" className={"btn " +  (props.mode ? "light-btn" : "dark-btn")} >9</button>
          <button onClick={clickHandler} value="*" className={"highlight " + (props.mode ? "light-highlight" : "dark-highlight")}>&times;</button>
          <button onClick={clickHandler} value="4" className={"btn " +  (props.mode ? "light-btn" : "dark-btn")} >4</button>
          <button onClick={clickHandler} value="5" className={"btn " +  (props.mode ? "light-btn" : "dark-btn")} >5</button>
          <button onClick={clickHandler} value="6" className={"btn " +  (props.mode ? "light-btn" : "dark-btn")} >6</button>
          <button onClick={clickHandler} value="-" className={"highlight " + (props.mode ? "light-highlight" : "dark-highlight")}>&ndash;</button>
          <button onClick={clickHandler} value="1" className={"btn " +  (props.mode ? "light-btn" : "dark-btn")} >1</button>
          <button onClick={clickHandler} value="2" className={"btn " +  (props.mode ? "light-btn" : "dark-btn")} >2</button>
          <button onClick={clickHandler} value="3" className={"btn " +  (props.mode ? "light-btn" : "dark-btn")} >3</button>
          <button onClick={clickHandler} value="+" className={"highlight " + (props.mode ? "light-highlight" : "dark-highlight")}>+</button>
          <button onClick={clickHandler} value="0" className={"btn " +  (props.mode ? "light-btn" : "dark-btn")} >0</button>
          <button onClick={clickHandler} value="." className={"btn " +  (props.mode ? "light-btn" : "dark-btn")} >.</button>
          <button onClick={calculate} id="equal" className={"highlight " + (props.mode ? "light-highlight" : "dark-highlight")}>=</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calculator;
