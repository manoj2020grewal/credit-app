import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center fixed w-full z-10" style={{marginTop: "-65px"}}>
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <div>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default DashboardHeader;