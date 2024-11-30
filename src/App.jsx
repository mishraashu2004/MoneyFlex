
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AccountOverview from './components/AccountOverview';
import MoneyTransfer from './components/MoneyTransfer';
import BillPayments from './components/BillPayments';
import Investments from './components/Investments';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountOverview />} />
        <Route path="/transfer" element={<MoneyTransfer />} />
        <Route path="/bills" element={<BillPayments />} />
        <Route path="/invest" element={<Investments />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;