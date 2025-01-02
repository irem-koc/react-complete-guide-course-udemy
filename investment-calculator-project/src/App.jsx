import { useState } from "react";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import InvestmentTable from "./components/InvestmentTable";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const handleInvestmentChange = (e) => {
    setInvestment({
      ...investment,
      [e.target.name]: e.target.value ? parseInt(e.target.value) : 0,
    });
  };
  const inputIsValid = investment.duration >= 1;
  return (
    <div>
      <Header />
      <Calculator invest={investment} handleChange={handleInvestmentChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration grater than zero</p>
      )}
      {inputIsValid && <InvestmentTable input={investment} />}
    </div>
  );
}

export default App;
