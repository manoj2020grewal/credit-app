import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import './assests/styles/tailwind.css'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Dashboard from './components/pages/Dashboard';
import DashboardHome from './components/pages/Dashboard/DashboardHome';
import DashboardProfile from './components/pages/Dashboard/DashboardProfile';
import DashboardSettings from './components/pages/Dashboard/DashboardSettings';
import SideMenu from './components/common/SideMenu';
import DashboardHeader from './components/pages/Dashboard/DashboardHeader';

const App = () => {
  const dashboardRoutes = [
    '/dashboard',
    '/dashboard/profile',
    '/dashboard/settings'
  ];
  const isDashboardRoute = dashboardRoutes.includes(window.location.pathname);

  return (
    <Router>
      <div>
        {/* Conditional Rendering of Side Menu */}
        {isDashboardRoute && <DashboardHeader />}
        {isDashboardRoute && <SideMenu />}
        {!isDashboardRoute && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<DashboardHome />} />
          <Route path="/dashboard/profile" element={<DashboardProfile />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
