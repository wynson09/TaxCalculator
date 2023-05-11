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
      setErrorMsg("Please input numbers only!");
    } else if (income.length > 7) {
      setErrorMsg("Maximum of 7 digits only!");
    } else {
      setErrorMsg("");
      setResult(Number(income) * Number(taxRate));
    }
  };
  return (
    <main>
      <section>
        <div>
          <h2>Tax Calculator</h2>
          <h4>Tax Result: {result}</h4>
        </div>
        <div>
          <label>Income:</label>
          <input type="text" onChange={handleIncome} />
          <TaxRateSelector setTaxRate={setTaxRate} />
        </div>
        <button onClick={handleCalculateTax}>Calculate my Income Tax</button>
        <div>
          <p>{errorMsg}</p>
        </div>
      </section>
    </main>
  );
}

export default TaxCalculator;
