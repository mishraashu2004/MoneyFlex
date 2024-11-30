import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const FinancialNews = () => {
  const news = [
    { title: 'Market Update: S&P 500 Reaches New High', date: 'May 15, 2024' },
    { title: 'Fed Announces Interest Rate Decision', date: 'May 14, 2024' },
    { title: 'Top 5 Stocks to Watch This Week', date: 'May 13, 2024' },
  ];

  return (
    <section className="mt-5">
      <h2 className="text-center display-5 mb-4">Financial News & Insights</h2>
      <div className="position-relative">
        {/* News Cards Container */}
        <div className="d-flex overflow-auto pb-3">
          {news.map((item, index) => (
            <div
              key={index}
              className="card flex-shrink-0 mx-2"
              style={{ width: '18rem', minWidth: '18rem' }}
            >
              <div className="card-body">
                <h5 className="card-title mb-3">{item.title}</h5>
                <p className="card-text text-muted small">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="btn btn-light position-absolute top-50 start-0 translate-middle-y shadow"
          style={{ zIndex: 1 }}
        >
          <FiChevronLeft className="fs-3 text-secondary" />
        </button>
        <button
          className="btn btn-light position-absolute top-50 end-0 translate-middle-y shadow"
          style={{ zIndex: 1 }}
        >
          <FiChevronRight className="fs-3 text-secondary" />
        </button>
      </div>
    </section>
  );
};

export default FinancialNews;
