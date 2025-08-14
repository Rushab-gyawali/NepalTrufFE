import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import LoginModal from "../pages/loginmodal";
import { PUBLICDASHBOARD } from "../util/constants/routeConstant";

interface MenuItem {
  label: string;
  path: string;
}

interface HeaderProps {
  menuItems?: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ menuItems = [] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = (): void => {
    localStorage.clear();
    navigate(PUBLICDASHBOARD);
  };

  const handleNavigation = (path: string): void => {
    navigate(path);
  };

  // Helper function to check if user is logged in
  const isUserLoggedIn = (): boolean => {
    return !!localStorage.getItem("token") && !!localStorage.getItem("user");
  };

  return (

    <>
      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />

      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex-1">
            <button
              onClick={() => handleNavigation(PUBLICDASHBOARD)}
              className="text-xl font-semibold text-gray-800 focus:outline-none"
            >
              Nepal truf
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <nav>
              <ul className="flex space-x-6 text-base text-gray-700">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="hover:text-cyan-600 px-3 focus:outline-none"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex-1 flex justify-end relative">
            {isUserLoggedIn() ? (
              <>
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
              </>
            ) : (
              <button
                onClick={() => setLoginOpen(true)}
                className="text-gray-700 hover:text-cyan-600"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
