import Header from './Components/Header';
import Navigation from './components/Navigation';
import FinancialOverview from './Components/FinancialOverview';
import QuickActions from './Components/QuickActions';
import FeaturedProducts from './Components/FeaturedProducts';
import FinancialNews from './Components/FinancialNews';
import AccountSelector from './Components/AccountSelector';
import GeminiChatBot from './ChatBot';
import './Chatbot.css'
import Chatbot from 'react-chatbot-kit';
const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a202c] text-[#b4dbdc]">
      {/* Header */}
      <Header />
      
      {/* Navigation */}
      <Navigation />

      {/* Account Selector */}
      <AccountSelector />

      <main className="flex-grow container mx-auto px-6 py-8">
        {/* Welcome Message */}
        <h1 className="text-4xl font-semibold mb-6 text-[#b4dbdc]">Welcome, User</h1>
        
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Financial Overview */}
          <div className="lg:col-span-1">
            <FinancialOverview />
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1 w-full">
            <QuickActions />
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="mt-10">
          <FeaturedProducts />
        </div>
        <GeminiChatBot/>

        {/* Optional Financial News Section */}
        {/* <FinancialNews /> Uncomment if you need this */}
      </main>

      {/* Footer */}
      <footer className="bg-[#08566e] text-white py-4 text-center mt-auto">
        <p>&copy; 2024 MoneyFlex App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
