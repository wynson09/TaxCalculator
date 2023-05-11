import React from "react";

function TaxRateSelector({ setTaxRate }) {
  const handleChange = (event) => {
    setTaxRate(event.target.value);
  };
  return (
    <div>
      <label htmlFor="dropdown">Tax rate:</label>
      <select id="dropdown" onChange={handleChange}>
        <option value="0.1">10%</option>
        <option value="0.15">15%</option>
        <option value="0.2">20%</option>
        <option value="0.3">30%</option>
      </select>
    </div>
  );
}

export default TaxRateSelector;
