import { FiSend, FiFileText, FiCreditCard, FiPieChart } from 'react-icons/fi';

const QuickActions = () => {
  const actions = [
    { icon: <FiSend />, label: 'Transfer Money' },
    { icon: <FiFileText />, label: 'Pay Bills' },
    { icon: <FiCreditCard />, label: 'Card Services' },
    { icon: <FiPieChart />, label: 'Budgeting' },
  ];

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h2 className="h4 mb-4">Quick Actions</h2>
      <div className="row row-cols-2 row-cols-md-4 g-3">
        {actions.map((action, index) => (
          <div key={index} className="col">
            <button
              className="btn btn-outline-primary w-100 d-flex flex-column align-items-center py-3 rounded-3"
            >
              <span className="fs-1 text-primary mb-2">{action.icon}</span>
              <span className="text-center text-muted">{action.label}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
