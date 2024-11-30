import { Link } from 'react-router-dom';
import { FiSearch, FiBell, FiUser } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container d-flex align-items-center justify-content-between py-3">
        {/* Logo */}
        <Link to="/" className="navbar-brand text-primary fw-bold fs-3">
          FinTech
        </Link>

        {/* Search Bar */}
        <div className="d-flex align-items-center">
          <div className="input-group">
            <span className="input-group-text bg-light border-0">
              <FiSearch className="text-muted" />
            </span>
            <input
              type="text"
              className="form-control border-0 rounded-pill ps-2"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Icon Buttons */}
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-light p-2 rounded-circle shadow-sm">
            <FiBell className="text-secondary" />
          </button>
          <button className="btn btn-light p-2 rounded-circle shadow-sm">
            <FiUser className="text-secondary" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
