import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/logo/logo.svg";
import CustomDropdown from "./CustomDrop";
import { HiHome } from "react-icons/hi";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineInsights } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { useApp } from "../context/AppContext";


const navigationSection = [
  { icon: HiHome, sectionname: "Dashboard", link: "/" },
  { icon: GrTransaction, sectionname: "Transactions", link: "/transactions" },
  { icon: MdOutlineInsights, sectionname: "Insights", link: "/insights" },
];

const Sidebar = () => {
  const { role, setRole} = useApp();
  
  const [isOpen, setIsOpen] = useState(false); // for mobile

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white border  border-gray-300 rounded-lg "
      >
        <LuMenu />
      </button>

      {/*  Overlay (mobile) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static z-50 top-0 left-0 h-full w-64 bg-white border-r border-gray-300 p-5 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <div className="flex items-center gap-1">
            <img className="w-8 h-8" src={logo} alt="logo" />
            <h2 className="text-xl font-bold text-amber-950">Finance</h2>
          </div>
            <h5 className="ml-9 text-sm font-medium">{role}</h5>
          </div>
          

          <CustomDropdown
            options={["Viewer", "Admin"]}
            value={role}
            onChange={setRole}
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col ">
          {navigationSection.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              onClick={() => setIsOpen(false)} // close on mobile click
              className={({ isActive }) =>
                `flex items-center gap-3 px-2 py-2 rounded-lg transition ${
                  isActive
                    ? "font-semibold text-black"
                    : "text-gray-500 hover:text-black"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`flex items-center justify-center rounded-full w-10 h-10 transition ${
                      isActive
                        ? "bg-[#2cb603] text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    <item.icon className="text-lg" />
                  </div>

                  <span>{item.sectionname}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;