
import { FiArrowRight } from 'react-icons/fi';

const FeaturedProducts = () => {
  const products = [
    { title: 'Personal Loan', description: 'Low-interest rates starting at 5.99% APR' },
    { title: 'High-Yield Savings', description: 'Earn up to 3.50% APY on your savings' },
    { title: 'Investment Portfolio', description: 'Professionally managed portfolios tailored to your goals' },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <button className="text-blue-600 font-semibold flex items-center">
              Learn More <FiArrowRight className="ml-2" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

