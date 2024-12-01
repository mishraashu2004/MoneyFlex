import { FiSend, FiFileText, FiCreditCard, FiPieChart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const QuickActions = () => {
  const actions = [
    { icon: <FiSend />, label: 'Transfer Money', to: '/transfer' },
    { icon: <FiFileText />, label: 'Pay Bills', to: '/bills' },
    { icon: <FiCreditCard />, label: 'Card Services', to: '/card-services' },
    { icon: <FiPieChart />, label: 'Budgeting', to: '/budgeting' },
  ];

  return (
    <div className="bg-[#08566e] p-6 rounded-xl shadow-lg w-full">
      <h2 className="text-2xl font-semibold text-[#b4dbdc] mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <div key={index} className="col-span-1">
            <Link
              to={action.to}
              className="btn btn-outline-light w-full d-flex flex-column align-items-center py-4 rounded-lg text-center"
            >
              <span className="fs-3 mb-2">{action.icon}</span>
              <span className="text-[#b4dbdc]">{action.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
