import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthService from "../services/auth.service";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        AuthService.login(username, password).then(
            () => {
                navigate("/dashboard");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setMessage(resMessage);
            }
        );
    };

    return (
        <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-4">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                {/* Left side - Brand and illustration */}
                <div className="hidden md:flex md:w-1/2 bg-gradient-to-b from-[#002970] to-[#0051e6] text-white flex-col justify-between p-10 relative">
                    <div>
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                                <span className="text-[#002970] font-extrabold text-xl">K</span>
                            </div>
                            <span className="text-2xl font-semibold tracking-wide">Kodbank</span>
                        </div>
                        <h2 className="text-3xl font-bold leading-tight mb-3">
                            Payments made<br />simple & secure
                        </h2>
                        <p className="text-blue-100 text-sm max-w-xs">
                            Log in to your Kodbank account to pay bills, send money, manage cards and more with a Paytm-style experience.
                        </p>
                    </div>
                    <div className="mt-10">
                        <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/20">
                            <p className="text-xs text-blue-100 mb-2 font-medium uppercase tracking-wider">
                                Secure Login
                            </p>
                            <p className="text-sm text-blue-50">
                                Your credentials are encrypted and protected with multiple layers of security.
                            </p>
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                </div>

                {/* Right side - Login form */}
                <div className="w-full md:w-1/2 px-6 sm:px-10 py-10">
                    <div className="md:hidden flex items-center justify-center mb-8">
                        <div className="w-10 h-10 rounded-lg bg-[#002970] flex items-center justify-center">
                            <span className="text-white font-extrabold text-xl">K</span>
                        </div>
                        <span className="ml-3 text-2xl font-semibold text-[#002970]">Kodbank</span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-semibold text-[#002970] mb-2">
                        Login to your account
                    </h1>
                    <p className="text-gray-500 text-sm mb-8">
                        Use your registered username and password to continue.
                    </p>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00baf2] focus:border-transparent text-gray-900 text-sm"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00baf2] focus:border-transparent text-gray-900 text-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                            <div className="mt-2 text-right">
                                <button
                                    type="button"
                                    className="text-xs font-medium text-[#00baf2] hover:text-[#0086b3]"
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        </div>

                        <button
                            className="w-full py-3 px-4 bg-[#00baf2] hover:bg-[#0086b3] text-white rounded-lg font-medium text-sm transition-colors flex items-center justify-center disabled:opacity-60"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                                    Signing in...
                                </span>
                            ) : (
                                "Login Securely"
                            )}
                        </button>

                        {message && (
                            <div
                                className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg p-3 text-center"
                                role="alert"
                            >
                                {message}
                            </div>
                        )}
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-600">
                        New to Kodbank?{" "}
                        <Link to="/register" className="text-[#00baf2] hover:text-[#0086b3] font-medium">
                            Create a new account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
