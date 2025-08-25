import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Bell, 
  User, 
  Menu,
  X,
  Settings,
  LogOut,
  CreditCard,
  Shield,
  MessageSquare,
  Moon,
  Sun
} from 'lucide-react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Payment Received', message: 'You received ₹5,000 from John Doe', time: '2 min ago', unread: true },
    { id: 2, title: 'Bill Reminder', message: 'Electricity bill due tomorrow', time: '1 hour ago', unread: true },
    { id: 3, title: 'Investment Update', message: 'Your SIP has been processed', time: '3 hours ago', unread: false }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const unreadCount = notifications.filter(n => n.unread).length;

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Handle search logic here
    }
  };

  const handleNotificationClick = (notificationId) => {
    setNotifications(prev => 
      prev.map(n => n.id === notificationId ? { ...n, unread: false } : n)
    );
  };

  const handleAccountOverview = () => {
    setShowUserMenu(false);
    // Navigate to account page
    window.location.hash = '/account';
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, you'd save this to localStorage or context
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const userMenuItems = [
    { icon: User, label: 'Profile', action: handleAccountOverview },
    { icon: CreditCard, label: 'My Cards', action: () => window.location.hash = '/cards' },
    { icon: Shield, label: 'Security', action: () => window.location.hash = '/security' },
    { icon: Settings, label: 'Settings', action: () => window.location.hash = '/settings' },
    { icon: MessageSquare, label: 'Support', action: () => window.location.hash = '/support' },
    { icon: LogOut, label: 'Sign Out', action: () => console.log('Logout'), danger: true }
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setShowMobileMenu(false)}
        />
      )}

      <header className="sticky top-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl border-b border-slate-700 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo and Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowMobileMenu(true)}
                className="lg:hidden p-2 hover:bg-slate-700 rounded-xl transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center font-bold text-lg">
                  M
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    MoneyFlex
                  </h1>
                  <div className="text-xs text-slate-400 hidden sm:block">
                    {formatTime(currentTime)}
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar - Hidden on mobile, shown on tablet+ */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="w-full relative">
                <div className={`
                  flex items-center bg-slate-800 border-2 rounded-2xl transition-all duration-300
                  ${searchFocused 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                    : 'border-slate-600 hover:border-slate-500'
                  }
                `}>
                  <div className="pl-4 pr-2">
                    <Search className={`w-5 h-5 transition-colors ${searchFocused ? 'text-blue-400' : 'text-slate-400'}`} />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                    className="flex-1 bg-transparent border-0 py-3 px-2 text-white placeholder-slate-400 focus:outline-none"
                    placeholder="Search transactions, contacts, bills..."
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="pr-4 pl-2 hover:text-slate-300 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-3 hover:bg-slate-700 rounded-xl transition-all duration-200 transform hover:scale-105"
                title="Toggle Theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-300" />
                )}
              </button>

              {/* Mobile Search */}
              <button
                className="md:hidden p-3 hover:bg-slate-700 rounded-xl transition-all duration-200 transform hover:scale-105"
                title="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-3 hover:bg-slate-700 rounded-xl transition-all duration-200 transform hover:scale-105"
                  title="Notifications"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{unreadCount}</span>
                    </div>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-slate-800 border border-slate-600 rounded-2xl shadow-2xl z-50">
                    <div className="p-4 border-b border-slate-600">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-white">Notifications</h3>
                        <span className="text-sm text-slate-400">{unreadCount} unread</span>
                      </div>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          onClick={() => handleNotificationClick(notification.id)}
                          className={`p-4 border-b border-slate-600 last:border-0 hover:bg-slate-700 cursor-pointer transition-colors ${
                            notification.unread ? 'bg-slate-750' : ''
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${notification.unread ? 'bg-blue-500' : 'bg-transparent'}`} />
                            <div className="flex-1">
                              <h4 className="font-medium text-white text-sm">{notification.title}</h4>
                              <p className="text-slate-400 text-xs mt-1">{notification.message}</p>
                              <span className="text-slate-500 text-xs">{notification.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t border-slate-600">
                      <button className="w-full text-center text-sm text-blue-400 hover:text-blue-300 transition-colors">
                        View All Notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 p-2 hover:bg-slate-700 rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="hidden lg:block text-left">
                    <div className="text-sm font-medium text-white">John Doe</div>
                    <div className="text-xs text-slate-400">Premium Member</div>
                  </div>
                </button>

                {/* User Menu Dropdown */}
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-slate-800 border border-slate-600 rounded-2xl shadow-2xl z-50">
                    <div className="p-4 border-b border-slate-600">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">John Doe</div>
                          <div className="text-sm text-slate-400">john@example.com</div>
                          <div className="text-xs text-blue-400">Premium Member</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      {userMenuItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <button
                            key={index}
                            onClick={item.action}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-left ${
                              item.danger 
                                ? 'hover:bg-red-500/10 text-red-400' 
                                : 'hover:bg-slate-700 text-white'
                            }`}
                          >
                            <IconComponent className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Sidebar */}
        {showMobileMenu && (
          <div className="fixed top-0 left-0 w-80 h-full bg-slate-900 border-r border-slate-700 z-50 lg:hidden">
            <div className="p-4 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center font-bold text-lg">
                    M
                  </div>
                  <h2 className="text-xl font-bold text-white">MoneyFlex</h2>
                </div>
                <button
                  onClick={() => setShowMobileMenu(false)}
                  className="p-2 hover:bg-slate-700 rounded-xl"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
            
            {/* Mobile Search */}
            <div className="p-4 border-b border-slate-700">
              <div className="flex items-center bg-slate-800 border border-slate-600 rounded-xl">
                <div className="pl-4 pr-2">
                  <Search className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                  className="flex-1 bg-transparent border-0 py-3 px-2 text-white placeholder-slate-400 focus:outline-none"
                  placeholder="Search..."
                />
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="p-4">
              {userMenuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      item.action();
                      setShowMobileMenu(false);
                    }}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl transition-colors text-left mb-2 ${
                      item.danger 
                        ? 'hover:bg-red-500/10 text-red-400' 
                        : 'hover:bg-slate-700 text-white'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Click outside handlers */}
      {(showNotifications || showUserMenu) && (
        <div 
          className="fixed inset-0 z-20"
          onClick={() => {
            setShowNotifications(false);
            setShowUserMenu(false);
          }}
        />
      )}
    </>
  );
};

export default Header;