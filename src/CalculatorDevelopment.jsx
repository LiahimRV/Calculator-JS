import React, { useState } from "react";
import "./Calculator.css";

const buttons = [
  { id: "1", value: "1" },
  { id: "2", value: "2" },
  { id: "3", value: "3" },
  { id: "4", value: "4" },
  { id: "5", value: "5" },
  { id: "6", value: "6" },
  { id: "7", value: "7" },
  { id: "8", value: "8" },
  { id: "9", value: "9" },
  { id: "0", value: "0" },
  { id: "+", value: "+" },
  { id: "-", value: "-" },
  { id: "*", value: "*" },
  { id: "/", value: "/" },
  { id: ".", value: "." },
];

const calculateExpression = (exp) => {
  try {
    const func = new Function(`return ${exp}`);
    return func();
  } catch {
    return "Ошибка";
  }
};

export const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    setResult(calculateExpression(input));
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <input type="text" value={result} readOnly />
      </div>
      <div className="buttons">
        {buttons.map((item) => (
          <button
            onClick={() => handleClick(item.value)}
            className="keypad"
            key={item.id}
          >
            {item.value}
          </button>
        ))}
        <button onClick={handleClear} className="clear">
          Очистить
        </button>
        <button onClick={handleCalculate} className="calculate">
          =
        </button>
      </div>
    </div>
  );
};
