import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setStep(value);
    }
  };

  const getStepValue = () => {
    return step === "" ? 0 : parseInt(step, 10);
  };

  const increase = (value) => {
    setCount((prev) => prev + value);
  };

  const decrease = (value) => {
    setCount((prev) => Math.max(0, prev - value));
  };

  return (
    <div className="counter-wrapper">
      <div className="glass-card">
        <h1 className="title">⚡ Counter ⚡</h1>
        <div className="count">{count}</div>

        <div className="buttons">
          <button onClick={() => decrease(1)}>-</button>
          <button onClick={() => increase(1)}>+</button>
        </div>

        <input
          type="text"
          value={step === "" ? "" : step} 
          onChange={handleInputChange}
          onFocus={() => {
            if (step === "0") setStep("");
          }}
          onBlur={() => {
            if (step === "") setStep(""); 
          }}
          className="step-input"
          placeholder="0" 
        />

        <div className="buttons">
          
          <button onClick={() => decrease(getStepValue())}>Azalt</button>
          <button onClick={() => increase(getStepValue())}>Artır</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
