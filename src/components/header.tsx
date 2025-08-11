import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleDropdown = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = (): void => {
    localStorage.clear();
    navigate("/login");
  };

  const handleNavigation = (path: string): void => {
    navigate(path);
  };

  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex-1">
          <a href="#" className="text-xl font-semibold text-gray-800">Company</a>
        </div>

        <div className="flex-1 flex justify-center">
          <nav>
            <ul className="flex space-x-6 text-base text-gray-700">
              <li>
                <button
                  onClick={() => handleNavigation("/sportfields")}
                  className="hover:text-cyan-600 px-3 focus:outline-none"
                >
                  Sports Fields
                </button>
                <button
                  onClick={() => handleNavigation("/events")}
                  className="hover:text-cyan-600 px-3 focus:outline-none"
                >
                  Events
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex-1 flex justify-end relative">
          <button onClick={toggleDropdown} className="text-gray-700 hover:text-cyan-600">
            <FaUser size={20} />
          </button>

          {isOpen && (
            <div className="absolute mt-12 right-0 bg-white shadow-md rounded-lg w-40 py-2 z-50">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
