import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const calculate = (operator) => {
    const [num1, num2] = input.split(" ").map(Number);

    if (isNaN(num1) || isNaN(num2)) {
      setResult(
        "Por favor, introduce números válidos separados por un espacio."
      );
      return;
    }

    let calcResult;

    switch (operator) {
      case "+":
        calcResult = num1 + num2;
        break;
      case "-":
        calcResult = num1 - num2;
        break;
      case "*":
        calcResult = num1 * num2;
        break;
      case "/":
        calcResult = num2 !== 0 ? num1 / num2 : "Error: División por 0";
        break;
      default:
        calcResult = "Operador no válido";
    }

    setResult(calcResult);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Calculadora Simplificada</h1>
      <input
        type="text"
        placeholder="Ejemplo: 8 2"
        value={input}
        onChange={handleInput}
        style={{ padding: "5px", fontSize: "16px" }}
      />
      <div style={{ margin: "20px 0" }}>
        <button onClick={() => calculate("+")} style={{ margin: "5px" }}>
          +
        </button>
        <button onClick={() => calculate("-")} style={{ margin: "5px" }}>
          -
        </button>
        <button onClick={() => calculate("*")} style={{ margin: "5px" }}>
          *
        </button>
        <button onClick={() => calculate("/")} style={{ margin: "5px" }}>
          /
        </button>
      </div>
      <h2>Resultado: {result}</h2>
    </div>
  );
};

export default App;
