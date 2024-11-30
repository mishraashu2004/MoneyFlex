
import { FiDollarSign, FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';

const FinancialOverview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>
      <div className="mb-4">
        <p className="text-gray-600">Net Worth</p>
        <p className="text-3xl font-bold flex items-center">
          <FiDollarSign className="text-green-500 mr-1" />
          85,420.00
        </p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Recent Transactions</h3>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span>Grocery Store</span>
            <span className="flex items-center text-red-500">
              <FiArrowDownRight className="mr-1" />
              $52.36
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span>Salary Deposit</span>
            <span className="flex items-center text-green-500">
              <FiArrowUpRight className="mr-1" />
              $3,500.00
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FinancialOverview;

