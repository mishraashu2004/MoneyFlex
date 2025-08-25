import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Navigation from './Components/Navigation';
import FinancialOverview from './Components/FinancialOverview';
import QuickActions from './Components/QuickActions';
import FeaturedProducts from './Components/FeaturedProducts';
import FinancialNews from './Components/FinancialNews';

import GeminiChatBot from './ChatBot';
import './Chatbot.css';

// Enhanced Loading Component
const LoadingSpinner = ({ message = "Loading your financial dashboard..." }) => (
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#1a202c] to-[#2d3748] text-[#b4dbdc]">
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#b4dbdc] opacity-75"></div>
        <div className="animate-ping absolute top-0 left-0 rounded-full h-16 w-16 border-2 border-[#b4dbdc] opacity-25"></div>
      </div>
      <p className="text-[#a0aec0] text-sm animate-pulse">{message}</p>
    </div>
  </div>
);

// Enhanced Status Indicator Component
const StatusIndicator = ({ status = 'operational', customMessage }) => {
  const statusConfig = {
    operational: { color: 'bg-green-400', text: 'All systems operational', pulse: true },
    maintenance: { color: 'bg-yellow-400', text: 'Under maintenance', pulse: false },
    error: { color: 'bg-red-400', text: 'Some services unavailable', pulse: false }
  };

  const config = statusConfig[status] || statusConfig.operational;
  
  return (
    <div className="flex items-center space-x-2 text-sm text-[#a0aec0]">
      <div className={`w-2 h-2 ${config.color} rounded-full ${config.pulse ? 'animate-pulse' : ''}`}></div>
      <span>{customMessage || config.text}</span>
    </div>
  );
};

// Enhanced Quick Stats Component
const QuickStatsCard = ({ title, value, change, changeType, icon }) => {
  const getChangeColor = () => {
    if (changeType === 'positive') return 'text-green-400';
    if (changeType === 'negative') return 'text-red-400';
    return 'text-yellow-400';
  };

  return (
    <div className="group text-center p-4 rounded-lg bg-[#1a202c]/30 hover:bg-[#1a202c]/50 transition-all duration-300 hover:scale-105 cursor-pointer border border-transparent hover:border-[#4a5568]/50">
      {icon && (
        <div className="flex justify-center mb-2">
          <div className="w-8 h-8 rounded-full bg-[#4a5568] flex items-center justify-center text-[#b4dbdc] group-hover:bg-[#5a6578] transition-colors">
            {icon}
          </div>
        </div>
      )}
      <div className="text-lg sm:text-xl font-bold text-[#b4dbdc] mb-1">{value}</div>
      <div className="text-xs text-[#a0aec0] mb-1">{title}</div>
      {change && (
        <div className={`text-xs font-medium ${getChangeColor()}`}>
          {changeType === 'positive' ? '↗' : changeType === 'negative' ? '↘' : '→'} {change}
        </div>
      )}
    </div>
  );
};

// Enhanced Progress Bar Component
const ProgressBar = ({ current, max, label, sublabel, color = 'green' }) => {
  const percentage = (current / max) * 100;
  const colorMap = {
    green: 'bg-green-400',
    yellow: 'bg-yellow-400',
    blue: 'bg-blue-400',
    red: 'bg-red-400',
    purple: 'bg-purple-400'
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-[#a0aec0]">{label}</span>
        <span className="text-[#b4dbdc] font-medium">${current.toLocaleString()} / ${max.toLocaleString()}</span>
      </div>
      <div className="relative">
        <div className="w-full bg-[#4a5568] rounded-full h-3 overflow-hidden">
          <div 
            className={`${colorMap[color]} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </div>
        </div>
        {percentage >= 90 && (
          <div className="absolute -top-8 right-0 text-xs text-yellow-400 animate-bounce">
            Almost there! 🎯
          </div>
        )}
      </div>
      {sublabel && (
        <div className="text-xs text-[#718096]">{sublabel}</div>
      )}
    </div>
  );
};

// Enhanced Activity Item Component
const ActivityItem = ({ description, amount, date, type, category }) => {
  const isPositive = amount > 0;
  const categoryColors = {
    food: 'bg-orange-500',
    salary: 'bg-green-500',
    shopping: 'bg-blue-500',
    entertainment: 'bg-purple-500',
    transport: 'bg-yellow-500',
    default: 'bg-gray-500'
  };

  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#1a202c]/30 transition-all duration-200 group">
      <div className={`w-3 h-3 rounded-full ${categoryColors[category] || categoryColors.default} flex-shrink-0`}></div>
      <div className="flex-grow min-w-0">
        <div className="text-sm text-[#b4dbdc] truncate group-hover:text-white transition-colors">
          {description}
        </div>
        {date && (
          <div className="text-xs text-[#718096]">
            {new Date(date).toLocaleDateString()}
          </div>
        )}
      </div>
      <div className={`text-sm font-medium flex-shrink-0 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {isPositive ? '+' : ''}${Math.abs(amount).toLocaleString()}
      </div>
    </div>
  );
};

const HomePage = () => {
  // Enhanced state management
  const [userData, setUserData] = useState({
    name: 'User',
    totalBalance: 12450,
    monthlyChange: 5.2,
    activeGoals: 3,
    savings: 2340
  });
  
  const [systemStatus, setSystemStatus] = useState('operational');
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [notifications, setNotifications] = useState([]);

  // Enhanced data with more realistic financial information
  const [financialData, setFinancialData] = useState({
    recentTransactions: [
      { id: 1, description: 'Morning Coffee', amount: -4.50, date: new Date(), type: 'expense', category: 'food' },
      { id: 2, description: 'Monthly Salary', amount: 3200, date: new Date(Date.now() - 86400000), type: 'income', category: 'salary' },
      { id: 3, description: 'Grocery Shopping', amount: -85.30, date: new Date(Date.now() - 172800000), type: 'expense', category: 'shopping' },
      { id: 4, description: 'Netflix Subscription', amount: -15.99, date: new Date(Date.now() - 259200000), type: 'expense', category: 'entertainment' },
      { id: 5, description: 'Uber Ride', amount: -12.45, date: new Date(Date.now() - 345600000), type: 'expense', category: 'transport' }
    ],
    budgets: [
      { category: 'Food & Dining', current: 450, max: 600, color: 'green' },
      { category: 'Entertainment', current: 280, max: 300, color: 'yellow' },
      { category: 'Transportation', current: 120, max: 250, color: 'blue' },
      { category: 'Shopping', current: 890, max: 800, color: 'red' }
    ],
    goals: [
      { name: 'Vacation Fund', current: 1200, target: 3000, color: 'blue' },
      { name: 'Emergency Fund', current: 4500, target: 5000, color: 'green' },
      { name: 'New Car', current: 2300, target: 8000, color: 'purple' }
    ]
  });

  // Enhanced data fetching with error handling
  const fetchUserData = useCallback(async () => {
    try {
      setIsLoading(true);
      // Simulate API call with random delay
      const delay = Math.random() * 1000 + 500;
      
      await new Promise(resolve => setTimeout(resolve, delay));
      
      // Simulate potential API failure
      if (Math.random() < 0.1) {
        throw new Error('Network error');
      }
      
      // Update user data with slight variations
      setUserData(prev => ({
        ...prev,
        name: 'John Doe',
        totalBalance: prev.totalBalance + (Math.random() - 0.5) * 100,
        monthlyChange: prev.monthlyChange + (Math.random() - 0.5) * 2
      }));
      
      setSystemStatus('operational');
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      setSystemStatus('error');
      setNotifications(prev => [...prev, {
        id: Date.now(),
        type: 'error',
        message: 'Failed to load some data. Please refresh.',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Enhanced time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Enhanced user data fetching
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData, refreshTrigger]);

  // Auto-dismiss notifications
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications(prev => prev.slice(0, -1));
    }, 5000);

    return () => clearTimeout(timer);
  }, [notifications]);

  // Enhanced greeting function
  const getGreeting = useMemo(() => {
    const hour = currentTime.getHours();
    const greetings = {
      morning: { text: 'Good Morning', emoji: '🌅', time: 'morning' },
      afternoon: { text: 'Good Afternoon', emoji: '☀️', time: 'afternoon' },
      evening: { text: 'Good Evening', emoji: '🌙', time: 'evening' },
      night: { text: 'Working Late', emoji: '🌙', time: 'night' }
    };

    if (hour < 6) return greetings.night;
    if (hour < 12) return greetings.morning;
    if (hour < 17) return greetings.afternoon;
    if (hour < 22) return greetings.evening;
    return greetings.night;
  }, [currentTime]);

  // Enhanced refresh handler
  const handleRefresh = useCallback(() => {
    setRefreshTrigger(prev => prev + 1);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'r':
            e.preventDefault();
            handleRefresh();
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleRefresh]);

  if (isLoading) {
    return <LoadingSpinner message="Loading your financial dashboard..." />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#1a202c] to-[#2d3748] text-[#b4dbdc] relative">
      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {notifications.slice(-3).map(notification => (
            <div 
              key={notification.id}
              className={`p-3 rounded-lg shadow-lg border animate-slide-in-right ${
                notification.type === 'error' 
                  ? 'bg-red-900/90 border-red-600 text-red-100' 
                  : 'bg-green-900/90 border-green-600 text-green-100'
              }`}
            >
              <div className="text-sm font-medium">{notification.message}</div>
            </div>
          ))}
        </div>
      )}

      
      
      {/* Navigation */}
      <Navigation />

      {/* Account Selector */}
      <div className="sticky top-0 z-40 bg-[#1a202c]/80 backdrop-blur-md border-b border-[#2d3748]">
        
      </div>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Enhanced Welcome Section */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div className="flex-grow">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#b4dbdc] to-[#a0c4ff] bg-clip-text text-transparent">
                  {getGreeting.text}, {userData.name}
                </h1>
                <span className="text-2xl animate-bounce" role="img" aria-label={getGreeting.time}>
                  {getGreeting.emoji}
                </span>
              </div>
              <p className="text-[#a0aec0] text-sm sm:text-base mb-2">
                {currentTime.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-[#718096] text-xs">
                Last updated: {currentTime.toLocaleTimeString()}
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex flex-col space-y-2">
              <StatusIndicator status={systemStatus} />
              <button
                onClick={handleRefresh}
                className="text-sm text-[#a0c4ff] hover:text-[#b4dbdc] transition-colors duration-200 flex items-center space-x-1"
                title="Refresh data (Ctrl+R)"
              >
                <span>🔄</span>
                <span>Refresh</span>
              </button>
            </div>
          </div>
          
          {/* Enhanced Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#2d3748]/50 backdrop-blur-sm rounded-xl border border-[#4a5568]/30 shadow-xl">
            <QuickStatsCard
              title="Total Balance"
              value={`$${userData.totalBalance.toLocaleString()}`}
              change="vs last month"
              changeType="positive"
              icon="💰"
            />
            <QuickStatsCard
              title="This Month"
              value={`+${userData.monthlyChange.toFixed(1)}%`}
              change="growth rate"
              changeType="positive"
              icon="📈"
            />
            <QuickStatsCard
              title="Active Goals"
              value={userData.activeGoals}
              change="2 near completion"
              changeType="neutral"
              icon="🎯"
            />
            <QuickStatsCard
              title="Total Savings"
              value={`$${userData.savings.toLocaleString()}`}
              change="+$125 this week"
              changeType="positive"
              icon="🏦"
            />
          </div>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div className="xl:col-span-2 order-1">
            <div className="h-full">
              <FinancialOverview />
            </div>
          </div>

          <div className="xl:col-span-1 order-2">
            <div className="h-full">
              <QuickActions />
            </div>
          </div>
        </div>

        {/* Secondary Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div className="lg:col-span-1">
            <FeaturedProducts />
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#2d3748]/50 backdrop-blur-sm rounded-xl border border-[#4a5568]/30 p-6 h-full">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#b4dbdc] flex items-center space-x-2">
                <span>📊</span>
                <span>Market Updates</span>
              </h2>
              <FinancialNews />
            </div>
          </div>
        </div>

        {/* Enhanced ChatBot Section */}
        <div className="mb-8 sm:mb-10">
          <div className="bg-[#2d3748]/30 backdrop-blur-sm rounded-xl border border-[#4a5568]/30 p-6 hover:border-[#4a5568]/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#b4dbdc] flex items-center space-x-2">
                <span>🤖</span>
                <span>AI Financial Assistant</span>
              </h2>
              <StatusIndicator status="operational" customMessage="Online & Ready" />
            </div>
            <GeminiChatBot />
          </div>
        </div>

        {/* Enhanced Additional Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Enhanced Recent Transactions */}
          <div className="bg-[#2d3748]/50 backdrop-blur-sm rounded-xl border border-[#4a5568]/30 p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#b4dbdc] flex items-center space-x-2">
                <span>💳</span>
                <span>Recent Activity</span>
              </h3>
              <button className="text-xs text-[#a0c4ff] hover:text-[#b4dbdc] transition-colors">
                View All
              </button>
            </div>
            <div className="space-y-1 max-h-64 overflow-y-auto">
              {financialData.recentTransactions.map(transaction => (
                <ActivityItem key={transaction.id} {...transaction} />
              ))}
            </div>
          </div>

          {/* Enhanced Budget Overview */}
          <div className="bg-[#2d3748]/50 backdrop-blur-sm rounded-xl border border-[#4a5568]/30 p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#b4dbdc] flex items-center space-x-2">
                <span>📋</span>
                <span>Budget Status</span>
              </h3>
              <button className="text-xs text-[#a0c4ff] hover:text-[#b4dbdc] transition-colors">
                Manage
              </button>
            </div>
            <div className="space-y-4">
              {financialData.budgets.map((budget, index) => (
                <ProgressBar
                  key={index}
                  label={budget.category}
                  current={budget.current}
                  max={budget.max}
                  color={budget.color}
                  sublabel={`${((budget.current / budget.max) * 100).toFixed(0)}% of monthly limit`}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Goals Progress */}
          <div className="bg-[#2d3748]/50 backdrop-blur-sm rounded-xl border border-[#4a5568]/30 p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#b4dbdc] flex items-center space-x-2">
                <span>🎯</span>
                <span>Savings Goals</span>
              </h3>
              <button className="text-xs text-[#a0c4ff] hover:text-[#b4dbdc] transition-colors">
                + New Goal
              </button>
            </div>
            <div className="space-y-4">
              {financialData.goals.map((goal, index) => (
                <ProgressBar
                  key={index}
                  label={goal.name}
                  current={goal.current}
                  max={goal.target}
                  color={goal.color}
                  sublabel={`$${(goal.target - goal.current).toLocaleString()} remaining`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-[#08566e] to-[#0d7490] text-white shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0">
              <p className="text-sm flex items-center space-x-2">
                <span>&copy; {currentTime.getFullYear()} MoneyFlex App. All rights reserved.</span>
                <span className="text-[#a0c4ff]">•</span>
                <span className="text-xs text-[#b4dbdc]">v2.1.0</span>
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="hover:text-[#b4dbdc] transition-colors duration-200 flex items-center space-x-1">
                <span>🔒</span>
                <span>Privacy</span>
              </a>
              <a href="#" className="hover:text-[#b4dbdc] transition-colors duration-200 flex items-center space-x-1">
                <span>📄</span>
                <span>Terms</span>
              </a>
              <a href="#" className="hover:text-[#b4dbdc] transition-colors duration-200 flex items-center space-x-1">
                <span>💬</span>
                <span>Support</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;