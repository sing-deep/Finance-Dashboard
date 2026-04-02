import { useState, useRef, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";
const CustomDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-18">
      
      {/* Selected */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center px-2 py-1.5 border border-gray-400 rounded-full font-medium text-xs text-gray-600 cursor-pointer hover:border-gray-400 transition"
      >  
        {value}
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <MdArrowDropDown />
        </span>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white rounded-xl shadow-sm overflow-hidden z-50">
          {options.map((item) => (
            <div
              key={item}
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
              className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 transition ${
                value === item ? "bg-gray-100 font-medium" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;