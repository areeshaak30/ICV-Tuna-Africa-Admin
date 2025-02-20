import React, { useState } from 'react'
import search from '../assets/search.svg'
import user from '../assets/user.svg'
import { userData } from '../constants/dashboard'
import { useNavigate } from 'react-router-dom'
import del from '../assets/delUser.svg'
import whatsapp from '../assets/whatsapp.svg'
import copy from '../assets/copy.svg'
import Pagination from './Pagination'

const User = () => {
  const [deletemodal, setDeleteModal] = useState(false)
  const [addUser, setAddUser] = useState(false)
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = 10;

  const handleDeleteClick = () => {
    setDeleteModal(true);
  }

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleCloseModal = () => {
    setDeleteModal(false);
  }

  const handleAddUser = () => {
    setAddUser(true);
  }

  const handleCloseUser = () => {
    setAddUser(false);
  }

  const navigate = useNavigate();
  const handleViewRecords = (userId) => {
    navigate(`/users/userRecords/${userId}`);
  };
  return (
    <div className="px-4 py-2 ml-[250px]">
      {/* heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
        <h1 className="text-[#0857A3] font-bold text-[28px] md:text-[36px] leading-[34px] md:leading-[43px]">
          User
        </h1>
        <div className="relative w-full md:w-[250px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full shadow-md rounded-lg focus:outline-none py-2 pl-4 pr-10 text-[14px] text-[#1E293B] placeholder:text-[#1E293B]"
          />
          <img
            src={search}
            alt="Search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />
        </div>
      </div>

      {/* subheading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 space-y-2 md:space-y-0">
        <h3 className="text-[#1E293B] font-bold text-[20px] md:text-[24px] leading-[26px] md:leading-[29px]">
          User List
        </h3>
        <button
          onClick={handleAddUser}
          className="bg-[#0857A3] w-full md:w-[161px] h-[44px] text-white rounded-[10px] flex items-center justify-center space-x-2"
        >
          <img src={user} alt="User" className="w-6 h-6" />
          <span>Add User</span>
        </button>
      </div>

      {/* table */}
      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full bg-white shadow-sm">
          <thead>
            <tr>
              {['No', 'User Name', 'Email', 'Join Date', 'Status', 'View Records', ''].map((heading, index) => (
                <th
                  key={index}
                  className="font-[500] text-[14px] py-2 text-[#1E293B] border-b border-[#CBD5E1] text-center"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userData.map((row) => (
              <tr key={row.no}>
                <td className="text-center p-2 text-[13px] text-[#475569] border-b border-[#CBD5E1]">
                  {row.no}
                </td>
                <td className="text-center p-2 text-[13px] text-[#475569] border-b border-[#CBD5E1]">
                  {row.userName}
                </td>
                <td className="text-center p-2 text-[13px] text-[#475569] border-b border-[#CBD5E1]">
                  {row.email}
                </td>
                <td className="text-center p-2 text-[13px] text-[#475569] border-b border-[#CBD5E1]">
                  {row.joinDate}
                </td>
                <td
                  className={`text-center p-2 border-b border-[#CBD5E1] ${row.status === 'offline' ? 'text-[#EF3826]' : 'text-[#00B69B]'
                    }`}
                >
                  {row.status}
                </td>
                <td className="text-center p-2 border-b border-[#CBD5E1]">
                  <img
                    src={row.viewRecords}
                    onClick={() => handleViewRecords(row.no)}
                    alt="Record"
                    className="w-6 h-6 mx-auto cursor-pointer"
                  />
                </td>
                <td
                  onClick={handleDeleteClick}
                  className="text-center cursor-pointer p-2 text-[#EF3826] border-b border-[#CBD5E1]"
                >
                  Delete User
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
      </div>

      {/* delete modal */}
      {deletemodal && (
        <div className="fixed inset-0 bg-[#B3B3B3] bg-opacity-30 flex justify-center items-center z-40">
          <div className="w-[90%] md:w-[500px] bg-white rounded-[20px] p-[30px]">
            <img src={del} alt="" className="w-14 h-14 mx-auto" />
            <h1 className="text-[#E63946] mt-[22px] font-[600] text-[24px] text-center">
              Are you sure to Delete this User?
            </h1>
            <div className="flex justify-center mt-5 space-x-4">
              <button
                onClick={handleCloseModal}
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

      {/* Add user modal */}
      {addUser && (
        <div className="fixed inset-0 bg-[#B3B3B3] bg-opacity-30 flex justify-center items-center z-40">
          <div className="w-[90%] md:w-[520px] bg-white rounded-[20px] p-5">
            <h1 className="text-[#1E3A5F] font-[700] text-[24px]">Share with friends</h1>
            <div className="flex items-center border border-[#CBD5E1] rounded-lg w-full h-[45px] px-3 mt-6">
              <input type="text" placeholder="Enter E-mail" className="flex-1 outline-none" />
              <a href="#" className="text-[#0857A3] text-sm hover:underline">
                Invite
              </a>
            </div>
            <p className="text-[#1E293B] text-[16px] text-center my-2">OR</p>
            <div className="flex justify-center mt-3">
              <button onClick={handleCloseUser} className="text-white bg-[#0857A3] w-full h-[45px] rounded-lg">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default User