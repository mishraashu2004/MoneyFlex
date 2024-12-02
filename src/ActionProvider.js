class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    // Greeting Message
    greet() {
      const message = this.createChatBotMessage("Hello! How can I assist you today?");
      this.addMessageToState(message);
    }
  
    // Budgeting Assistance
    handleBudgeting() {
      const message = this.createChatBotMessage(
        "Here are your recent goals:\n" +
          "1. Vacation: ₹45000 saved out of ₹10,000 (45%)\n" +
          "2. Emergency Fund: ₹15,000 saved out of ₹30,000 (50%)\n" +
          "Would you like to set a new goal or get spending insights?"
      );
      this.addMessageToState(message);
    }
    
    handleGoals() {
        const message = this.createChatBotMessage(
          "Here are your recent goals:\n" +
          "1. Vacation: 45000 saved out of ₹10,000 (45%)\n"+
          "2. Car Purchase: ₹12,000 saved out of ₹50,000 (24%)\n"+
          "3. Emergency Fund: ₹15,000 saved out of ₹30,000 (50%)"
        );
        this.addMessageToState(message);
    }
      
  
    // Investment Assistance
    handleInvestments() {
      const message = this.createChatBotMessage(
        "Your portfolio:\n" +
          "- Stocks: ₹10,000 (+5% this week)\n" +
          "- Bonds: ₹4,000 (+1% this week)\n" +
          "- Crypto: ₹3,500 (-8% this week)\n" +
          "Would you like advice on diversifying?"
      );
      this.addMessageToState(message);
    }
  
    // Loan Assistance
    handleLoans() {
      const message = this.createChatBotMessage(
        "Your loan summary:\n" +
          "- Home Loan: ₹120,000 remaining at 3.5% interest\n" +
          "- Car Loan: ₹8,000 remaining at 6% interest\n" +
          "Would you like to calculate early repayment savings or check eligibility for new loans?"
      );
      this.addMessageToState(message);
    }
  
    // Account Details
    handleAccountDetails() {
      const message = this.createChatBotMessage(
        "bank: HDFC Bank, accountNumber: XXXX1234, balance: ₹50,000\n" +
        "bank: SBI Bank, accountNumber: XXXX5678, balance: ₹75,000\n" +
        "bank: ICICI Bank, accountNumber: XXXX9101, balance: ₹30,000" 
      );
      this.addMessageToState(message);
    }
    
    // Financial Tips
    handleFinancialTips() {
      const message = this.createChatBotMessage(
        "Top Financial Tips:\n" +
          "- Automate savings to grow your wealth.\n" +
          "- Cut unnecessary subscriptions.\n" +
          "- Invest 20% of your income into index funds.\n" +
          "Need personalized advice?"
      );
      this.addMessageToState(message);
    }
  
    // Real-Time Market Data
    handleMarketData() {
      const message = this.createChatBotMessage(
        "Here's the latest market data:\n" +
          "- S&P 500: +1.2% today\n" +
          "- Bitcoin: ₹28,500 (-2% today)\n" +
          "- Gold: ₹1,950 per ounce (+0.5% today)\n" +
          "Would you like to set up alerts for price changes?"
      );
      this.addMessageToState(message);
    }
  
    // Expense Categorization
    handleExpenseCategorization() {
      const message = this.createChatBotMessage(
        "Your recent expenses:\n" +
          "- Groceries: ₹300\n" +
          "- Dining Out: ₹150\n" +
          "- Entertainment: ₹200\n" +
          "Would you like to set spending limits for any category?"
      );
      this.addMessageToState(message);
    }
  
    // Default Response
    handleDefault() {
      const message = this.createChatBotMessage(
        "I'm sorry, I didn't understand that. Could you rephrase or ask something specific?"
      );
      this.addMessageToState(message);
    }
  
    // Add message to chatbot state
    addMessageToState(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  