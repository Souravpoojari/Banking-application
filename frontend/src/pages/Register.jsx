import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthService from "../services/auth.service";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        AuthService.register(username, email, password, phone).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                setTimeout(() => navigate("/login"), 2000);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            }
        );
    };

    return (
        <div className="flex bg-gray-900 min-h-screen items-center justify-center p-4">
            <div className="bg-gray-800 shadow-xl rounded-2xl w-full max-w-md p-8 text-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -m-8 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 -m-8 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                        Kodbank
                    </h2>
                    <p className="text-gray-400 text-center mb-8">Create your account</p>

                    {!successful && (
                        <form onSubmit={handleRegister} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    minLength={3}
                                    maxLength={20}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    maxLength={50}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    maxLength={15}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    minLength={6}
                                    maxLength={40}
                                    required
                                />
                            </div>

                            <button
                                className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </form>
                    )}

                    {message && (
                        <div
                            className={`mt-6 text-sm rounded-lg p-3 text-center border ${successful
                                    ? "bg-green-500/10 border-green-500/50 text-green-400"
                                    : "bg-red-500/10 border-red-500/50 text-red-500"
                                }`}
                            role="alert"
                        >
                            {message}
                        </div>
                    )}

                    <div className="mt-6 text-center text-sm text-gray-400">
                        Already have an account?{" "}
                        <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-medium">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
