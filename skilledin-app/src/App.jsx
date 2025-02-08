import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/auth/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return isLoginPage ? (
    <div className="w-full h-screen flex items-center bg-pink-50">
      <div className="mx-auto w-full px-2.5 md:px-10 p-6 bg-red justify-center rounded-lg shadow-md">
        <LoginPage />
      </div>
    </div>
  ) : (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
