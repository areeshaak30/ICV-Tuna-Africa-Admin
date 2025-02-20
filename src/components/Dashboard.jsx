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
    <div className='mt-3 px-4 max-w-full ml-[250px]  overflow-x-hidden'>
      {/* Heading */}
      <div>
        <h1 className='text-[#0857A3] font-bold text-[28px] sm:text-[36px] leading-[33px] sm:leading-[43px] tracking-[-0.11px]'>Dashboard</h1>
        <h3 className='text-[#1E293B] font-bold text-[20px] sm:text-[24px] leading-[25px] sm:leading-[29px] tracking-[-0.11px] mt-1'>Today Count</h3>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6">
        {cards.map((item, index) => (
          <div key={index} className="flex-1 min-w-[200px] max-w-[232px] h-[114px] shadow-md rounded-lg bg-white">
            <div className="flex justify-between">
              <div>
                <p className='font-medium text-[14px] sm:text-[16px] leading-[17px] sm:leading-[19px] text-[#1E293B] p-2'>{item.titile}</p>
                <p className='font-semibold text-[24px] sm:text-[28px] leading-[29px] sm:leading-[33px] tracking-[1px] text-[#1E293B] px-3 pt-3'>{item.number}</p>
              </div>
              <img src={item.icon} alt="Icon" className='w-[60px] sm:w-[81px] h-[60px] sm:h-[81px] pr-1' />
            </div>
          </div>
        ))}
      </div>

      {/* Second Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap mt-4 gap-4">
        {/* First Card */}
        <div className="flex-1 min-w-[200px] max-w-[232px] h-[54px] bg-white flex justify-between items-center shadow-md rounded-lg">
          <p className='font-semibold text-[14px] sm:text-[16px] leading-[17px] sm:leading-[19px] text-[#1E293B] pl-3'>Total Count</p>
          <p className='font-bold text-[18px] sm:text-[22px] leading-[27px] sm:leading-[33px] tracking-[-0.11px] pr-3 text-[#475569]'>4233</p>
        </div>
        {/* Second Card */}
        <div className="flex-1 min-w-[200px] max-w-[232px] h-[54px] bg-white flex justify-between items-center shadow-md rounded-lg">
          <p className='font-semibold text-[14px] sm:text-[16px] leading-[17px] sm:leading-[19px] text-[#1E293B] pl-3'>Total Count</p>
          <p className='font-bold text-[18px] sm:text-[22px] leading-[27px] sm:leading-[33px] tracking-[-0.11px] pr-3 text-[#475569]'>45326KG</p>
        </div>
      </div>

      {/* Table */}
      <div className="mt-4">
        <Table />
      </div>
    </div>


  )
}
export default Dashboard