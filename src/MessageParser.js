class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      // Greetings
      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        this.actionProvider.greet();
      }
  
      // Budgeting Assistance
      else if (
        lowerCaseMessage.includes("budget") ||
        lowerCaseMessage.includes("spending") 
      ) {
        this.actionProvider.handleBudgeting();
      }
      //Goals
      else if (
        lowerCaseMessage.includes("goal")
      ) {
        this.actionProvider.handleGoals();
      }
      // Investment Assistance
      else if (
        lowerCaseMessage.includes("invest") ||
        lowerCaseMessage.includes("investment") ||
        lowerCaseMessage.includes("portfolio")
      ) {
        this.actionProvider.handleInvestments();
      }
      
      // Loan Assistance
      else if (
        lowerCaseMessage.includes("loan") ||
        lowerCaseMessage.includes("credit") ||
        lowerCaseMessage.includes("borrow")
      ) {
        this.actionProvider.handleLoans();
      }
  
      // Account Details
      else if (
        lowerCaseMessage.includes("account") ||
        lowerCaseMessage.includes("balance") ||
        lowerCaseMessage.includes("transactions")
      ) {
        this.actionProvider.handleAccountDetails();
      }
  
      // Financial Tips
      else if (
        lowerCaseMessage.includes("tips") ||
        lowerCaseMessage.includes("save") ||
        lowerCaseMessage.includes("advice")
      ) {
        this.actionProvider.handleFinancialTips();
      }
  
      // Real-Time Market Data
      else if (
        lowerCaseMessage.includes("stock") ||
        lowerCaseMessage.includes("market") ||
        lowerCaseMessage.includes("crypto")
      ) {
        this.actionProvider.handleMarketData();
      }
      //Accountdetails
      else if (
        lowerCaseMessage.includes("account") ||
        lowerCaseMessage.includes("account details") 
        
      ) {
        this.actionProvider.handleAccountDetails();
      }
      // Expense Categorization
      else if (
        lowerCaseMessage.includes("expenses") ||
        lowerCaseMessage.includes("categories")
      ) {
        this.actionProvider.handleExpenseCategorization();
      }
  
      // Default Case
      else {
        this.actionProvider.handleDefault();
      }
    }
  }
  
  export default MessageParser;
  