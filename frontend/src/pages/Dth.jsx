import React from "react";
import { Link } from "react-router-dom";

const Dth = () => (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-2xl font-semibold text-[#002970] mb-2 text-center">
                DTH Recharge
            </h1>
            <p className="text-gray-600 text-sm mb-6 text-center">
                Placeholder page for DTH recharge similar to Paytm&apos;s TV recharge flow.
            </p>
            <div className="space-y-4 mb-6">
                <input
                    type="text"
                    placeholder="Subscriber ID"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00baf2]"
                />
                <input
                    type="text"
                    placeholder="Operator"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00baf2]"
                />
                <input
                    type="number"
                    placeholder="Amount"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00baf2]"
                />
            </div>
            <button className="w-full py-3 rounded-lg bg-[#00baf2] text-white text-sm font-medium mb-3 cursor-not-allowed opacity-70">
                Proceed to Recharge (Demo)
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

export default Dth;

