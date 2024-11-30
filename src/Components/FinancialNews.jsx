
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const FinancialNews = () => {
  const news = [
    { title: 'Market Update: S&P 500 Reaches New High', date: 'May 15, 2024' },
    { title: 'Fed Announces Interest Rate Decision', date: 'May 14, 2024' },
    { title: 'Top 5 Stocks to Watch This Week', date: 'May 13, 2024' },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Financial News & Insights</h2>
      <div className="relative">
        <div className="overflow-x-auto flex space-x-6 pb-4">
          {news.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md w-80 flex-shrink-0">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.date}</p>
            </div>
          ))}
        </div>
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
          <FiChevronLeft className="text-2xl text-gray-600" />
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
          <FiChevronRight className="text-2xl text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default FinancialNews;

