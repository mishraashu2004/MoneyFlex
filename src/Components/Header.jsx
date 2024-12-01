import { Link } from 'react-router-dom';
import { FiSearch, FiBell, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  
  // Navigate to Account Overview page
  const handleAccountOverview = () => {
    navigate('/account');
  };

  return (
    <header className="bg-[#08566e] text-[#b4dbdc] shadow-sm">
      <div className="container d-flex align-items-center justify-content-between py-4">
        {/* Logo at the start of the page */}
        <Link to="/" className="navbar-brand fw-bold fs-3 text-[#b4dbdc] hover:text-white transition-all duration-300">
          MoneyFlex
        </Link>

        {/* Search Bar */}
        <div className="d-flex align-items-center w-75"> {/* Increased width of search bar */}
          <div className="input-group w-full">
            <span className="input-group-text bg-[#1a202c] border-0 text-[#b4dbdc]">
              <FiSearch />
            </span>
            <input
              type="text"
              className="form-control border-0 ps-4 bg-[#1a202c] text-[#b4dbdc] placeholder-[#b4dbdc] focus:ring-0"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Icon Buttons */}
        <div className="d-flex align-items-center gap-4">
          <button className="btn btn-light p-3 rounded-circle shadow-lg hover:bg-[#1a202c]" title="Notifications">
            <FiBell className="text-[#000000]" /> {/* Updated color for visibility */}
          </button>
          <button
            className="btn btn-light p-3 rounded-circle shadow-lg hover:bg-[#1a202c]"
            title="Account Overview"
            onClick={handleAccountOverview}
          >
            <FiUser className="text-[#000000]" /> {/* Updated color for visibility */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
