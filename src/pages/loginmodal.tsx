import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PUBLICDASHBOARD } from "../util/constants/routeConstant";


interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", {
        user: {
          email: username,
          password: password,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token );
          localStorage.setItem("user", JSON.stringify(response.data.user));
          onClose();
          const role = response.data.user.role;
        if (role === "admin") {
          navigate(PUBLICDASHBOARD)
        } else {
          const previousPage = window.location.href;
          window.location.href = previousPage;

        }
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Login failed. Invalid Credential.");
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          Logo
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Nepal Turf</h2>

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label className="block mb-1 text-sm text-gray-600">Email</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <a href="#" className="block text-right text-xs text-cyan-600 mt-1">
              Forgot Password?
            </a>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-4"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm">
          Don't have an account? <a href="#" className="text-cyan-600">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
