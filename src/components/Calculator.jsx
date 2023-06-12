import React, { useEffect, useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  //calculator
  const [inputNumber, setInputNumber] = useState(0);
  const [displayResult, setDisplayResult] = useState(0);
  const [isDecimal, setIsDecimal] = useState(false);
  const [decimalCount, setDecimalCount] = useState(1);
  const [operator, setOperator] = useState("");
  const [calculatedResult, setCalculatedResult] = useState(0);

  //re-render the app when the input is changed
  useEffect(() => {
    setDisplayResult(inputNumber);
  }, [inputNumber]);

  //re-render the app when the calculation is changed
  useEffect(() => {
    setDisplayResult(calculatedResult);
  }, [calculatedResult]);

  //receive render from input button
  const inputNumberTotal = (num) => {
    //when the input number is in decimal
    if (isDecimal) {
      num = num / Math.pow(10, decimalCount);
      setDecimalCount(decimalCount + 1);
      //Returns a string representing a number in fixed-point notation.
      setInputNumber(parseFloat((inputNumber + num).toFixed(decimalCount)));
      console.log(inputNumber);
    } else {
      setInputNumber(inputNumber * 10 + num);
      console.log(inputNumber);
    }
  };

  //receive operator from input button
  const inputOperator = (operator) => {
    setOperator(operator);
    console.log(operator);
    setInputNumber(0);
  };

  return (
    <React.Fragment>
      <div>
        <section className={styles.monitor}>
          <p>Display</p>
        </section>
        <section className={styles.calbtnContainer}>
          <button>AC</button>
          <button>-/+</button>
          <button>%</button>
          <button onClick={() => inputOperator("/")}>/</button>
          <button onClick={() => inputNumberTotal(7)}>7</button>
          <button onClick={() => inputNumberTotal(8)}>8</button>
          <button onClick={() => inputNumberTotal(9)}>9</button>
          <button onClick={() => inputOperator("*")}>*</button>
          <button onClick={() => inputNumberTotal(4)}>4</button>
          <button onClick={() => inputNumberTotal(5)}>5</button>
          <button onClick={() => inputNumberTotal(6)}>6</button>
          <button onClick={() => inputOperator("-")}>-</button>
          <button onClick={() => inputNumberTotal(1)}>1</button>
          <button onClick={() => inputNumberTotal(2)}>2</button>
          <button onClick={() => inputNumberTotal(3)}>3</button>
          <button onClick={() => inputOperator("+")}>+</button>
          <button onClick={() => inputNumberTotal(0)}>0</button>
          <button onClick={() => setIsDecimal(true)}>.</button>
          <button>=</button>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Calculator;
