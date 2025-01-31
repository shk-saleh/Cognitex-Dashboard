import React from 'react';

const Header = ({ onFilterChange }) => {
  return (
    <div className="flex justify-between items-center py-3 mb-8 border-b border-[#1c3033b2]">
      <h1 className="text-3xl font-md">Overview</h1>
      <select onChange={onFilterChange} className=" border-2 rounded-lg border-[#5f949cb2] bg-[#1c3033b2] text-gray-200 p-2">
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
      </select>
    </div>
  );
};

export default Header;