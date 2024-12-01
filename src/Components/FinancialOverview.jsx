const FinancialOverview = () => {
  return (
    <div className="bg-[#08566e] text-[#b4dbdc] p-6 rounded-xl shadow-lg w-full">
      <h2 className="text-2xl font-semibold mb-4">Financial Overview</h2>
      
      {/* Grid Layout for Account Balance and Pending Payments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account Balance */}
        <div className="bg-[#1a202c] p-6 rounded-lg shadow-md">
          <h3 className="font-medium text-[#b4dbdc]">Account Balance</h3>
          <p className="text-lg font-semibold">₹50,000.00</p>
        </div>

        {/* Pending Payments */}
        <div className="bg-[#1a202c] p-6 rounded-lg shadow-md">
          <h3 className="font-medium text-[#b4dbdc]">Pending Payments</h3>
          <p className="text-lg font-semibold">₹3,200.00</p>
        </div>
      </div>

      {/* Additional Financial Data */}
      <div className="mt-6">
        <div className="bg-[#1a202c] p-6 rounded-lg shadow-md mb-4">
          <h3 className="font-medium text-[#b4dbdc]">Loans Outstanding</h3>
          <p className="text-lg font-semibold">₹15,000.00</p>
        </div>
        <div className="bg-[#1a202c] p-6 rounded-lg shadow-md">
          <h3 className="font-medium text-[#b4dbdc]">Credit Score</h3>
          <p className="text-lg font-semibold">780</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;
