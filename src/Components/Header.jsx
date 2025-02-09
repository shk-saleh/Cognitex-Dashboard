import React from 'react';

const Header = ({ onFilterChange, currentSection }) => {
  // Function to capitalize first letter
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Only show filter for overview section
  const showFilter = currentSection === 'overview';

  return (
    <div className="flex justify-between items-center py-3 mb-8 border-b border-[#1c3033b2]">
      <h1 className="text-3xl font-md">{capitalizeFirstLetter(currentSection)}</h1>
      {showFilter && (
        <select onChange={onFilterChange} className="border-2 rounded-lg border-[#5f949cb2] bg-[#1c3033b2] text-gray-200 p-2">
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      )}
    </div>
  );
};

export default Header;