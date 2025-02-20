import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LeftImage from "../assets/Left-Image.png";
import LogoImage from "../assets/Logo.svg";
import ResetVector from "../assets/Reset-Vector.svg";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      alert("Please fill in both fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log("Password reset successful");
    navigate("/password-changed");
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="relative flex-1 flex justify-center items-center overflow-hidden min-h-[300px] bg-gray-100">
        <img
          src={LeftImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        />
        <img
          src={LogoImage}
          alt="Logo"
          className="w-4/5 max-w-[300px] md:max-w-[500px] h-auto relative"
        />
      </div>

      <div className="flex-1 flex justify-center items-center bg-white p-5">
        <div className="w-full max-w-[400px] md:max-w-[500px] flex flex-col items-center gap-4 text-center">
          <img
            src={ResetVector}
            alt="Reset Password Vector"
            className="w-[200px] md:w-[300px] h-auto"
          />
          <h2 className="font-inter font-bold text-2xl md:text-3xl text-gray-800">
            Reset Password
          </h2>
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter New Password"
              className="w-full h-12 px-3 border border-gray-300 rounded-lg text-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
              className="w-full h-12 px-3 border border-gray-300 rounded-lg text-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300"
              required
            />
            <button
              type="submit"
              className="w-full h-12 bg-blue-700 text-white text-lg font-bold rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-800 active:scale-95"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
