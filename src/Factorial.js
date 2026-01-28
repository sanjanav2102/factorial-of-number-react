import React, { useState } from "react";

function Factorial() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState(null);

  const calculateFactorial = () => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    setResult(fact);
  };

  return (
    <div className="box">
      <h3>Factorial</h3>
      <input type="number" onChange={(e) => setNum(e.target.value)} />
      <button onClick={calculateFactorial}>Find</button>
      {result !== null && <p>Factorial: {result}</p>}
    </div>
  );
}

export default Factorial;
