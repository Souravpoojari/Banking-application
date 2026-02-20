import React from "react";
import { Link } from "react-router-dom";

const ScanPay = () => (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-2xl font-semibold text-[#002970] mb-2 text-center">
                Scan & Pay
            </h1>
            <p className="text-gray-600 text-sm mb-6 text-center">
                This is a placeholder screen for Scan &amp; Pay. Here you can later add QR
                scanner integration similar to Paytm.
            </p>
            <div className="h-40 w-40 border-2 border-dashed border-[#00baf2] rounded-2xl mx-auto mb-6 flex items-center justify-center text-gray-400 text-xs">
                QR Scanner Preview
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

export default ScanPay;

