// import React from "react";
// import { FaHome, FaUsers } from "react-icons/fa";
// import { MdChat } from "react-icons/md";

// // Define the types for the props
// interface SidebarProps {
//   isSidebarOpen: boolean;
//   toggleSidebar: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
//   const menuItems = [
//     { icon: <FaHome />, label: "Dashboard" },
//     { icon: <MdChat />, label: "Chat" },
//     { icon: <FaUsers />, label: "Users" },
//   ];

//   return (
//     <div
//       className={`${
//         isSidebarOpen ? "w-56" : "w-20"
//       } fixed top-20 left-0 h-full bg-white shadow-md transition-all duration-300`}
//     >
//       <ul className="flex flex-col py-4">
//         {menuItems.map((item, index) => (
//           <li key={index}>
//             <span
//               // href="#"
//               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
//             >
//               <span className="inline-flex items-center justify-center h-12 w-16 text-lg text-gray-400">
//                 {item.icon}
//               </span>
//               <span
//                 className={`text-sm font-medium transition-all duration-300 ${
//                   isSidebarOpen ? "opacity-100" : "opacity-0 w-0"
//                 }`}
//               >
//                 {item.label}
//               </span>
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
