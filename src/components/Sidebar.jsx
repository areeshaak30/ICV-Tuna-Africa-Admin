import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import users from '../assets/users.svg';
import records from '../assets/records.svg';
import settings from '../assets/settings.svg';
import logout from '../assets/logout.svg';
import del from "../assets/delUser.svg";
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
    const [active, setActive] = useState("Dashboard");
    const navigate = useNavigate();

    const [logoutmodal, setLogoutModal] = useState(false);
    const handlelogoutClick = () => {
        setLogoutModal(true);
      };

      const handleCloseModal = () => {
        setLogoutModal(false);
      };

      const handleLogoutNavigate = ()=>{
        navigate('/')
      }

    // Menu items
    const menuItems = [
        { name: "Dashboard", icon: <RxDashboard size={20} className='text-[#475569]' /> },
        { name: "User", icon: <img src={users} alt="Users" className="w-5 h-5" /> },
        { name: "Records", icon: <img src={records} alt="Records" className="w-6 h-6" /> }
    ];
    const handleNavigation = (item) => {
        setActive(item);
        if (item === "Dashboard") {
            navigate("/dashboard");
        } else if (item === "User") {
            navigate("/users");
        } else if (item === "Records") {
            navigate("/records");
        } else if (item === "Settings") {
            navigate("/settings");
        }
    };
    return (
        <div className="w-[240px] h-screen flex flex-col bg-white shadow-lg fixed top-0 left-0 overflow-y-auto">
            {/* Logo */}
            <div className="mt-10 flex justify-center">
                <img src={Logo} alt="Logo" className="w-[180px] h-[48px]" />
            </div>
            {/* Menu Items */}
            <nav className="flex flex-col gap-2 mt-10 flex-grow">
                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => handleNavigation(item.name)}
                        className={`flex items-center w-[175px] h-[50px] justify-start gap-3 p-3 rounded-md transition ml-5
                                ${active === item.name
                                ? "bg-[#0857A3] text-white"
                                : "text-black"
                            }`}
                    >
                        <span
                            className={`${active === item.name ? "filter brightness-0 invert" : ""
                                }`}
                        >
                            {item.icon}
                        </span>
                        <span>{item.name}</span>
                    </button>
                ))}
            </nav>
            {/* Bottom Menu */}
            <div className="mt-auto mb-3">
                <hr className="text-[#CBD5E1]" />
                <button
                    onClick={() => handleNavigation("Settings")}
                    className={`flex items-center w-[175px] h-[50px] justify-start gap-3 p-3 rounded-md transition ml-5
                            ${active === "Settings"
                            ? "bg-[#0857A3] text-white"
                            : "text-black"
                        }`}
                >
                    <span
                        className={`${active === "Settings" ? "filter brightness-0 invert" : ""
                            }`}
                    >
                        <img src={settings} alt="Settings" className="w-5 h-5" />
                    </span>
                    <span>Settings</span>
                </button>
                {/* Logout Button */}
                <button
                    onClick={handlelogoutClick}
                    className="flex items-center w-[192px] h-[50px] justify-start gap-3 p-3 rounded-md transition ml-5 text-red-500"
                >
                    <img src={logout} alt="Logout" className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>
           {/* logout modal  */}
            {logoutmodal && (
                   <div className="fixed inset-0 bg-[#B3B3B3] bg-opacity-30 flex justify-center items-center z-40">
                     <div className="w-[90%] md:w-[500px] bg-white rounded-[20px] p-[30px]">
                       <img src={del} alt="" className="w-14 h-14 mx-auto" />
                       <h1 className="text-[#E63946] mt-[22px] font-[600] text-[24px] text-center">
                         Do you really want to Logout?
                       </h1>
                       <div className="flex justify-center mt-5 space-x-4">
                         <button
                           onClick={handleLogoutNavigate}
                           className="text-[#E63946] border border-[#E63946] w-[140px] h-[40px] rounded-[1234px] hover:bg-[#E63946] hover:text-white"
                         >
                           Yes
                         </button>
                         <button
                           onClick={handleCloseModal}
                           className="text-white bg-[#0857A3] w-[140px] h-[40px] rounded-[1234px] hover:bg-white hover:text-[#0857A3] hover:border hover:border-[#0857A3]"
                         >
                           No
                         </button>
                       </div>
                     </div>
                   </div>
                 )}
        </div>
    );
};
export default Sidebar;