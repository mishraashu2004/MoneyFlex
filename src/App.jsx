import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AccountOverview from './components/AccountOverview.jsx';
import MoneyTransfer from './components/MoneyTransfer.jsx';
import BillPayments from './components/BillPayments.jsx';
import Investments from './components/Investments.jsx';
import CardServices from './components/CardServices.jsx'; // Import the new CardServices component
import BudgetingPage from './Components/BudgetngPage.jsx';

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
        {/* Add more routes as needed */}
        <Route path="/budgeting" element={<BudgetingPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
