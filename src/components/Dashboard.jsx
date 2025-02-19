import React, { useState } from 'react'
import { cards, table } from '../constants/dashboard'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import search from '../assets/search.svg'

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Ascending');

  const handleSelectClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setTimeout(() => {
      setIsOpen(false);
    }, 0);
  };


  return (
    <div>
      {/* heading */}
      <div className="">
        <h1 className='text-[#0857A3] font-bold text-[36px] leading-[43px] tracking-[-0.11px] '>Dashboard</h1>
        <h3 className='text-[#1E293B] font-bold text-[24px] leading-[29px] tracking-[-0.11px] mt-1'>Today Count</h3>
      </div>
      {/* Cards */}
      <div className="flex gap-4 mt-6">
        {cards.map((item) => {
          return (
            <div className="w-[232px] h-[114px] shadow-md rounded-lg bg-white">
              <div className="flex justify-between">
                <div className="">
                  <p className='font-medium text-[16px] leading-[19px] text-[#1E293B] p-2 '>{item.titile}</p>
                  <p className='font-semibold text-[28px] leading-[33px] tracking-[1px] text-[#1E293B] px-3 pt-3'>{item.number}</p>
                </div>
                <img src={item.icon} alt="Fish" className='w-[81px] h-[81px] pr-1' />
              </div>
            </div>
          )
        })}
      </div>
      {/* second cards */}
      <div className="flex mt-2 gap-5">
        {/* first */}
        <div className="w-[232px] h-[54px] bg-white flex justify-between items-center shadow-md rounded-lg">
          <p className='font-semibold text-[16px] leading-[19px] text-[#1E293B] pl-3'>Total Count</p>
          <p className='font-bold text-[22px] leading-[33px] tracking-[-0.11px] pr-3 text-[#475569]'>4233</p>
        </div>
        {/* second */}
        <div className="w-[232px] h-[54px] bg-white flex justify-between items-center shadow-md rounded-lg">
          <p className='font-semibold text-[16px] leading-[19px] text-[#1E293B] pl-3'>Total Count</p>
          <p className='font-bold text-[22px] leading-[33px] tracking-[-0.11px] pr-3 text-[#475569]'>45326KG</p>
        </div>
      </div>

      {/* table */}
      <div className="mt-7">
        <div className="flex justify-between mr-3">
          <div className="">
            <p className='font-bold text-[24px] leading-[29px] tracking-[-0.11px]'>Today Entries</p>
          </div>
          <div className="flex">
            <div className="flex items-center w-[191px] h-[37px] shadow-md bg-white rounded-lg whitespace-nowrap">
              <p className='font-normal text-[14px] leading-[16px] pl-3'>Sort By</p>
              <div className="h-[30px] border-l border-[#CBD5E1] mx-3"></div>
              <div
                className='relative'
                onClick={handleSelectClick}
              >
                <div className="flex justify-between items-center w-full px-3 py-2 cursor-pointer rounded-lg  hover:text-white">
                  <span className="text-[#1E293B] font-medium text-[14px]">{selectedOption}</span>
                  <div>
                    {isOpen ? (
                      <FiChevronUp className="w-4 h-4 text-[#1E293B]" />
                    ) : (
                      <FiChevronDown className="w-4 h-4 text-[#1E293B]" />
                    )}
                  </div>
                </div>
                {isOpen && (
                  <div className="absolute left-0 top-full w-[112px] bg-[#F5F6FA] shadow-md rounded-lg">
                    <div
                      className="p-2 text-[#1E293B] font-medium text-[14px] cursor-pointer hover:bg-[#0857A3] hover:text-white"
                      onClick={() => handleOptionClick('Ascending')}
                    >
                      Ascending
                    </div>
                    <div
                      className="p-2 text-[#1E293B] font-medium text-[14px] cursor-pointer hover:bg-[#0857A3] hover:text-white"
                      onClick={() => handleOptionClick('Descending')}
                    >
                      Descending
                    </div>
                  </div>
                )}
              </div>
            </div>
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
        </div>
        {/* table content */}
        <div className="mt-4 overflow-x-auto">
          <table className='bg-white shadow-sm w-[992px] '>
            <thead>
              <tr>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-r border-b border-[#CBD5E1]'>No</th>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-r border-b border-[#CBD5E1]'>User Name</th>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-r border-b  border-[#CBD5E1]'>Vessel Name</th>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-r border-b border-[#CBD5E1]'>Offload Date</th>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-r border-b border-[#CBD5E1]'>Market Type</th>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-r border-b border-[#CBD5E1]'>L.F</th>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-r border-b border-[#CBD5E1]'>Weight</th>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-r border-b border-[#CBD5E1]'>B.E</th>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-r border-b border-[#CBD5E1]'>Weight</th>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-r border-b border-[#CBD5E1]'>Y.F</th>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-r border-b border-[#CBD5E1]'>Weight</th>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-r border-b border-[#CBD5E1]'>SB.F</th>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-r border-b border-[#CBD5E1]'>Weight</th>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-r border-b border-[#CBD5E1]'>T.Count</th>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-r border-b border-[#CBD5E1]'>T.Weight</th>
                <th className='font-[500] text-[14px] leading-[22px] py-2 text-[#1E293B] border-b border-[#CBD5E1]'>Download</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row) => (
                <tr key={row.no}>
                  <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569] border-r border-[#CBD5E1]'>{row.no}</td>
                  <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569]'>{row.username}</td>
                  <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569]'>{row.VesselName}</td>
                  <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569]'>{row.offloadDate}</td>
                  <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569]'>{row.MarketType}</td>
                  <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569]'>{row.LongFin}</td>
                  <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569]'>{row.TWeight}</td>
                  <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569]'>{row.BigEye}</td>
                  <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569]'>{row.TWeight}</td>
                  <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569]'>{row.YellowFin}</td>
                  <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569]'>{row.SBlueFin}</td>
                  <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569]'>{row.TWeight}</td>
                  <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569]'>{row.TCount}</td>
                  <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569]'>{row.TWeight}</td>
                  <td className='text-center p-2 font-[400] text-[13px] leading-[22px] text-[#475569]'>{row.TWeight}</td>
                  <td className='text-center p-2'><img src={row.DetailedView} alt="" className='pl-4' /></td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
