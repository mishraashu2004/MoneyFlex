import { FiDollarSign, FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';

const FinancialOverview = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        {/* Header */}
        <h2 className="card-title fs-4 mb-4">Financial Overview</h2>
        
        {/* Net Worth Section */}
        <div className="mb-4">
          <p className="text-muted mb-1">Net Worth</p>
          <p className="display-5 fw-bold text-success d-flex align-items-center">
            <FiDollarSign className="me-1" />
            85,420.00
          </p>
        </div>

        {/* Recent Transactions */}
        <div>
          <h3 className="fw-semibold mb-3">Recent Transactions</h3>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Grocery Store</span>
              <span className="text-danger d-flex align-items-center">
                <FiArrowDownRight className="me-1" />
                $52.36
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Salary Deposit</span>
              <span className="text-success d-flex align-items-center">
                <FiArrowUpRight className="me-1" />
                $3,500.00
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;
