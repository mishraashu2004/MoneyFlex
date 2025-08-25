import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiUser, 
  FiSettings, 
  FiDollarSign, 
  FiEye, 
  FiEyeOff,
  FiTrendingUp,
  FiTrendingDown,
  FiCreditCard,
  FiShield,
  FiHome,
  FiSend,
  FiFileText,
  FiPieChart,
  FiMoreHorizontal,
  FiPhone,
  FiZap,
  FiDroplet,
  FiWifi,
  FiCalendar,
  FiClock,
  FiArrowUpRight,
  FiArrowDownLeft
} from 'react-icons/fi';
import Navigation from './Navigation';

const AccountOverview = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [accountData, setAccountData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    balance: 125000.50,
    accountNumber: '****-****-**34-5678',
    memberSince: '2019'
  });

  const [recentActivities] = useState([
    {
      id: 1,
      type: 'debit',
      description: 'Mobile Recharge - Airtel',
      amount: 599.99,
      date: '2025-01-20T14:30:00',
      category: 'utilities',
      icon: FiPhone,
      status: 'completed'
    },
    {
      id: 2,
      type: 'debit',
      description: 'Electricity Bill - KSEB',
      amount: 1275.20,
      date: '2025-01-19T09:15:00',
      category: 'utilities',
      icon: FiZap,
      status: 'completed'
    },
    {
      id: 3,
      type: 'credit',
      description: 'Salary Credit - TechCorp',
      amount: 85000.00,
      date: '2025-01-18T10:00:00',
      category: 'income',
      icon: FiArrowDownLeft,
      status: 'completed'
    },
    {
      id: 4,
      type: 'debit',
      description: 'Water Bill - Municipal Corp',
      amount: 445.50,
      date: '2025-01-17T16:45:00',
      category: 'utilities',
      icon: FiDroplet,
      status: 'completed'
    },
    {
      id: 5,
      type: 'debit',
      description: 'Internet - Jio Fiber',
      amount: 999.00,
      date: '2025-01-16T12:20:00',
      category: 'utilities',
      icon: FiWifi,
      status: 'completed'
    }
  ]);

  const [quickStats] = useState({
    monthlySpending: 15420.50,
    monthlyIncome: 85000.00,
    savingsGoal: 50000.00,
    currentSavings: 32500.00
  });

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  const getTransactionIcon = (activity) => {
    const IconComponent = activity.icon;
    return (
      <div className={`transaction-icon ${activity.type === 'credit' ? 'credit' : 'debit'}`}>
        <IconComponent size={16} />
      </div>
    );
  };

  const savingsProgress = (quickStats.currentSavings / quickStats.savingsGoal) * 100;

  return (
    <div className="account-overview-container">
      {/* Enhanced Header */}
     
      
        <Navigation/>
     

      {/* Main Content */}
      <main className="main-content">
        {/* Account Balance Card */}
        <div className="balance-card">
          <div className="balance-header">
            <div>
              <h2 className="balance-title">Total Balance</h2>
              <p className="account-number">{accountData.accountNumber}</p>
            </div>
            <div className="balance-actions">
              <button 
                className="visibility-toggle"
                onClick={toggleBalanceVisibility}
                aria-label={showBalance ? 'Hide balance' : 'Show balance'}
              >
                {showBalance ? <FiEye size={20} /> : <FiEyeOff size={20} />}
              </button>
              <Link to="/settings" className="settings-link">
                <FiSettings size={20} />
              </Link>
            </div>
          </div>
          
          <div className="balance-amount">
            {showBalance ? (
              <span className="amount">{formatCurrency(accountData.balance)}</span>
            ) : (
              <span className="amount hidden">••••••••</span>
            )}
          </div>

          <div className="balance-footer">
            <div className="member-since">
              <FiShield size={14} />
              <span>Member since {accountData.memberSince}</span>
            </div>
            <div className="account-status">
              <div className="status-indicator active"></div>
              <span>Active</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="quick-stats-grid">
          <div className="stat-card income">
            <div className="stat-icon">
              <FiTrendingUp size={20} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Monthly Income</p>
              <p className="stat-value">{formatCurrency(quickStats.monthlyIncome)}</p>
            </div>
          </div>

          <div className="stat-card spending">
            <div className="stat-icon">
              <FiTrendingDown size={20} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Monthly Spending</p>
              <p className="stat-value">{formatCurrency(quickStats.monthlySpending)}</p>
            </div>
          </div>

          <div className="stat-card savings">
            <div className="stat-icon">
              <FiPieChart size={20} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Savings Goal</p>
              <p className="stat-value">{Math.round(savingsProgress)}% Complete</p>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${Math.min(savingsProgress, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="info-card">
          <div className="card-header">
            <h3 className="card-title">
              <FiUser size={20} />
              Account Information
            </h3>
          </div>
          <div className="info-grid">
            <div className="info-item">
              <label>Full Name</label>
              <value>{accountData.name}</value>
            </div>
            <div className="info-item">
              <label>Email Address</label>
              <value>{accountData.email}</value>
            </div>
            <div className="info-item">
              <label>Account Type</label>
              <value>Premium Savings</value>
            </div>
            <div className="info-item">
              <label>Last Login</label>
              <value>Today, 09:30 AM</value>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="activities-card">
          <div className="card-header">
            <h3 className="card-title">
              <FiClock size={20} />
              Recent Activities
            </h3>
            <Link to="/transactions" className="view-all-link">
              View All
            </Link>
          </div>
          
          <div className="activities-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-left">
                  {getTransactionIcon(activity)}
                  <div className="activity-details">
                    <p className="activity-description">{activity.description}</p>
                    <p className="activity-date">
                      <FiCalendar size={12} />
                      {formatDate(activity.date)}
                    </p>
                  </div>
                </div>
                <div className="activity-right">
                  <p className={`activity-amount ${activity.type}`}>
                    {activity.type === 'credit' ? '+' : '-'}{formatCurrency(activity.amount)}
                  </p>
                  <span className={`status-badge ${activity.status}`}>
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h3 className="section-title">Quick Actions</h3>
          <div className="actions-grid">
            <Link to="/transfer" className="action-button">
              <FiSend size={20} />
              <span>Transfer</span>
            </Link>
            <Link to="/bills" className="action-button">
              <FiFileText size={20} />
              <span>Pay Bills</span>
            </Link>
            <Link to="/card-services" className="action-button">
              <FiCreditCard size={20} />
              <span>Cards</span>
            </Link>
            <Link to="/invest" className="action-button">
              <FiTrendingUp size={20} />
              <span>Invest</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Enhanced Footer Navigation */}
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
      

      <style jsx>{`
        .account-overview-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          color: #e2e8f0;
        }

        .account-header {
          background: linear-gradient(135deg, #08566e, #0d7490);
          padding: 1.5rem 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .back-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #b4dbdc;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
          color: #b4dbdc;
        }

        .page-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          color: white;
        }

        .greeting {
          font-size: 0.9rem;
          color: #b4dbdc;
          margin: 0;
          opacity: 0.9;
        }

        .current-time {
          font-size: 0.875rem;
          color: #b4dbdc;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        .main-content {
          flex: 1;
          padding: 2rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .balance-card {
          background: linear-gradient(135deg, #2d3748, #4a5568);
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
        }

        .balance-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .balance-title {
          font-size: 1rem;
          color: #a0aec0;
          margin: 0 0 0.5rem 0;
          font-weight: 500;
        }

        .account-number {
          font-size: 0.875rem;
          color: #718096;
          margin: 0;
          font-family: 'Courier New', monospace;
        }

        .balance-actions {
          display: flex;
          gap: 1rem;
        }

        .visibility-toggle,
        .settings-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 10px;
          color: #b4dbdc;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .visibility-toggle:hover,
        .settings-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .balance-amount {
          margin-bottom: 1.5rem;
        }

        .amount {
          font-size: 2.5rem;
          font-weight: 700;
          color: #48bb78;
          display: block;
        }

        .amount.hidden {
          color: #a0aec0;
          font-family: monospace;
        }

        .balance-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .member-since,
        .account-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #a0aec0;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .status-indicator.active {
          background: #48bb78;
          box-shadow: 0 0 8px rgba(72, 187, 120, 0.5);
        }

        .quick-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: rgba(45, 55, 72, 0.8);
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          flex-shrink: 0;
        }

        .income .stat-icon {
          background: linear-gradient(135deg, #48bb78, #38a169);
          color: white;
        }

        .spending .stat-icon {
          background: linear-gradient(135deg, #f56565, #e53e3e);
          color: white;
        }

        .savings .stat-icon {
          background: linear-gradient(135deg, #4299e1, #3182ce);
          color: white;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #a0aec0;
          margin: 0 0 0.25rem 0;
        }

        .stat-value {
          font-size: 1.25rem;
          font-weight: 600;
          color: #e2e8f0;
          margin: 0;
        }

        .progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          margin-top: 0.5rem;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4299e1, #3182ce);
          border-radius: 2px;
          transition: width 0.5s ease;
        }

        .info-card,
        .activities-card {
          background: rgba(45, 55, 72, 0.8);
          border-radius: 16px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .card-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.25rem;
          font-weight: 600;
          color: #e2e8f0;
          margin: 0;
        }

        .view-all-link {
          color: #4299e1;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .view-all-link:hover {
          color: #63b3ed;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .info-item label {
          font-size: 0.875rem;
          color: #a0aec0;
          font-weight: 500;
        }

        .info-item value {
          font-size: 1rem;
          color: #e2e8f0;
          font-weight: 500;
        }

        .activities-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .activity-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .activity-item:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(4px);
        }

        .activity-left {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }

        .transaction-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          flex-shrink: 0;
        }

        .transaction-icon.credit {
          background: linear-gradient(135deg, #48bb78, #38a169);
          color: white;
        }

        .transaction-icon.debit {
          background: linear-gradient(135deg, #ed8936, #dd6b20);
          color: white;
        }

        .activity-description {
          font-size: 1rem;
          font-weight: 500;
          color: #e2e8f0;
          margin: 0 0 0.25rem 0;
        }

        .activity-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #a0aec0;
          margin: 0;
        }

        .activity-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
        }

        .activity-amount {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }

        .activity-amount.credit {
          color: #48bb78;
        }

        .activity-amount.debit {
          color: #f56565;
        }

        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        .status-badge.completed {
          background: rgba(72, 187, 120, 0.2);
          color: #48bb78;
          border: 1px solid rgba(72, 187, 120, 0.3);
        }

        .quick-actions {
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #e2e8f0;
          margin: 0 0 1rem 0;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
        }

        .action-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem 1rem;
          background: rgba(45, 55, 72, 0.8);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .action-button:hover {
          background: rgba(66, 153, 225, 0.2);
          border-color: rgba(66, 153, 225, 0.3);
          transform: translateY(-2px);
          color: #4299e1;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .bottom-navigation {
          background: linear-gradient(135deg, #08566e, #0d7490);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 0;
          backdrop-filter: blur(10px);
        }

        .nav-container {
          display: flex;
          justify-content: space-around;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: #b4dbdc;
          text-decoration: none;
          padding: 0.5rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          min-width: 60px;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transform: translateY(-2px);
        }

        .nav-item span {
          font-size: 0.75rem;
          font-weight: 500;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .main-content {
            padding: 1rem;
          }

          .balance-card {
            padding: 1.5rem;
          }

          .amount {
            font-size: 2rem;
          }

          .quick-stats-grid {
            grid-template-columns: 1fr;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .actions-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .activity-item {
            padding: 0.75rem;
          }

          .activity-left {
            gap: 0.75rem;
          }

          .header-content {
            padding: 0;
          }

          .nav-item span {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 480px) {
          .balance-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .balance-actions {
            align-self: flex-end;
          }

          .activity-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .activity-right {
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default AccountOverview;