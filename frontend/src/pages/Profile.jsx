import React from "react";
import { Link } from "react-router-dom";

const Profile = () => (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-2xl font-semibold text-[#002970] mb-2 text-center">
                Profile
            </h1>
            <p className="text-gray-600 text-sm mb-6 text-center">
                View and manage your Kodbank profile details here, similar to Paytm&apos;s profile screen.
            </p>
            <div className="space-y-3 text-sm text-gray-700 mb-6">
                <div className="flex justify-between">
                    <span className="font-medium">Name</span>
                    <span className="text-gray-500">Your name</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Mobile</span>
                    <span className="text-gray-500">Your mobile</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Email</span>
                    <span className="text-gray-500">Your email</span>
                </div>
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

export default Profile;

