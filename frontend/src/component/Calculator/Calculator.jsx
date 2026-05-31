import React, { useReducer, useState } from "react";
import styles from "./Calculator.module.css";
import { useSelector } from "react-redux";

const CalcButton = [
  "C",
  "⌫",
  "%",
  "/",

  "7",
  "8",
  "9",
  "*",

  "4",
  "5",
  "6",
  "-",

  "1",
  "2",
  "3",
  "+",

  "00",
  "0",
  ".",
  "=",
];

const handleValueFunction = (state, action) => {
  if (action.type === "=") {
    state = eval(state).toString();
  } else if (action.type === "C") {
    state = "";
  } else if (action.type === "⌫") {
    state = state.slice(0, -1);
  } else {
    state = state + action.type;
  }
  return state;
};
const Calculator = () => {
  const name = useSelector((state) => state.user.name);
  console.log(name);
  // const [value, setValue] = useState(" ");
  const [value, dispatchValue] = useReducer(handleValueFunction, "2");

  // logic for useReducer

  const handleClick = (val) => {
    dispatchValue({ type: val });
  };
  // logic for useState
  // const handleClick = (val) => {
  //   // if (val === "=") {
  //   //   setValue(eval(value));
  //   // } else if (val === "C") {
  //   //   setValue(" ");
  //   // } else if (val === "⌫") {
  //   //   setValue(value.slice(0, -1));
  //   // } else {
  //   //   setValue(value + val);
  //   // }

  // };
  return (
    <div className={styles.outerPart}>
      <h1></h1>
      <div className={styles.CalcSection}>
        {/* Heading */}
        <div className={styles.heading}>
          <h2>{name}'s Calculator</h2>
        </div>

        {/* Display */}
        <div className={styles.inputField}>
          <input type="text" placeholder="0" value={value} />
        </div>

        {/* Buttons */}
        <div className={styles.allButtons}>
          {CalcButton.map((btn, index) => (
            <button
              onClick={() => handleClick(btn)}
              key={index}
              className={`
                ${styles.button}

                ${
                  ["+", "-", "*", "/", "%"].includes(btn) ? styles.operator : ""
                }

                ${btn === "=" ? styles.equalBtn : ""}
              `}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
