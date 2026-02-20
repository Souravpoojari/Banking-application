import React from "react";
import { Link } from "react-router-dom";

const Help = () => (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-2xl font-semibold text-[#002970] mb-2 text-center">
                Help & Support
            </h1>
            <p className="text-gray-600 text-sm mb-6 text-center">
                Get help with your Kodbank transactions, just like Paytm&apos;s support section.
            </p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6 list-disc list-inside">
                <li>View FAQs about payments and refunds</li>
                <li>Raise a ticket for failed transactions</li>
                <li>Contact customer care</li>
            </ul>
            <Link
                to="/dashboard"
                className="block w-full text-center py-3 rounded-lg bg-[#00baf2] text-white text-sm font-medium hover:bg-[#0086b3]"
            >
                Back to Dashboard
            </Link>
        </div>
    </div>
);

export default Help;

