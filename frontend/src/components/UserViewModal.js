import React from "react";
import {
  HiX,
  HiUser,
  HiMail,
  HiPhone,
  HiCalendar,
  HiClock,
  HiBadgeCheck,
  HiGlobe,
  HiOfficeBuilding,
} from "react-icons/hi";

const UserViewModal = ({ user, onClose }) => {
  if (!user) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl font-bold">
                {getInitials(user.Name)}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{user.Name}</h2>
                <p className="text-blue-100">User Profile Details</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors duration-200"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[calc(90vh-120px)] overflow-y-auto">
          {/* Basic Information */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <HiUser className="w-5 h-5 text-blue-600" />
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Full Name
                  </label>
                  <div className="mt-1 flex items-center gap-3 p-3 bg-white rounded-lg border">
                    <HiUser className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900 font-medium">
                      {user.Name}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Email Address
                  </label>
                  <div className="mt-1 flex items-center gap-3 p-3 bg-white rounded-lg border">
                    <HiMail className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{user.Email}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Mobile Number
                  </label>
                  <div className="mt-1 flex items-center gap-3 p-3 bg-white rounded-lg border">
                    <HiPhone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{user.Mobile}</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    User Status
                  </label>
                  <div className="mt-1 flex items-center gap-3 p-3 bg-white rounded-lg border">
                    <HiBadgeCheck className="w-5 h-5 text-green-500" />
                    <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Information */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <HiClock className="w-5 h-5 text-blue-600" />
              Account Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Created Date
                </label>
                <div className="mt-1 flex items-center gap-3 p-3 bg-white rounded-lg border">
                  <HiCalendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900">
                    {formatDate(user.createdAt)}
                  </span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Last Updated
                </label>
                <div className="mt-1 flex items-center gap-3 p-3 bg-white rounded-lg border">
                  <HiClock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900">
                    {formatDate(user.updatedAt || user.createdAt)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <HiGlobe className="w-5 h-5 text-green-600" />
              Additional Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  User ID
                </label>
                <div className="mt-1 flex items-center gap-3 p-3 bg-white rounded-lg border">
                  <HiBadgeCheck className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900 font-mono text-sm">
                    {user._id}
                  </span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Account Type
                </label>
                <div className="mt-1 flex items-center gap-3 p-3 bg-white rounded-lg border">
                  <HiOfficeBuilding className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900">Standard User</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Summary */}
          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Activity Summary
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-2xl font-bold text-purple-600">42</div>
                <div className="text-sm text-gray-600">Total Logins</div>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-2xl font-bold text-blue-600">15</div>
                <div className="text-sm text-gray-600">Actions Performed</div>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Uptime Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t">
          <div className="flex justify-end gap-3">
            <button onClick={onClose} className="btn-secondary">
              Close
            </button>
            <button className="btn-primary">Edit User</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserViewModal;
