import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Send, 
  FileText, 
  TrendingUp,
  Bell,
  User,
  CreditCard,
  Wallet,
  BarChart3,
  Search,
  Menu,
  X,
  MessageSquare,
  Shield,
  LogOut,
  Settings
} from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // States
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Payment Received', message: 'You received ₹5,000 from John Doe', time: '2 min ago', unread: true },
    { id: 2, title: 'Bill Reminder', message: 'Electricity bill due tomorrow', time: '1 hour ago', unread: true },
    { id: 3, title: 'Investment Update', message: 'Your SIP has been processed', time: '3 hours ago', unread: false }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const unreadCount = notifications.filter(n => n.unread).length;

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const mainNavItems = [
    { path: '/', icon: Home, label: 'Home', color: 'from-blue-500 to-blue-600', badge: unreadCount },
    { path: '/account', icon: Wallet, label: 'Accounts', color: 'from-emerald-500 to-emerald-600' },
    { path: '/transfer', icon: Send, label: 'Transfer', color: 'from-green-500 to-green-600' },
    { path: '/bills', icon: FileText, label: 'Bills', color: 'from-orange-500 to-orange-600' },
    { path: '/invest', icon: TrendingUp, label: 'Invest', color: 'from-purple-500 to-purple-600' },
    { path: '/budgeting', icon: BarChart3, label: 'Budget', color: 'from-cyan-500 to-cyan-600' },
    { path: '/card-services', icon: CreditCard, label: 'Cards', color: 'from-pink-500 to-pink-600' },
  ];




  const handleNotificationClick = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* HEADER TOP BAR */}
      <header className="sticky top-0 bg-[#1a202c]/95 backdrop-blur-lg border-b border-[#2d3748]/40 shadow-lg z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center font-bold text-lg">
                M
              </div>
              <span className="text-xl font-bold text-white">MoneyFlex</span>
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Search placeholder (magnifying glass) */}
              <Search className="w-5 h-5 text-[#a0aec0] hover:text-white cursor-pointer" />

              
              {/* User Menu */}
              <div className="relative">
             <button>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex justify-center items-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="hidden sm:block text-white text-sm">John Doe</span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-[#2d3748] border border-[#4a5568] rounded-xl shadow-lg z-50">
                    {userMenuItems.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={idx}
                          onClick={item.action}
                          className={`flex items-center gap-3 w-full p-3 text-sm text-left hover:bg-[#1a202c] ${item.danger ? 'text-red-400' : 'text-white'}`}
                        >
                          <Icon className="w-5 h-5" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="lg:hidden p-2 text-gray-400 hover:text-white"
              >
                {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* DESKTOP NAVIGATION */}
      <nav
        className={`sticky top-16 z-40 transition-all duration-300 border-b
          ${isScrolled ? 'bg-[#1a202c]/95 backdrop-blur-lg border-[#2d3748]/50 shadow-lg' : 'bg-[#1a202c]/80 backdrop-blur-sm border-[#2d3748]/30'}
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          {/* Desktop Navigation Tabs */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm 
                  ${active ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-[#2d3748]/50'}`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                  {item.badge && <span className="ml-1 text-xs bg-red-500 px-1 rounded-full">{item.badge}</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {showMobileMenu && (
          <div className="lg:hidden p-4 space-y-3 border-t border-[#2d3748] bg-[#1a202c]">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="flex items-center gap-3 w-full text-left p-2 rounded hover:bg-[#2d3748]/60 text-white"
                >
                  <Icon className="w-5 h-5" /> {item.label}
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
