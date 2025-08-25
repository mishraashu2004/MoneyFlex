import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AccountOverview from "./components/AccountOverview.jsx";
import MoneyTransfer from './components/MoneyTransfer.jsx';
import BillPayments from './components/BillPayments.jsx';
import Investments from './components/Investments.jsx';
import CardServices from './components/CardServices.jsx'; 
import BudgetingPage from "./components/BudgetingPage.jsx";

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
