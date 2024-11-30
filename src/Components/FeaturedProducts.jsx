import { FiArrowRight } from 'react-icons/fi';

const FeaturedProducts = () => {
  const products = [
    { title: 'Personal Loan', description: 'Low-interest rates starting at 5.99% APR' },
    { title: 'High-Yield Savings', description: 'Earn up to 3.50% APY on your savings' },
    { title: 'Investment Portfolio', description: 'Professionally managed portfolios tailored to your goals' },
  ];

  return (
    <section className="mt-4">
      <h2 className="text-center display-5 mb-4">Featured Products</h2>
      <div className="row g-4">
        {products.map((product, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h3 className="card-title h5 mb-3">{product.title}</h3>
                <p className="card-text text-secondary mb-4">{product.description}</p>
                <button className="btn btn-link text-primary d-flex align-items-center">
                  Learn More <FiArrowRight className="ms-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
