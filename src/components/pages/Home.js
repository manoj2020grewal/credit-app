import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome to our website!</h1>
        <p className="text-lg text-gray-700">Welcome to InstapayCash, where you can access your credit card funds effortlessly. This premier credit card cash withdrawal solution eliminates the need for long ATM queues and simplifies the complex banking processes. Through our cutting-edge mobile app, you can withdraw cash from your credit card and promptly transfer it to your bank account or UPI wallet.<br/>
Key Features:<br/>
Credit Card Cash Withdrawal: Instant access to cash within your credit card limit during emergencies.<br/>
Instant Transfer: <br/>Immediate transfer of withdrawn funds to your bank account or UPI wallet.<br/>
Secure Transactions: <br/>Ensuring the safety of your financial transactions with advanced encryption and two-factor authentication.<br/>
Real-time Updates: Stay informed with real-time transaction updates for transparency and control over your finances.<br/>
Why InstapayCash?<br/>
InstapayCash offers unmatched convenience, speed, and security. The app aims to provide seamless access to credit card funds whenever needed, revolutionizing cash withdrawals. By downloading the InstapayCash app, users can take control of their finances like never before.</p>
        <div className="mt-8">
          <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
