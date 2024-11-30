
import { FiSend, FiFileText, FiCreditCard, FiPieChart } from 'react-icons/fi';

const QuickActions = () => {
  const actions = [
    { icon: <FiSend />, label: 'Transfer Money' },
    { icon: <FiFileText />, label: 'Pay Bills' },
    { icon: <FiCreditCard />, label: 'Card Services' },
    { icon: <FiPieChart />, label: 'Budgeting' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <span className="text-2xl text-blue-600 mb-2">{action.icon}</span>
            <span className="text-sm text-gray-700">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;

