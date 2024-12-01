import { FiArrowRight } from 'react-icons/fi';

const FeaturedProducts = () => {
  const products = [
    { title: 'Personal Loan', description: 'Low-interest rates starting at 5.99% APR' },
    { title: 'High-Yield Savings', description: 'Earn up to 3.50% APY on your savings' },
    { title: 'Investment Portfolio', description: 'Professionally managed portfolios tailored to your goals' },
  ];

  return (
    <section className="mt-4">
      <h2 className="text-center text-[#b4dbdc] text-3xl font-semibold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-[#2d3748] p-5 rounded-lg shadow-lg h-full">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-[#b4dbdc] text-2xl font-semibold mb-3">{product.title}</h3>
                <p className="text-[#cbd5e0] mb-4">{product.description}</p>
              </div>
              <button className="text-[#08566e] flex items-center mt-auto hover:text-[#1e2a35] transition-all">
                Learn More <FiArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
