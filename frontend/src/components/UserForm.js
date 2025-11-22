import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import {
  HiX,
  HiUser,
  HiMail,
  HiPhone,
  HiPlus,
  HiPencil,
  HiCheck,
  HiExclamationCircle,
} from "react-icons/hi";

const UserForm = ({ user, onSubmit, onCancel, loading }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData({
        Name: user.Name || "",
        Email: user.Email || "",
        Mobile: user.Mobile || "",
      });
    } else {
      setFormData({
        Name: "",
        Email: "",
        Mobile: "",
      });
    }
  }, [user]);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.Name.trim()) {
      newErrors.Name = "Name is required";
    } else if (formData.Name.trim().length < 2) {
      newErrors.Name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required";
    } else if (!emailRegex.test(formData.Email)) {
      newErrors.Email = "Please enter a valid email";
    }

    // Mobile validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.Mobile.trim()) {
      newErrors.Mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.Mobile)) {
      newErrors.Mobile = "Please enter a valid 10-digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo size="small" className="drop-shadow-sm" />
              <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                {user ? (
                  <HiPencil className="w-5 h-5" />
                ) : (
                  <HiUser className="w-5 h-5" />
                )}
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  {user ? "Edit User" : "Add New User"}
                </h2>
                <p className="text-blue-100 text-sm">UserFlow Pro</p>
              </div>
            </div>
            <button
              onClick={onCancel}
              type="button"
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors duration-200"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="form-label" htmlFor="Name">
                <HiUser className="w-4 h-4 inline mr-2" />
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  className={`form-input pl-10 ${
                    errors.Name ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  placeholder="Enter full name"
                  disabled={loading}
                />
                <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              {errors.Name && (
                <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                  <HiExclamationCircle className="w-4 h-4" />
                  {errors.Name}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="form-label" htmlFor="Email">
                <HiMail className="w-4 h-4 inline mr-2" />
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  className={`form-input pl-10 ${
                    errors.Email ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  placeholder="Enter email address"
                  disabled={loading}
                />
                <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              {errors.Email && (
                <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                  <HiExclamationCircle className="w-4 h-4" />
                  {errors.Email}
                </div>
              )}
            </div>

            {/* Mobile Field */}
            <div>
              <label className="form-label" htmlFor="Mobile">
                <HiPhone className="w-4 h-4 inline mr-2" />
                Mobile Number *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="Mobile"
                  name="Mobile"
                  value={formData.Mobile}
                  onChange={handleChange}
                  className={`form-input pl-10 ${
                    errors.Mobile ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  placeholder="Enter 10-digit mobile number"
                  disabled={loading}
                />
                <HiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              {errors.Mobile && (
                <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                  <HiExclamationCircle className="w-4 h-4" />
                  {errors.Mobile}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                className="btn-secondary flex-1"
                onClick={onCancel}
                disabled={loading}
              >
                <HiX className="w-5 h-5" />
                Cancel
              </button>

              <button
                type="submit"
                className="btn-primary flex-1"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    {user ? "Updating..." : "Creating..."}
                  </>
                ) : (
                  <>
                    {user ? (
                      <HiCheck className="w-5 h-5" />
                    ) : (
                      <HiPlus className="w-5 h-5" />
                    )}
                    {user ? "Update User" : "Create User"}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
