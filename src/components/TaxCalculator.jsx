import { useState } from "react";
import React from "react";
import "./TaxCalculator.css";
import TaxRateSelector from "./TaxRateSelector/TaxRateSelector";

function TaxCalculator() {
  const [income, setIncome] = useState("");
  const [result, setResult] = useState("0");
  const [taxRate, setTaxRate] = useState("0.1");
  const [errorMsg, setErrorMsg] = useState("");
  const regex = /^[0-9\b]+$/;

  const handleIncome = (event) => {
    setIncome(event.target.value);
  };

  const handleCalculateTax = () => {
    if (!regex.test(income)) {
      setResult("0");
      setErrorMsg("Please input numbers only!");
    } else if (income.length > 7) {
      setResult("0");
      setErrorMsg("Maximum of 7 digits only!");
    } else {
      setErrorMsg("");
      setResult(Number(income) * Number(taxRate));
    }
  };
  return (
    <main className="body">
      <section className="container">
        <div>
          <h2 className="title">Tax Calculator</h2>
          <h4 className="result">Tax Result: {result}</h4>
        </div>
        <div className="input-container">
          <label>Income:</label>
          <input type="text" onChange={handleIncome} required />
          <TaxRateSelector setTaxRate={setTaxRate} />
        </div>
        <button className="button" onClick={handleCalculateTax}>
          Calculate my Income Tax
        </button>
        <div>
          <p>{errorMsg}</p>
        </div>
      </section>
    </main>
  );
}

export default TaxCalculator;
