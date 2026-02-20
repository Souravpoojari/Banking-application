import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ScanPay from "./pages/ScanPay";
import ToMobile from "./pages/ToMobile";
import ToContact from "./pages/ToContact";
import BankTransfer from "./pages/BankTransfer";
import SelfTransfer from "./pages/SelfTransfer";
import CreditCardPage from "./pages/CreditCardPage";
import Help from "./pages/Help";
import Safe from "./pages/Safe";
import MobileRecharge from "./pages/MobileRecharge";
import Dth from "./pages/Dth";
import Electricity from "./pages/Electricity";
import Fastag from "./pages/Fastag";
import History from "./pages/History";
import Cards from "./pages/Cards";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900 min-h-screen bg-gray-50 flex flex-col">
        <div className="flex-1">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Money Transfers */}
            <Route path="/scan-pay" element={<ScanPay />} />
            <Route path="/to-mobile" element={<ToMobile />} />
            <Route path="/to-contact" element={<ToContact />} />
            <Route path="/bank-transfer" element={<BankTransfer />} />
            <Route path="/self-transfer" element={<SelfTransfer />} />
            <Route path="/credit-card" element={<CreditCardPage />} />
            <Route path="/help" element={<Help />} />
            <Route path="/safe" element={<Safe />} />

            {/* Recharge & Pay Bills */}
            <Route path="/mobile-recharge" element={<MobileRecharge />} />
            <Route path="/dth" element={<Dth />} />
            <Route path="/electricity" element={<Electricity />} />
            <Route path="/fastag" element={<Fastag />} />

            {/* Bottom navigation pages */}
            <Route path="/history" element={<History />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
