import React from "react";

const Logo = ({ size = "large", className = "" }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Main Logo Container */}
      <div className="relative w-full h-full">
        {/* Background Circle with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-full shadow-lg">
          {/* Animated Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-75 animate-pulse"></div>

          {/* Inner Circle */}
          <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full backdrop-blur-sm">
            {/* Users Icon */}
            <div className="w-full h-full flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-3/4 h-3/4 text-white drop-shadow-sm"
                fill="currentColor"
              >
                {/* Main User */}
                <circle cx="50" cy="30" r="12" />
                <path d="M25 70 C25 55, 35 50, 50 50 C65 50, 75 55, 75 70 L75 80 L25 80 Z" />

                {/* Side Users */}
                <circle cx="25" cy="40" r="8" opacity="0.8" />
                <path
                  d="M10 75 C10 65, 15 62, 25 62 C35 62, 40 65, 40 75 L40 82 L10 82 Z"
                  opacity="0.8"
                />

                <circle cx="75" cy="40" r="8" opacity="0.8" />
                <path
                  d="M60 75 C60 65, 65 62, 75 62 C85 62, 90 65, 90 75 L90 82 L60 82 Z"
                  opacity="0.8"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Decorative Dots */}
        <div
          className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  );
};

// Text Logo Component
export const TextLogo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo size="medium" />
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
          UserFlow Pro
        </span>
        <span className="text-sm text-gray-500 font-medium tracking-wide">
          Professional Management
        </span>
      </div>
    </div>
  );
};

export default Logo;
