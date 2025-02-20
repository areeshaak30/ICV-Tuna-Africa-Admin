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
    <div>
      {/* heading */}
      <div className="flex justify-between">
        <h1 className='text-[#0857A3] font-bold text-[36px] leading-[43px] tracking-[-0.11px] '>User</h1>
        <div className="relative mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-[200px] shadow-md rounded-lg focus:outline-none py-2 pl-4 pr-10 text-[14px] text-[#1E293B] placeholder:text-[#1E293B]"
          />
          <img
            src={search}
            alt="Search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />
        </div>
      </div>
      {/* subheading */}
      <div className="flex justify-between mr-7 mt-4">
        <h3 className='text-[#1E293B] font-bold text-[24px] leading-[29px] tracking-[-0.11px] mt-1'>User List</h3>
        <button onClick={handleAddUser} className='bg-[#0857A3] w-[161px] h-[44px] text-white rounded-[10px] flex items-center justify-center space-x-2'>
          <img src={user} alt="User" className='w-6 h-6' />
          <span>Add User</span>
        </button>
      </div>
      {/* table */}
      <div className="mt-8">
        <table className='bg-white shadow-sm w-[992px]'>
          <thead>
            <tr>
              <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B]  border-b border-[#CBD5E1]'>No</th>
              <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-b border-[#CBD5E1]'>User Name</th>
              <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-b  border-[#CBD5E1]'>Email</th>
              <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-b border-[#CBD5E1]'>Join Date</th>
              <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-b border-[#CBD5E1]'>Status</th>
              <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-b border-[#CBD5E1]'>View Records</th>
              <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-b border-[#CBD5E1]'></th>
            </tr>
          </thead>
          <tbody>
            {userData.map((row) => (
              <tr key={row.no}>
                <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569] border-b border-[#CBD5E1]'>{row.no}</td>
                <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569] border-b border-[#CBD5E1]'>{row.userName}</td>
                <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569] border-b border-[#CBD5E1]'>{row.email}</td>
                <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569] border-b border-[#CBD5E1]'>{row.joinDate}</td>
                <td className={`text-center p-2 font-[400] text-[13px] leading-[22px] border-b border-[#CBD5E1] ${row.status === 'offline' ? 'text-[#EF3826]' : 'text-[#00B69B]'}`}>
                  {row.status}
                </td>
                <td className='text-center p-2 border-b border-[#CBD5E1]'>
                  <img src={row.viewRecords} onClick={() => handleViewRecords(row.no)} alt="Record" className='w-6 h-6 mx-auto cursor-pointer' />
                </td>
                <td onClick={handleDeleteClick} className='text-center cursor-pointer p-2 font-[400] text-[13px] leading-[22px] text-[#EF3826] border-b border-[#CBD5E1]'>Delete User</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
      </div>
      {/* delete modal */}
      {deletemodal && (
        <div className="fixed inset-0 bg-[#B3B3B3] bg-opacity-30 flex justify-center items-start z-40">
          {/* modal container */}
          <div className="relative top-[185px] w-[500px] h-[250px] bg-white rounded-[20px] p-[30px] gap-[16px] z-50">
            <img src={del} alt="" className='w-14 h-14 mx-48 ' />
            <h1 className='text-[#E63946] mt-[22px] font-[600] text-[28px] leading-[50px] tracking-[-0.3px] text-center'>Are you sure to Delete this User?</h1>
            <div className="flex justify-center mt-5 gap-4">
              <button onClick={handleCloseModal} className='text-[#E63946] border border-[#E63946] w-[140px] h-[40px] rounded-[1234px] hover:bg-[#E63946] hover:text-white '>Yes</button>
              <button onClick={handleCloseModal} className='text-white bg-[#0857A3] w-[140px] h-[40px] rounded-[1234px] hover:bg-white hover:text-[#0857A3] hover:border hover:border-[#0857A3] '>No</button>
            </div>
          </div>
        </div>
      )}

      {/* Add user modal */}
      {addUser && (
        <div className="fixed inset-0 bg-[#B3B3B3] bg-opacity-30 flex justify-center items-start z-40">
          {/* Modal container */}
          <div className="relative top-[185px] w-[520px] h-[290px] bg-white rounded-[20px] gap-[16px] z-50 p-5">
            <h1 className="text-[#1E3A5F] font-[700] text-[24px] leading-[29px]">Share with friends</h1>

            {/* Input container */}
            <div className="flex items-center mx-2 border border-[#CBD5E1] rounded-lg w-[460px] h-[45px] px-3 mt-6">
              <input
                type="text"
                placeholder="Enter E-mail"
                className="flex-1 outline-none"
              />
              <a href="#" className="text-[#0857A3] text-sm font-normal leading-4 hover:underline">
                Invite
              </a>
            </div>
            <p className='text-[#1E293B] text-[16px] font-normal leading-[19.36px] text-center my-2'>OR</p>
            <div className="flex justify-center">
              {/* copy link */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-[#EFE9E9] rounded-[12px]">
                  <img src={copy} alt="Copy" className="w-5 h-5 cursor-pointer" />
                </div>
                <p className="text-[#4D5C6D] text-[12px] font-normal leading-[14px] text-center mt-2">
                  Copy Link
                </p>
              </div>
              {/* share */}
              <div className="flex flex-col items-center ml-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={whatsapp} alt="WhatsApp" className="cursor-pointer" />
                </div>
                <p className="text-[#4D5C6D] text-[12px] font-normal leading-[14px] text-center pl-2">
                  WhatsApp
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-3 gap-4 ">
              <button
                onClick={handleCloseUser}
                className="text-white bg-[#0857A3] w-[460px] h-[45px] rounded-lg"
              >
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
