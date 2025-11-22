import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import Toast from "./components/Toast";
import { TextLogo } from "./components/Logo";
import { HiViewGrid } from "react-icons/hi";
import "./index.css";

const API_URL = "http://localhost:5000/api";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [stats, setStats] = useState({
    totalUsers: 0,
    newUsersToday: 0,
    activeUsers: 0,
  });

  // Fetch all users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/users`);
      if (response.data.success) {
        setUsers(response.data.data);
        updateStats(response.data.data);
      }
    } catch (error) {
      showToast("Error fetching users", "error");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update statistics
  const updateStats = (userData) => {
    const today = new Date().toDateString();
    const newUsersToday = userData.filter(
      (user) => new Date(user.createdAt).toDateString() === today
    ).length;

    setStats({
      totalUsers: userData.length,
      newUsersToday,
      activeUsers: userData.length, // Assuming all users are active
    });
  };

  // Show toast message
  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  // Create new user
  const createUser = async (userData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/users`, userData);
      if (response.data.success) {
        fetchUsers();
        setShowForm(false);
        showToast("User created successfully!", "success");
      }
    } catch (error) {
      showToast(
        error.response?.data?.message || "Error creating user",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  // Update user
  const updateUser = async (id, userData) => {
    setLoading(true);
    try {
      const response = await axios.put(`${API_URL}/users/${id}`, userData);
      if (response.data.success) {
        fetchUsers();
        setEditingUser(null);
        setShowForm(false);
        showToast("User updated successfully!", "success");
      }
    } catch (error) {
      showToast(
        error.response?.data?.message || "Error updating user",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${API_URL}/users/${id}`);
      if (response.data.success) {
        fetchUsers();
        showToast("User deleted successfully!", "success");
      }
    } catch (error) {
      showToast(
        error.response?.data?.message || "Error deleting user",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  // Handle edit user
  const handleEditUser = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  // Handle new user
  const handleNewUser = () => {
    setEditingUser(null);
    setShowForm(true);
  };

  // Handle form submit
  const handleFormSubmit = (userData) => {
    if (editingUser) {
      updateUser(editingUser._id, userData);
    } else {
      createUser(userData);
    }
  };

  // Handle form cancel
  const handleFormCancel = () => {
    setShowForm(false);
    setEditingUser(null);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Logo Section */}
              <div className="flex items-center justify-center lg:justify-start">
                <TextLogo />
              </div>

              {/* Header Info */}
              <div className="text-center lg:text-right">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  Dashboard Overview
                </h2>
                <p className="text-gray-600">
                  Manage users with our modern interface
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Dashboard Stats */}
        <div className="animate-fadeIn">
          <Dashboard
            stats={stats}
            onNewUser={handleNewUser}
            loading={loading}
          />
        </div>

        {/* User Table */}
        <div className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
          <UserTable
            users={users}
            onEdit={handleEditUser}
            onDelete={deleteUser}
            loading={loading}
          />
        </div>
      </main>

      {/* Form Modal */}
      {showForm && (
        <div className="animate-scaleIn">
          <UserForm
            user={editingUser}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
            loading={loading}
          />
        </div>
      )}

      {/* Toast Notifications */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: "", type: "" })}
        />
      )}
    </div>
  );
}

export default App;
