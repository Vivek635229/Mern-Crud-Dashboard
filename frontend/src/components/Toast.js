import React, { useEffect } from "react";
import {
  HiCheck,
  HiX,
  HiInformationCircle,
  HiExclamationCircle,
} from "react-icons/hi";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <HiCheck className="w-5 h-5" />;
      case "error":
        return <HiExclamationCircle className="w-5 h-5" />;
      case "info":
        return <HiInformationCircle className="w-5 h-5" />;
      default:
        return <HiInformationCircle className="w-5 h-5" />;
    }
  };

  const getToastStyles = () => {
    switch (type) {
      case "success":
        return "bg-white border-l-4 border-green-500 text-green-800 shadow-lg";
      case "error":
        return "bg-white border-l-4 border-red-500 text-red-800 shadow-lg";
      case "info":
        return "bg-white border-l-4 border-blue-500 text-blue-800 shadow-lg";
      default:
        return "bg-white border-l-4 border-gray-500 text-gray-800 shadow-lg";
    }
  };

  const getIconBgColor = () => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-600";
      case "error":
        return "bg-red-100 text-red-600";
      case "info":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-[slideInRight_0.3s_ease-out]">
      <div className={`${getToastStyles()} rounded-lg p-4 max-w-sm w-full`}>
        <div className="flex items-start gap-3">
          <div className={`${getIconBgColor()} rounded-full p-1 flex-shrink-0`}>
            {getIcon()}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium leading-relaxed">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <HiX className="w-4 h-4" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-3 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
          <div
            className={`h-full ${
              type === "success"
                ? "bg-green-500"
                : type === "error"
                ? "bg-red-500"
                : "bg-blue-500"
            } animate-[shrink_4s_linear]`}
            style={{
              animation: "shrink 4s linear forwards",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
