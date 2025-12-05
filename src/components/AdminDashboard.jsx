import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Plus, Edit, Trash2, Search } from "lucide-react";

function AdminDashboard() {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("products"); // 'products' or 'users'
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const [productsRes, usersRes] = await Promise.all([
                axios.get("https://backend-elite-1.onrender.com/products"),
                axios.get("https://backend-elite-1.onrender.com/users")
            ]);
            setProducts(productsRes.data);
            setUsers(usersRes.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;

        try {
            await axios.delete(`https://backend-elite-1.onrender.com/products/${id}`);
            setProducts((prev) => prev.filter((p) => p.id !== id));
        } catch (error) {
            console.error("Delete failed", error);
            alert("Failed to delete product!");
        }
    };

    // Filter Logic
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleLogout = () => {
        localStorage.removeItem("userRole");
        localStorage.removeItem("userName");
        navigate("/login");
    }

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                        <p className="text-gray-500 mt-1">Manage products and users</p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={handleLogout}
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                        >
                            Logout
                        </button>
                        <Link
                            to="/addproduct"
                            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium shadow-lg shadow-gray-200"
                        >
                            <Plus size={20} />
                            Add New Product
                        </Link>
                    </div>
                </div>

                {/* Tab Switcher */}
                <div className="flex space-x-4 mb-6 border-b border-gray-200">
                    <button
                        className={`pb-2 px-4 font-medium transition-colors relative ${activeTab === 'products' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                        onClick={() => setActiveTab('products')}
                    >
                        Products
                        {activeTab === 'products' && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded-t-full"></span>
                        )}
                    </button>
                    <button
                        className={`pb-2 px-4 font-medium transition-colors relative ${activeTab === 'users' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                        onClick={() => setActiveTab('users')}
                    >
                        Users
                        {activeTab === 'users' && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded-t-full"></span>
                        )}
                    </button>
                </div>

                {/* Search Bar */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder={`Search ${activeTab}...`}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Total Products</div>
                        <div className="text-3xl font-bold text-gray-900 mt-2">{products.length}</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Total Users</div>
                        <div className="text-3xl font-bold text-gray-900 mt-2">
                            {users.length}
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Total Value Estimate</div>
                        <div className="text-3xl font-bold text-gray-900 mt-2">
                            ${products.reduce((acc, curr) => acc + (Number(curr.price) || 0), 0).toFixed(2)}
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    {activeTab === 'products' ? (
                        // PRODUCTS TABLE
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Product</th>
                                        <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                                        <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                                        <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredProducts.map((product) => (
                                        <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
                                            <td className="p-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="h-12 w-12 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-900">{product.name}</div>
                                                        <div className="text-sm text-gray-500 line-clamp-1 max-w-[200px]">{product.description}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-800">
                                                    {product.category}
                                                </span>
                                            </td>
                                            <td className="p-4 font-medium text-gray-900">
                                                ${product.price}
                                            </td>
                                            <td className="p-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                                </span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={() => navigate(`/edit/${product.id}`)}
                                                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                                        title="Edit"
                                                    >
                                                        <Edit size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(product.id)}
                                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                        title="Delete"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {filteredProducts.length === 0 && (
                                <div className="p-10 text-center text-gray-500">
                                    No products found.
                                </div>
                            )}
                        </div>
                    ) : (
                        // USERS TABLE
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">User</th>
                                        <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                                        <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 font-medium text-gray-900">
                                                {user.name}
                                            </td>
                                            <td className="p-4 text-gray-600">
                                                {user.email}
                                            </td>
                                            <td className="p-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                                                    {user.role || 'user'}
                                                </span>
                                            </td>
                                            <td className="p-4 text-gray-400 text-xs font-mono">
                                                {user.id}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {filteredUsers.length === 0 && (
                                <div className="p-10 text-center text-gray-500">
                                    No users found.
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
