import React, { useEffect, useState } from 'react'
import { cards, table } from '../constants/dashboard'
import Table from './Table';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Ascending');

  const handleSelectClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  useEffect(() => {
    setIsOpen(false);
  }, [selectedOption]);


  return (
    <div className='mt-3'>
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
      <Table />
    </div>
  )
}
export default Dashboard