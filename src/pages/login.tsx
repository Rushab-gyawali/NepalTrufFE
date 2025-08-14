// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { SPORTSFIELDS } from "../util/constants/routeConstant";

// const Login: React.FC = () => {
//   const [username, setUserName] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const navigate = useNavigate();

//   const handleLogin = (e: React.MouseEvent<HTMLButtonElement>): void => {
//     e.preventDefault();
//     axios.post('http://localhost:3000/login', {
//         user: {
//           email: username,
//           password: password,
//         }
//     })
//       .then((response) => {
//         console.log("Login response:", response);
//         if (response.status === 200) {
//           const token = response.headers['x-api-key'];
//           localStorage.setItem("token", token);
//           localStorage.setItem("user", JSON.stringify(response.data.user));
//           navigate(SPORTSFIELDS);
//         }
//       })
//       .catch((error) => {
//         console.error("Login error:", error);
//         alert("Login failed. Invalid Credential.");
//       }
//       );
//   };

//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
//           <div className="flex justify-center mb-8">
//             {/* <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" className="w-30 h-20"/> */}
//             Logo
//           </div>
//           <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Nepal Turf</h1>
//           <form>
//             <div className="mb-6">
//               <label className="block mb-2 text-sm text-gray-600">Email</label>
//               <input type="email" id="email" name="email"
//                 onChange={(e) => setUserName(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 text-sm text-gray-600">Password</label>
//               <input
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
//               <a href="#" className="block text-right text-xs text-cyan-600 mt-2">Forgot Passoword?</a>
//             </div>
//             <button type="button" className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6" onClick={handleLogin}>Login</button>
//           </form>
//           <div className="text-center">
//             <p className="text-sm">Don't have an account? <a href="#" className="text-cyan-600">Register</a></p>
//           </div>
//           <p className="text-xs text-gray-600 text-center mt-10">&copy; 2025 Nepal Turf</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
