
import { Link } from 'react-router-dom';
import { FiSearch, FiBell, FiUser } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">FinTech</Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <FiBell className="text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <FiUser className="text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

