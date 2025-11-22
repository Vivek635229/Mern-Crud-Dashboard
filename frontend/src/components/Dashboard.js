import React from "react";
import Logo from "./Logo";
import {
  HiUsers,
  HiUserAdd,
  HiTrendingUp,
  HiPlus,
  HiDownload,
  HiArrowUp,
  HiChartBar,
  HiClock,
  HiLightningBolt,
} from "react-icons/hi";

const Dashboard = ({ stats, onNewUser, loading }) => {
  const currentTime = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <Logo size="large" className="drop-shadow-lg" />
                <div className="p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl">
                  <HiChartBar className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  UserFlow Pro Analytics
                </h1>
                <p className="text-blue-100 text-lg">
                  Professional user management dashboard
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-blue-100">
              <HiClock className="w-5 h-5" />
              <span className="text-sm">{currentTime}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-6 rounded-xl backdrop-blur-sm transition-all duration-200 flex items-center gap-3 border border-white border-opacity-20">
              <HiDownload className="w-5 h-5" />
              Export Report
            </button>
            <button
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center gap-3 shadow-lg"
              onClick={onNewUser}
              disabled={loading}
            >
              <HiPlus className="w-5 h-5" />
              Add New User
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Total Users Card */}
        <div className="group bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  <HiUsers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Total Users
                  </p>
                  <p className="text-3xl font-bold text-blue-900">
                    {stats.totalUsers}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                  <HiArrowUp className="w-3 h-3" />
                  <span>+12%</span>
                </div>
                <span className="text-xs text-gray-600">vs last month</span>
              </div>
            </div>
          </div>
        </div>

        {/* New Users Today Card */}
        <div className="group bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                  <HiUserAdd className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                    New Today
                  </p>
                  <p className="text-3xl font-bold text-green-900">
                    {stats.newUsersToday}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                  <HiArrowUp className="w-3 h-3" />
                  <span>+{stats.newUsersToday}</span>
                </div>
                <span className="text-xs text-gray-600">since yesterday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Users Card */}
        <div className="group bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <HiLightningBolt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                    Active Users
                  </p>
                  <p className="text-3xl font-bold text-purple-900">
                    {stats.activeUsers}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                  <HiArrowUp className="w-3 h-3" />
                  <span>+8%</span>
                </div>
                <span className="text-xs text-gray-600">activity rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Rate Card */}
        <div className="group bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                  <HiTrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
                    Growth Rate
                  </p>
                  <p className="text-3xl font-bold text-orange-900">+24%</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                  <HiArrowUp className="w-3 h-3" />
                  <span>+2.4%</span>
                </div>
                <span className="text-xs text-gray-600">this quarter</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
