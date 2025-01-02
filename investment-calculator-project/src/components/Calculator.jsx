import React from "react";

const Calculator = ({ invest, handleChange }) => {
  const handleInvestmentChange = (e) => {
    handleChange(e);
  };
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            name="initialInvestment"
            onChange={handleInvestmentChange}
            type="number"
            required
            value={invest.initialInvestment}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            name="annualInvestment"
            onChange={handleInvestmentChange}
            type="number"
            required
            value={invest.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            name="expectedReturn"
            onChange={handleInvestmentChange}
            type="number"
            required
            value={invest.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            name="duration"
            onChange={handleInvestmentChange}
            type="number"
            required
            value={invest.duration}
          />
        </p>
      </div>
    </div>
  );
};

export default Calculator;
