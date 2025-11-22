import React from "react";
import { HiTrash, HiX, HiCheck, HiUserRemove } from "react-icons/hi";
import { HiExclamationTriangle } from "react-icons/hi2";

const DeleteConfirmModal = ({ user, onConfirm, onCancel, loading }) => {
  if (!user) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white bg-opacity-20 rounded-full">
              <HiExclamationTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Confirm Deletion</h3>
              <p className="text-red-100 text-sm">
                This action cannot be undone
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Warning Section */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
              <HiUserRemove className="w-8 h-8 text-red-500" />
              <div>
                <h4 className="font-semibold text-red-800">
                  Delete User Account
                </h4>
                <p className="text-red-600 text-sm">
                  You are about to permanently delete this user
                </p>
              </div>
            </div>
          </div>

          {/* User Details */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h5 className="font-medium text-gray-900 mb-3">User Details:</h5>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium text-gray-900">{user.Name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium text-gray-900">{user.Email}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Mobile:</span>
                <span className="font-medium text-gray-900">{user.Mobile}</span>
              </div>
            </div>
          </div>

          {/* Confirmation Message */}
          <div className="text-center mb-6">
            <p className="text-gray-700">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-gray-900">{user.Name}</span>?
            </p>
            <p className="text-sm text-gray-500 mt-1">
              All data associated with this user will be permanently removed.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onCancel}
              disabled={loading}
              className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <HiX className="w-5 h-5" />
              Cancel
            </button>
            <button
              onClick={() => onConfirm(user._id)}
              disabled={loading}
              className={`flex-1 px-4 py-3 font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 ${
                loading
                  ? "bg-red-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              } text-white`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Deleting...
                </>
              ) : (
                <>
                  <HiTrash className="w-5 h-5" />
                  Yes, Delete User
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
