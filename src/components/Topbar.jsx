import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const Topbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const routeConfig = {
        "/": {
            title: "Dashboard",
            subtitle: "Empower your finance, simplified insights",
        },
        "/transactions": {
            title: "Transactions",
            subtitle: "Track and manage your transactions",
        },
        "/insights": {
            title: "Insights",
            subtitle: "Visualize your financial data",
        },};

  const { title, subtitle } = routeConfig[location.pathname] || routeConfig["/"];
  

  return (
    <div className="flex items-center justify-between ml-12 md:ml-0 px-4 md:px-6 py-3  bg-white">
      
      {/* Left */}
      <div>
        <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
        <p className="text-xs md:text-sm text-gray-500 hidden sm:block">
          {subtitle}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 md:gap-4">

        {/*  Search */}
            <div className="flex items-center relative">

            {/* Desktop Expand */}
            <input
                type="text"
                placeholder="Search..."
                className={`hidden sm:block absolute right-10 
                h-9 md:h-10 
                rounded-full border border-gray-300 
                px-3 text-sm outline-none
                transition-all duration-300 ease-in-out
                ${isSearchOpen ? "w-40 md:w-56 opacity-100" : "w-0 opacity-0 px-0 border-none"}
                `}
            />

            {/* Icon */}
            <div
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer transition"
            >
                <CiSearch size={20} />
            </div>
            </div>
            {/*  Mobile Search Overlay */}
            {isSearchOpen && (
            <div className="fixed inset-0 bg-white z-50 flex items-start p-4 sm:hidden">
                
                <div className="flex items-center w-full gap-2">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search..."
                    className="flex-1 h-10 border border-gray-300 rounded-full px-4 outline-none"
                />

                <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-sm text-gray-600"
                >
                    Cancel
                </button>
                </div>

            </div>
            )}

        {/* Notification */}
        <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer transition">
          <IoNotificationsOutline size={20} />
        </div>

        {/* Divider */}
        <div className="hidden sm:block h-6 w-px bg-gray-300"></div>

        {/* Profile */}
        <div className="flex items-center gap-2 md:gap-3">
          <img
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
            src="https://i.pravatar.cc/40"
            alt="profile"
          />

          <div className="hidden sm:block">
            <h4 className="text-sm md:text-base font-semibold text-gray-700">
              Deepali
            </h4>
            <h5 className="text-xs md:text-sm text-gray-500">
              deepali@mail.com
            </h5>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Topbar;