import React, { useEffect, useState } from "react";
import styles from "./Calculator.module.css"

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

    return <React.Fragment>
        <div>
            <section className={styles.monitor}>
                <p>Display</p>
            </section>
            <section className={styles.calbtnContainer}>
                <button>AC</button>
                <button>-/+</button>
                <button>%</button>
                <button>/</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>*</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button>0</button>
                <button>.</button>
                <button>=</button>
            </section>
        </div>
    </React.Fragment>

};

export default Calculator;