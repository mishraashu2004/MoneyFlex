import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  CreditCard, 
  Wallet, 
  Shield, 
  Bell, 
  Eye, 
  EyeOff, 
  Edit3, 
  ChevronRight, 
  Plus,
  Check,
  Star,
  Building,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Profile = () => {
  const [selectedAccount, setSelectedAccount] = useState('primary');
  const [showBalance, setShowBalance] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // Mock user data
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, New York, NY 10001',
    memberSince: '2021',
    profileImage: null,
    verificationLevel: 'Verified'
  };

  // Mock accounts data
  const accounts = [
    {
      id: 'primary',
      name: 'Primary Checking',
      type: 'Checking',
      balance: 12450.75,
      accountNumber: '****1234',
      bank: 'MoneyFlex Bank',
      isDefault: true,
      status: 'Active',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'savings',
      name: 'High Yield Savings',
      type: 'Savings',
      balance: 25680.90,
      accountNumber: '****5678',
      bank: 'MoneyFlex Bank',
      isDefault: false,
      status: 'Active',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'investment',
      name: 'Investment Account',
      type: 'Investment',
      balance: 45230.25,
      accountNumber: '****9012',
      bank: 'MoneyFlex Investments',
      isDefault: false,
      status: 'Active',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'business',
      name: 'Business Account',
      type: 'Business',
      balance: 8750.30,
      accountNumber: '****3456',
      bank: 'MoneyFlex Business',
      isDefault: false,
      status: 'Active',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const menuItems = [
    {
      icon: Settings,
      title: 'Account Settings',
      description: 'Manage your preferences',
      color: 'text-gray-400'
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Two-factor auth, passwords',
      color: 'text-green-400'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Customize your alerts',
      color: 'text-blue-400'
    },
    {
      icon: CreditCard,
      title: 'Payment Methods',
      description: 'Cards and bank accounts',
      color: 'text-purple-400'
    }
  ];

  const handleAccountSelect = (accountId) => {
    setSelectedAccount(accountId);
  };

  const getSelectedAccount = () => {
    return accounts.find(acc => acc.id === selectedAccount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a202c] to-[#2d3748] text-[#b4dbdc] p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Profile Header */}
        <div className="bg-[#2d3748]/50 backdrop-blur-sm rounded-2xl border border-[#4a5568]/30 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Profile Image */}
            <div className="relative group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {userProfile.profileImage ? (
                  <img src={userProfile.profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
                ) : (
                  userProfile.name.split(' ').map(n => n[0]).join('')
                )}
              </div>
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-lg">
                <Edit3 className="w-4 h-4" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">{userProfile.name}</h1>
                <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                  <Check className="w-3 h-3" />
                  {userProfile.verificationLevel}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-[#a0aec0]">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {userProfile.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {userProfile.phone}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#a0aec0]">
                <MapPin className="w-4 h-4" />
                {userProfile.address}
              </div>
              <div className="flex items-center gap-2 text-sm text-[#718096]">
                <Star className="w-4 h-4 text-yellow-400" />
                Member since {userProfile.memberSince}
              </div>
            </div>
          </div>
        </div>

        {/* Account Selector */}
        <div className="bg-[#2d3748]/50 backdrop-blur-sm rounded-2xl border border-[#4a5568]/30 p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Your Accounts</h2>
              <p className="text-[#a0aec0]">Select an account to view details and manage settings</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-medium transition-colors">
              <Plus className="w-4 h-4" />
              Add Account
            </button>
          </div>

          {/* Account Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {accounts.map((account) => (
              <div
                key={account.id}
                onClick={() => handleAccountSelect(account.id)}
                className={`
                  relative p-5 rounded-xl border cursor-pointer transition-all duration-300 group
                  ${selectedAccount === account.id
                    ? 'bg-gradient-to-br ' + account.color + ' border-transparent shadow-lg transform scale-105'
                    : 'bg-[#1a202c]/30 border-[#4a5568]/30 hover:border-[#4a5568]/50 hover:bg-[#1a202c]/50'
                  }
                `}
              >
                {/* Default Account Badge */}
                {account.isDefault && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                )}

                {/* Selection Indicator */}
                {selectedAccount === account.id && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`
                      p-2 rounded-lg 
                      ${selectedAccount === account.id 
                        ? 'bg-white/20' 
                        : 'bg-[#4a5568]/30 group-hover:bg-[#4a5568]/50'
                      }
                    `}>
                      <Wallet className={`
                        w-5 h-5 
                        ${selectedAccount === account.id ? 'text-white' : 'text-[#a0aec0]'}
                      `} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`
                        font-semibold text-sm 
                        ${selectedAccount === account.id ? 'text-white' : 'text-[#b4dbdc]'}
                      `}>
                        {account.name}
                      </h3>
                      <p className={`
                        text-xs 
                        ${selectedAccount === account.id ? 'text-white/70' : 'text-[#a0aec0]'}
                      `}>
                        {account.type} • {account.accountNumber}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className={`
                        text-xs 
                        ${selectedAccount === account.id ? 'text-white/70' : 'text-[#a0aec0]'}
                      `}>
                        Balance
                      </span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowBalance(!showBalance);
                        }}
                        className={`
                          p-1 rounded 
                          ${selectedAccount === account.id ? 'hover:bg-white/10' : 'hover:bg-[#4a5568]/30'}
                        `}
                      >
                        {showBalance ? (
                          <Eye className="w-3 h-3" />
                        ) : (
                          <EyeOff className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                    <p className={`
                      font-bold text-lg 
                      ${selectedAccount === account.id ? 'text-white' : 'text-[#b4dbdc]'}
                    `}>
                      {showBalance ? `${account.balance.toLocaleString()}` : '••••••'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className={`
                      text-xs font-medium
                      ${selectedAccount === account.id ? 'text-white/70' : 'text-[#a0aec0]'}
                    `}>
                      {account.bank}
                    </span>
                    <span className={`
                      px-2 py-1 rounded-full text-xs font-medium
                      ${account.status === 'Active' 
                        ? selectedAccount === account.id 
                          ? 'bg-white/20 text-white' 
                          : 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                      }
                    `}>
                      {account.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Account Details */}
          {selectedAccount && (
            <div className="bg-[#1a202c]/30 rounded-xl p-6 border border-[#4a5568]/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">
                  {getSelectedAccount().name} Details
                </h3>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  View Statements
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-[#a0aec0]">Account Type</span>
                  <p className="text-white font-medium">{getSelectedAccount().type}</p>
                </div>
                <div>
                  <span className="text-[#a0aec0]">Account Number</span>
                  <p className="text-white font-medium">{getSelectedAccount().accountNumber}</p>
                </div>
                <div>
                  <span className="text-[#a0aec0]">Bank</span>
                  <p className="text-white font-medium">{getSelectedAccount().bank}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Settings Menu */}
        <div className="bg-[#2d3748]/50 backdrop-blur-sm rounded-2xl border border-[#4a5568]/30 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Account Management</h2>
          
          <div className="space-y-3">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  className="w-full flex items-center gap-4 p-4 bg-[#1a202c]/30 hover:bg-[#1a202c]/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-[#4a5568]/30"
                >
                  <div className="p-3 rounded-lg bg-[#4a5568]/30 group-hover:bg-[#4a5568]/50 transition-colors">
                    <IconComponent className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#a0aec0]">{item.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#a0aec0] group-hover:text-blue-400 transition-colors" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#2d3748]/50 backdrop-blur-sm rounded-2xl border border-[#4a5568]/30 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Building className="w-6 h-6 mx-auto mb-2" />
              Switch Bank
            </button>
            <button className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Shield className="w-6 h-6 mx-auto mb-2" />
              Security Center
            </button>
            <button className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Bell className="w-6 h-6 mx-auto mb-2" />
              Manage Alerts
            </button>
            <button className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Settings className="w-6 h-6 mx-auto mb-2" />
              Preferences
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;