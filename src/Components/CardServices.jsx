import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation

// Example data for rewards (this can be fetched from an API)
const rewardsData = [
  {
    id: 1,
    name: "Travel Voucher",
    description: "Earn points and redeem for flights and hotel stays.",
    image: "/images/travel_voucher.jpg", // Path to an image
  },
  {
    id: 2,
    name: "Cashback on Dining",
    description: "Get 10% cashback on all restaurant purchases.",
    image: "/images/cashback_dining.jpg",
  },
  {
    id: 3,
    name: "Free Movie Tickets",
    description: "Redeem points for movie tickets every month.",
    image: "/images/movie_tickets.jpg",
  },
  {
    id: 4,
    name: "Shopping Discounts",
    description: "Enjoy 15% off at select stores and online retailers.",
    image: "/images/shopping_discounts.jpg",
  },
];

const CardServices = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [cardType, setCardType] = useState("Debit"); // Default to Debit
  const [cardLimit, setCardLimit] = useState(""); // Card limit input
  const [creditBalance, setCreditBalance] = useState(5000); // Example credit balance for Credit Cards
  const [paymentAmount, setPaymentAmount] = useState(""); // Payment amount input
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");
  const [services, setServices] = useState({
    cashback: false,
    rewards: false,
    travelBenefits: false,
    purchaseProtection: false,
  });

  // Handle Card Type Selection (Debit or Credit)
  const handleCardTypeChange = (e) => {
    setCardType(e.target.value);
  };

  // Handle Card Limit Input
  const handleLimitChange = (e) => {
    setCardLimit(e.target.value);
  };

  // Handle Credit Payment Input
  const handlePaymentChange = (e) => {
    setPaymentAmount(e.target.value);
  };

  // Handle Payment Method Change
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Handle Service Checkbox Change
  const handleServiceChange = (e) => {
    setServices({ ...services, [e.target.name]: e.target.checked });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can make API calls or update the state with the selected configuration
    console.log("Card Configuration Submitted:", {
      cardType,
      cardLimit,
      services,
    });
  };

  // Handle Payment Submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (paymentAmount > 0 && paymentAmount <= creditBalance) {
      setCreditBalance(creditBalance - paymentAmount);
      alert(`Payment of ₹${paymentAmount} successful! New balance: ₹${creditBalance - paymentAmount}`);
    } else {
      alert("Invalid payment amount.");
    }
  };

  // Back Navigation Function
  const handleBackClick = () => {
    navigate(-1); // This will take the user to the previous page
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <div className="container max-w-4xl p-10 bg-dark rounded-lg shadow-md w-full">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="mb-6 text-[#b4dbdc] text-lg"
        >
          &larr; Back
        </button>

        <h2 className="text-3xl font-bold mb-6 text-[#b4dbdc]">Card Services Configuration</h2>

        <form onSubmit={handleSubmit}>
          {/* Card Type Selection */}
          <div className="mb-6">
            <label className="block text-[#b4dbdc] text-lg">Select Card Type</label>
            <select
              value={cardType}
              onChange={handleCardTypeChange}
              className="w-full p-4 border border-[#08566e] rounded-md bg-[#08566e] text-[#b4dbdc] text-lg"
            >
              <option value="Debit">Debit Card</option>
              <option value="Credit">Credit Card</option>
            </select>
          </div>

          {/* Card Limit */}
          <div className="mb-6">
            <label className="block text-[#b4dbdc] text-lg">Set Card Limit</label>
            <input
              type="number"
              value={cardLimit}
              onChange={handleLimitChange}
              className="w-full p-4 border border-[#08566e] rounded-md bg-[#08566e] text-[#b4dbdc] text-lg"
              placeholder="Enter Limit"
              min="0"
              required
            />
          </div>

          {/* Card Services Options */}
          <div className="mb-6">
            <label className="block text-[#b4dbdc] text-lg">Select Additional Services</label>
            <div className="flex flex-col">
              <label className="flex items-center text-[#b4dbdc] text-lg">
                <input
                  type="checkbox"
                  name="cashback"
                  checked={services.cashback}
                  onChange={handleServiceChange}
                  className="mr-4 text-[#08566e]"
                />
                Cashback
              </label>
              <label className="flex items-center text-[#b4dbdc] text-lg">
                <input
                  type="checkbox"
                  name="rewards"
                  checked={services.rewards}
                  onChange={handleServiceChange}
                  className="mr-4 text-[#08566e]"
                />
                Rewards Program
              </label>
              <label className="flex items-center text-[#b4dbdc] text-lg">
                <input
                  type="checkbox"
                  name="travelBenefits"
                  checked={services.travelBenefits}
                  onChange={handleServiceChange}
                  className="mr-4 text-[#08566e]"
                />
                Travel Benefits
              </label>
              <label className="flex items-center text-[#b4dbdc] text-lg">
                <input
                  type="checkbox"
                  name="purchaseProtection"
                  checked={services.purchaseProtection}
                  onChange={handleServiceChange}
                  className="mr-4 text-[#08566e]"
                />
                Purchase Protection
              </label>
            </div>
          </div>

          {/* Credit Payment Option (For Credit Card Only) */}
          {cardType === "Credit" && (
            <div className="mb-6">
              <label className="block text-[#b4dbdc] text-lg">Credit Balance: ₹{creditBalance}</label>
              <label className="block text-[#b4dbdc] text-lg mt-4">Enter Payment Amount</label>
              <input
                type="number"
                value={paymentAmount}
                onChange={handlePaymentChange}
                className="w-full p-4 border border-[#08566e] rounded-md bg-[#08566e] text-[#b4dbdc] text-lg"
                placeholder="Enter amount to pay"
                min="0"
                required
              />

              <label className="block text-[#b4dbdc] text-lg mt-4">Payment Method</label>
              <select
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                className="w-full p-4 border border-[#08566e] rounded-md bg-[#08566e] text-[#b4dbdc] text-lg"
              >
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Wallet Transfer">Wallet Transfer</option>
              </select>

              <button
                onClick={handlePaymentSubmit}
                className="w-full bg-[#08566e] text-[#b4dbdc] p-4 rounded-md mt-6 text-xl"
              >
                Make Payment
              </button>
            </div>
          )}

          {/* Rewards Program (ScrollView with Images) */}
          {services.rewards && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#b4dbdc]">Rewards Program</h3>
              <div className="flex overflow-x-scroll space-x-6 mt-4">
                {rewardsData.map((reward) => (
                  <div key={reward.id} className="w-64 flex-shrink-0 bg-[#08566e] p-6 rounded-lg">
                    <img
                      src={reward.image}
                      alt={reward.name}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h4 className="text-lg font-medium text-[#b4dbdc]">{reward.name}</h4>
                    <p className="text-sm text-[#b4dbdc]">{reward.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#b4dbdc] text-[#08566e] p-4 rounded-md mt-6 text-xl"
          >
            Confirm Card Selection
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardServices;
