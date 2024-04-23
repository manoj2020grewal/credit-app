import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <aside className="bg-gray-800 text-white w-64">
      <nav style={{marginTop: "65px"}}>
        <ul className="p-2">
          <li>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700">Home</Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="block py-2 px-4 hover:bg-gray-700">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/settings" className="block py-2 px-4 hover:bg-gray-700">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
