import React, { useState } from 'react'
import search from '../assets/search.svg'
import { table } from '../constants/dashboard'
import Pagination from './Pagination'

const UserRecords = () => {
    const [currentPage, setCurrentPage] = useState(0);
      const pageCount = 10;

      const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
      };

    return (
        <div className='ml-[270px]'>
            {/* heading */}
            <div className="flex justify-between pt-2">
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
            <h3 className='text-[#1E293B] font-bold text-[24px] leading-[29px] tracking-[-0.11px] mt-1'>User Records</h3>

            {/* table */}
            <div className="mt-6 overflow-x-auto">
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
                                <td className='text-center p-2'>
                                    <img src={row.DetailedView} alt="" className='w-6 h-6 mx-auto' />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
            </div>
        </div>
    )
}

export default UserRecords
