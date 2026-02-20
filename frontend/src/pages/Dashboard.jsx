import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import {
    LogOut, ScanLine, Smartphone, Landmark,
    User, History, QrCode, CreditCard, ChevronRight,
    Bell, HelpCircle, ShieldCheck
} from "lucide-react";

const Dashboard = () => {
    const [balance, setBalance] = useState(null);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [error, setError] = useState("");
    const [showBalance, setShowBalance] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            UserService.getBalance().then(
                (response) => {
                    setBalance(response.data.balance);
                },
                (error) => {
                    setError("Failed to fetch balance. Unauthorized.");
                    if (error.response && error.response.status === 401) {
                        AuthService.logout();
                        navigate("/login");
                    }
                }
            );
        } else {
            navigate("/login");
        }
    }, [navigate]);

    const handleLogout = () => {
        AuthService.logout().then(
            () => {
                navigate("/login");
            },
            (err) => console.error(err)
        );
    };

    if (!currentUser) {
        return null; // or a loading spinner
    }

    const ActionButton = ({ icon: Icon, label, color, onClick }) => (
        <div
            className="flex flex-col items-center justify-start cursor-pointer group"
            onClick={onClick}
        >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white mb-2 transition-transform transform group-hover:scale-105 shadow-sm ${color}`}>
                <Icon size={24} />
            </div>
            <span className="text-xs font-medium text-gray-700 text-center w-full leading-tight">{label}</span>
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-screen flex justify-center font-sans relative pb-20">
            {/* Mobile App Container */}
            <div className="w-full max-w-md bg-white shadow-xl min-h-screen relative overflow-hidden">

                {/* Header Profile Section - Inspired by Paytm/GPay */}
                <div className="bg-[#002970] pt-8 pb-16 px-6 text-white rounded-b-[40px] relative">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold border-2 border-white/30 truncate">
                                {currentUser.username.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h1 className="text-lg font-semibold tracking-wide">Hi, {currentUser.username}</h1>
                                <p className="text-sm text-blue-200">{currentUser.email}</p>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
                                <QrCode size={20} />
                            </div>
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition relative">
                                <Bell size={20} />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Balance Card overlaps the header */}
                <div className="px-5 -mt-10 relative z-10">
                    <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="bg-blue-50 p-2 rounded-lg">
                                <Landmark className="text-[#002970]" size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Kodbank Savings</p>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl font-bold text-gray-800">
                                        {showBalance ? (balance !== null ? `₹ ${balance.toLocaleString('en-IN')}` : 'Loading...') : '₹ ••••••'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowBalance(!showBalance)}
                            className="text-[#002970] text-sm font-semibold hover:bg-blue-50 px-3 py-1.5 rounded-full transition"
                        >
                            {showBalance ? 'HIDE' : 'CHECK'}
                        </button>
                    </div>
                </div>

                {/* Main Actions Grid */}
                <div className="px-5 mt-6">
                    <h2 className="text-sm font-bold text-gray-800 mb-4 px-1">Money Transfers</h2>
                    <div className="grid grid-cols-4 gap-y-6 gap-x-2">
                        <ActionButton
                            icon={ScanLine}
                            label="Scan & Pay"
                            color="bg-blue-600"
                            onClick={() => navigate("/scan-pay")}
                        />
                        <ActionButton
                            icon={Smartphone}
                            label="To Mobile"
                            color="bg-indigo-600"
                            onClick={() => navigate("/to-mobile")}
                        />
                        <ActionButton
                            icon={User}
                            label="To Contact"
                            color="bg-purple-600"
                            onClick={() => navigate("/to-contact")}
                        />
                        <ActionButton
                            icon={Landmark}
                            label="Bank Transfer"
                            color="bg-teal-600"
                            onClick={() => navigate("/bank-transfer")}
                        />
                        <ActionButton
                            icon={User}
                            label="Self Transfer"
                            color="bg-cyan-600"
                            onClick={() => navigate("/self-transfer")}
                        />
                        <ActionButton
                            icon={CreditCard}
                            label="Credit Card"
                            color="bg-rose-500"
                            onClick={() => navigate("/credit-card")}
                        />
                        <ActionButton
                            icon={HelpCircle}
                            label="Help"
                            color="bg-gray-600"
                            onClick={() => navigate("/help")}
                        />
                        <ActionButton
                            icon={ShieldCheck}
                            label="Safe"
                            color="bg-green-600"
                            onClick={() => navigate("/safe")}
                        />
                    </div>
                </div>

                <div className="h-2 w-full bg-gray-100 my-6"></div>

                {/* Bills & Recharges */}
                <div className="px-5 mb-6">
                    <div className="flex justify-between items-center mb-4 px-1">
                        <h2 className="text-sm font-bold text-gray-800">Recharge & Pay Bills</h2>
                        <span className="text-xs text-blue-600 font-bold cursor-pointer">View All</span>
                    </div>
                    <div className="grid grid-cols-4 gap-y-6 gap-x-2">
                        <ActionButton
                            icon={Smartphone}
                            label="Mobile Recharge"
                            color="bg-[#002970]"
                            onClick={() => navigate("/mobile-recharge")}
                        />
                        <ActionButton
                            icon={Landmark}
                            label="DTH"
                            color="bg-[#002970]"
                            onClick={() => navigate("/dth")}
                        />
                        <ActionButton
                            icon={Landmark}
                            label="Electricity"
                            color="bg-[#002970]"
                            onClick={() => navigate("/electricity")}
                        />
                        <ActionButton
                            icon={CreditCard}
                            label="Fastag"
                            color="bg-[#002970]"
                            onClick={() => navigate("/fastag")}
                        />
                    </div>
                </div>

                <div className="h-2 w-full bg-gray-100 my-6"></div>

                {/* Account Settings / Logout */}
                <div className="px-5 mb-24">
                    <div
                        onClick={handleLogout}
                        className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:bg-red-50 cursor-pointer transition-colors group"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="bg-red-100 p-2 rounded-full group-hover:bg-red-200 transition">
                                <LogOut className="text-red-600" size={20} />
                            </div>
                            <span className="font-semibold text-gray-700 group-hover:text-red-600 transition">Sign Out securely</span>
                        </div>
                        <ChevronRight className="text-gray-400 group-hover:text-red-500" size={20} />
                    </div>
                </div>

                {/* Bottom Navigation Bar */}
                <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
                    <div
                        className="flex flex-col items-center text-[#002970] cursor-pointer"
                        onClick={() => navigate("/dashboard")}
                    >
                        <Landmark size={24} />
                        <span className="text-[10px] font-bold mt-1">Home</span>
                    </div>
                    <div
                        className="flex flex-col items-center text-gray-400 hover:text-[#002970] cursor-pointer"
                        onClick={() => navigate("/history")}
                    >
                        <History size={24} />
                        <span className="text-[10px] font-medium mt-1">History</span>
                    </div>
                    {/* Floating Scan Button */}
                    <div className="w-14 h-14 bg-gradient-to-tr from-[#002970] to-[#0051e6] rounded-full flex flex-col items-center justify-center text-white -mt-8 shadow-lg shadow-blue-500/30 cursor-pointer hover:scale-105 transition-transform">
                        <ScanLine size={24} />
                    </div>
                    <div
                        className="flex flex-col items-center text-gray-400 hover:text-[#002970] cursor-pointer"
                        onClick={() => navigate("/cards")}
                    >
                        <CreditCard size={24} />
                        <span className="text-[10px] font-medium mt-1">Cards</span>
                    </div>
                    <div
                        className="flex flex-col items-center text-gray-400 hover:text-[#002970] cursor-pointer"
                        onClick={() => navigate("/profile")}
                    >
                        <User size={24} />
                        <span className="text-[10px] font-medium mt-1">Profile</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
