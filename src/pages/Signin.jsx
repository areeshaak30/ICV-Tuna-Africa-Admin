import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";

import LeftImage from "../assets/Left-Image.png";
import LogoImage from "../assets/Logo.svg";
import LoginVector from "../assets/Logo-Vector.svg";

export default function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setError("");

    if (email === "test@example.com" && password === "12345678") {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden font-inter">
      <div className="relative flex-1 flex justify-center items-center overflow-hidden">
        <img
          src={LeftImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        />
        <img
          src={LogoImage}
          alt="Logo"
          className="absolute w-4/5 max-w-[400px] md:max-w-[500px] h-auto top-1/2 transform -translate-y-1/2"
        />
      </div>

      <div className="flex-1 flex justify-center items-center bg-white px-6">
        <div className="w-full max-w-[400px] flex flex-col items-center text-center">
          <img
            src={LoginVector}
            alt="Login Vector"
            className="w-[200px] md:w-[250px] h-auto mb-2"
          />

          <h2 className="font-bold text-2xl text-[#1E293B] mb-4">LOGIN</h2>

          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex flex-col text-left">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter E-mail"
                className="w-full h-[45px] px-3 border border-[#CBD5E1] rounded-md text-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 font-inter"
                required
              />
            </div>

            <div className="flex flex-col text-left relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full h-[45px] px-3 pr-10 border border-[#CBD5E1] rounded-md text-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 font-inter"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <HiEye size={22} /> : <HiEyeOff size={22} />}
              </button>
            </div>

            <div className="w-full flex justify-end">
              <Link
                to="/forgot-password"
                className="text-[#0857A3] text-sm underline font-inter"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full h-[45px] bg-[#0857A3] text-white text-lg font-bold rounded-md cursor-pointer transition-all duration-300 hover:bg-blue-800 active:scale-95 mt-0 font-inter"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
