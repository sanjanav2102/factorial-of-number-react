import React, { useState } from "react";
//import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  // Factorial
  const factorial = () => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    setResult("Factorial = " + fact);
  };

  // Fibonacci
  const fibonacci = () => {
    let a = 0, b = 1;
    let series = [];

    for (let i = 1; i <= num; i++) {
      series.push(a);
      let temp = a + b;
      a = b;
      b = temp;
    }

    setResult("Fibonacci Series: " + series.join(", "));
  };

  // Prime or Not
  const primeCheck = () => {
    let flag = true;

    if (num <= 1) flag = false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        flag = false;
        break;
      }
    }

    setResult(flag ? "Prime Number" : "Not a Prime Number");
  };

  return (
    <div className="container">
      <h2>Factorial, Fibonacci & Prime</h2>

      <input
        type="number"
        placeholder="Enter a number"
        onChange={(e) => setNum(Number(e.target.value))}
      />

      <div>
        <button onClick={factorial}>Factorial</button>
        <button onClick={fibonacci}>Fibonacci</button>
        <button onClick={primeCheck}>Prime or Not</button>
      </div>

      <p>{result}</p>
    </div>
  );
}

export default App;
