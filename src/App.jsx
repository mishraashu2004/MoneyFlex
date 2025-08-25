import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AccountOverview from "./Components/AccountOverview.jsx";
import MoneyTransfer from "./Components/MoneyTransfer.jsx";
import BillPayments from "./Components/BillPayments.jsx";
import Investments from "./Components/Investments.jsx";
import CardServices from "./Components/CardServices.jsx"; 
import BudgetingPage from "./Components/BudgetingPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountOverview />} />
        <Route path="/transfer" element={<MoneyTransfer />} />
        <Route path="/bills" element={<BillPayments />} />
        <Route path="/invest" element={<Investments />} />
        <Route path="/card-services" element={<CardServices />} /> 
        <Route path="/budgeting" element={<BudgetingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
