import React from "react";
import { Link } from "react-router-dom";

const ToContact = () => (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-2xl font-semibold text-[#002970] mb-2 text-center">
                Send Money to Contact
            </h1>
            <p className="text-gray-600 text-sm mb-6 text-center">
                Placeholder page for sending money to a saved contact, reflecting Paytm-style contact transfers.
            </p>
            <div className="h-32 rounded-xl border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-500 mb-6">
                Contacts list UI can be added here later.
            </div>
            <button className="w-full py-3 rounded-lg bg-[#00baf2] text-white text-sm font-medium mb-3 cursor-not-allowed opacity-70">
                Select Contact (Demo)
            </button>
            <Link
                to="/dashboard"
                className="block w-full text-center py-3 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
                Back to Dashboard
            </Link>
        </div>
    </div>
);

export default ToContact;

