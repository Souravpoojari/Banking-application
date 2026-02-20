import React from "react";
import { Link } from "react-router-dom";

const History = () => (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-2xl font-semibold text-[#002970] mb-2 text-center">
                Transaction History
            </h1>
            <p className="text-gray-600 text-sm mb-6 text-center">
                View all your recent Kodbank transactions in one place, similar to Paytm&apos;s passbook.
            </p>
            <div className="h-40 rounded-xl border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-500 mb-6">
                Transaction list UI can be added here later.
            </div>
            <Link
                to="/dashboard"
                className="block w-full text-center py-3 rounded-lg bg-[#00baf2] text-white text-sm font-medium hover:bg-[#0086b3]"
            >
                Back to Dashboard
            </Link>
        </div>
    </div>
);

export default History;

