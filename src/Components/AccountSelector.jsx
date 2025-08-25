import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Send, 
  FileText, 
  TrendingUp, 
  MoreHorizontal,
  Bell,
  User,
  CreditCard,
  PiggyBank,
  Calculator,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  Wallet,
  BarChart3,
  Target,
  Search,
  Menu,
  X
} from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [isScrolled, setIsScrolled] = useState(false);
  const moreMenuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setShowMoreMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mainNavItems = [
    { 
      path: '/', 
      icon: Home, 
      label: 'Home', 
      color: 'from-blue-500 to-blue-600',
      description: 'Dashboard & Overview',
      badge: notifications > 0 ? notifications : null
    },
    { 
      path: '/account', 
      icon: Wallet, 
      label: 'Accounts', 
      color: 'from-emerald-500 to-emerald-600',
      description: 'Account Overview'
    },
    { 
      path: '/transfer', 
      icon: Send, 
      label: 'Transfer', 
      color: 'from-green-500 to-green-600',
      description: 'Send Money'
    },
    { 
      path: '/bills', 
      icon: FileText, 
      label: 'Bills', 
      color: 'from-orange-500 to-orange-600',
      description: 'Pay Bills'
    },
    { 
      path: '/invest', 
      icon: TrendingUp, 
      label: 'Invest', 
      color: 'from-purple-500 to-purple-600',
      description: 'Investments'
    },
    { 
      path: '/budgeting', 
      icon: BarChart3, 
      label: 'Budget', 
      color: 'from-cyan-500 to-cyan-600',
      description: 'Budgeting & Analytics'
    }
  ];

  const moreMenuItems = [
    { path: '/profile', icon: User, label: 'Profile', color: 'text-blue-400', description: 'Manage your profile' },
    { path: '/card-services', icon: CreditCard, label: 'Card Services', color: 'text-green-400', description: 'Manage your cards' },
    { path: '/savings', icon: PiggyBank, label: 'Savings', color: 'text-purple-400', description: 'Savings accounts' },
    { path: '/goals', icon: Target, label: 'Goals', color: 'text-pink-400', description: 'Financial goals' },
    { path: '/calculator', icon: Calculator, label: 'Calculator', color: 'text-orange-400', description: 'Financial calculator' },
    { path: '/settings', icon: Settings, label: 'Settings', color: 'text-gray-400', description: 'App settings' },
    { path: '/help', icon: HelpCircle, label: 'Help & Support', color: 'text-cyan-400', description: 'Get help' },
    { path: '/logout', icon: LogOut, label: 'Sign Out', color: 'text-red-400', description: 'Sign out of your account' }
  ];

  const handleNavClick = (path) => {
    if (path === '/logout') {
      handleLogout();
    } else {
      navigate(path);
      setShowMobileMenu(false);
    }
  };

  const handleMoreItemClick = (path) => {
    setShowMoreMenu(false);
    if (path === '/logout') {
      handleLogout();
    } else {
      navigate(path);
    }
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // Add logout logic here
    navigate('/login');
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    return location.pathname.startsWith(path) && path !== '/';
  };

  const getActiveItem = () => {
    return mainNavItems.find(item => isActive(item.path)) || mainNavItems[0];
  };

  return (
    <>
      {/* Navigation Container */}
      <nav className={`
        sticky top-0 z-50 transition-all duration-300 border-b
        ${isScrolled 
          ? 'bg-[#1a202c]/95 backdrop-blur-lg border-[#2d3748]/50 shadow-lg' 
          : 'bg-[#1a202c]/80 backdrop-blur-sm border-[#2d3748]/30'
        }
      `}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {mainNavItems.map((item) => {
                const IconComponent = item.icon;
                const active = isActive(item.path);
                
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`
                      group relative flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all duration-300
                      ${active 
                        ? 'text-white bg-gradient-to-r ' + item.color + ' shadow-lg transform scale-105' 
                        : 'text-[#a0aec0] hover:text-white hover:bg-[#2d3748]/50'
                      }
                    `}
                  >
                    {/* Notification Badge */}
                    {item.badge && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse z-10">
                        {item.badge}
                      </div>
                    )}
                    
                    <IconComponent className={`w-5 h-5 transition-all duration-300 ${active ? 'drop-shadow-sm' : 'group-hover:scale-110'}`} />
                    <span className="text-sm">{item.label}</span>
                    
                    {/* Active Indicator */}
                    {active && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-sm"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* More Menu Button - Desktop */}
            <div className="hidden lg:block relative" ref={moreMenuRef}>
              <button
                onClick={() => setShowMoreMenu(!showMoreMenu)}
                className={`
                  group flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300
                  ${showMoreMenu 
                    ? 'text-white bg-[#2d3748] shadow-lg' 
                    : 'text-[#a0aec0] hover:text-white hover:bg-[#2d3748]/50'
                  }
                `}
              >
                <MoreHorizontal className="w-5 h-5" />
                <span className="text-sm">More</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showMoreMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Desktop More Menu Dropdown */}
              {showMoreMenu && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-[#2d3748]/95 backdrop-blur-lg rounded-xl shadow-2xl border border-[#4a5568]/30 overflow-hidden transform transition-all duration-300 ease-out">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">More Options</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-[#a0aec0]">All services available</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                      {moreMenuItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <button
                            key={item.path}
                            onClick={() => handleMoreItemClick(item.path)}
                            className="group flex items-start gap-3 p-3 bg-[#1a202c]/30 hover:bg-[#1a202c]/50 rounded-lg transition-all duration-200 text-left"
                          >
                            <div className={`p-2 rounded-lg bg-[#4a5568]/30 group-hover:scale-110 transition-transform duration-200`}>
                              <IconComponent className={`w-4 h-4 ${item.color}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-white font-medium text-sm">{item.label}</div>
                              <div className="text-[#a0aec0] text-xs truncate">{item.description}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex items-center justify-between w-full">
              {/* Current Page Indicator */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  {React.createElement(getActiveItem().icon, { 
                    className: `w-6 h-6 text-white` 
                  })}
                  <div>
                    <h1 className="text-lg font-semibold text-white">{getActiveItem().label}</h1>
                    <p className="text-xs text-[#a0aec0]">{getActiveItem().description}</p>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2 text-[#a0aec0] hover:text-white transition-colors duration-200"
              >
                {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {showMobileMenu && (
            <div className="lg:hidden border-t border-[#2d3748]/30 py-4 space-y-2 max-h-80 overflow-y-auto">
              <div className="grid grid-cols-2 gap-2 mb-4">
                {mainNavItems.map((item) => {
                  const IconComponent = item.icon;
                  const active = isActive(item.path);
                  
                  return (
                    <button
                      key={item.path}
                      onClick={() => handleNavClick(item.path)}
                      className={`
                        relative flex items-center gap-3 p-3 rounded-lg font-medium transition-all duration-200 text-left
                        ${active 
                          ? 'text-white bg-gradient-to-r ' + item.color + ' shadow-lg' 
                          : 'text-[#a0aec0] bg-[#2d3748]/30 hover:text-white hover:bg-[#2d3748]/50'
                        }
                      `}
                    >
                      {item.badge && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {item.badge}
                        </div>
                      )}
                      <IconComponent className="w-5 h-5" />
                      <div>
                        <div className="text-sm font-medium">{item.label}</div>
                        <div className="text-xs opacity-75">{item.description}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Mobile More Options */}
              <div className="border-t border-[#2d3748]/30 pt-4">
                <h3 className="text-sm font-semibold text-[#a0aec0] mb-3 px-2">More Options</h3>
                <div className="space-y-1">
                  {moreMenuItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.path}
                        onClick={() => handleMoreItemClick(item.path)}
                        className="w-full flex items-center gap-3 p-3 text-[#a0aec0] hover:text-white hover:bg-[#2d3748]/30 rounded-lg transition-all duration-200 text-left"
                      >
                        <IconComponent className={`w-5 h-5 ${item.color}`} />
                        <div>
                          <div className="text-sm font-medium">{item.label}</div>
                          <div className="text-xs opacity-75">{item.description}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Navigation Status Bar */}
      {!showMobileMenu && (
        <div className="bg-gradient-to-r from-[#08566e] to-[#0d7490] text-white py-1">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>All Services Online</span>
                </div>
                <span className="hidden sm:block">•</span>
                <span className="hidden sm:block">Last updated: {new Date().toLocaleTimeString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Search className="w-4 h-4 cursor-pointer hover:text-[#b4dbdc] transition-colors" />
                <Bell className="w-4 h-4 cursor-pointer hover:text-[#b4dbdc] transition-colors" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;