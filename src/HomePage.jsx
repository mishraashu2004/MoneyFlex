
import Header from './Components/Header';
import Navigation from './components/Navigation';
import FinancialOverview from './Components/FinancialOverview';
import QuickActions from './Components/QuickActions';
import FeaturedProducts from './Components/FeaturedProducts';
import FinancialNews from './Components/FinancialNews';
const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome, John Doe</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FinancialOverview />
          <QuickActions />
        </div>
        <FeaturedProducts />
        <FinancialNews />
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 FinTech App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

