import React, { useState } from "react";
import admin from '../assets/admin.jfif'

const Settings = () => {
  const [profileImage, setProfileImage] = useState(admin);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "Female",
  });
  const [errors, setErrors] = useState({});

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is Required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is Required";
    if (!formData.email.trim()) newErrors.email = "E-mail is Required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is Required";
    if (!formData.dob.trim()) newErrors.dob = "Date of Birth is Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div className="">
      <h1 className='text-[#0857A3] font-bold text-[36px] leading-[43px] tracking-[-0.11px] '>Settings</h1>
      <h3 className='text-[#1E293B] font-bold text-[24px] leading-[29px] tracking-[-0.11px] mt-1'>Settings</h3>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="w-[970px] h-[450px] my-4 bg-white rounded-[14px] shadow-sm p-4 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-[60px] h-[60px] rounded-full mb-2 object-cover"
            />
            <label className="text-[#4379EE] text-sm font-semibold leading-4 tracking-[0.54px] cursor-pointer">
              Edit Photo
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-5 w-full px-20">
            <div className="flex flex-col w-[90%]">
              <label className="block text-[#1E293B] font-semibold text-sm mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-[38px] bg-[#F5F6FA] border border-[#D5D5D5] rounded-[4px] px-3"
                placeholder="Sean"
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs">{errors.firstName}</span>
              )}
            </div>

            <div className="flex flex-col w-[90%]">
              <label className="block text-[#1E293B] font-semibold text-sm mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-[38px] bg-[#F5F6FA] border border-[#D5D5D5] rounded-[4px] px-3"
                placeholder="Dennis"
              />
              {errors.lastName && (
                <span className="text-red-500 text-xs">{errors.lastName}</span>
              )}
            </div>

            <div className="flex flex-col w-[90%]">
              <label className="block text-[#1E293B] font-semibold text-sm mb-1">
                Your email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[38px] bg-[#F5F6FA] border border-[#D5D5D5] rounded-[4px] px-3"
                placeholder="Seandennis@yahoo.com"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col w-[90%]">
              <label className="block text-[#1E293B] font-semibold text-sm mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-[38px] bg-[#F5F6FA] border border-[#D5D5D5] rounded-[4px] px-3"
                placeholder="546-933-2772"
              />
              {errors.phone && (
                <span className="text-red-500 text-xs">{errors.phone}</span>
              )}
            </div>

            <div className="flex flex-col w-[90%]">
              <label className="block text-[#1E293B] font-semibold text-sm mb-1">
                Date of Birth
              </label>
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full h-[38px] bg-[#F5F6FA] border border-[#D5D5D5] rounded-[4px] px-3"
                placeholder="11-08-1995"
              />
              {errors.dob && (
                <span className="text-red-500 text-xs">{errors.dob}</span>
              )}
            </div>

            <div className="flex flex-col w-[40%]">
              <label className="block text-[#1E293B] font-semibold text-sm mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full h-[38px] bg-[#F5F6FA] border border-[#D5D5D5] rounded-[4px] px-3"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="w-full flex justify-center mt-10">
            <button
              onClick={handleSubmit}
              className="w-[517px] h-[38px] bg-[#0857A3] text-white font-semibold rounded-[8px]"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;