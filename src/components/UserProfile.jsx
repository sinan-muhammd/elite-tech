import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User, Mail, Shield, LogOut } from "lucide-react";

const UserProfile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const userRole = localStorage.getItem("userRole");
    const userName = localStorage.getItem("userName");

    useEffect(() => {
        // Determine user data to display
        // For now we rely on localStorage, but we could fetch more details if we stored ID
        setUserData({
            name: userName || "User",
            role: userRole || "Guest",
            email: userRole === "admin" ? "admin@gmail.com" : "user@example.com" // Placeholder since we don't store email in localstorage yet
        });
    }, [userRole, userName]);

    const handleLogout = () => {
        localStorage.removeItem("userRole");
        localStorage.removeItem("userName");
        alert("Logged out successfully!");
        navigate("/login");
    };

    if (!userRole) {
        navigate("/login");
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white shadow-xl rounded-2xl w-full max-w-md overflow-hidden">
                <div className="bg-indigo-600 h-32 flex items-center justify-center">
                    <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center p-1 border-4 border-indigo-200 shadow-lg mt-16">
                        <User size={48} className="text-indigo-600" />
                    </div>
                </div>

                <div className="pt-16 pb-8 px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900">{userData?.name}</h2>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2 ${userData?.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}>
                        {userData?.role === 'admin' ? 'Administrator' : 'Verified User'}
                    </span>

                    <div className="mt-8 space-y-4 text-left">
                        <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                            <div className="p-2 bg-indigo-50 rounded-full text-indigo-600">
                                <Mail size={20} />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Email</div>
                                <div className="text-gray-900 font-medium truncate">{userData?.email}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                            <div className="p-2 bg-indigo-50 rounded-full text-indigo-600">
                                <Shield size={20} />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Role</div>
                                <div className="text-gray-900 font-medium capitalize">{userData?.role}</div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="w-full mt-8 bg-red-50 text-red-600 font-bold py-3.5 rounded-xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
