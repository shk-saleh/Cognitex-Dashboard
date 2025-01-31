import React from 'react';
import ProgressCard from './ProgressCard';
  

const GuageCard = ({ title, value1, value2, progressVal1, progressVal2}) => {
  return (
    <div className="bg-[#142124b2] p-4 rounded-lg shadow-lg relative">
      <h2 className="text-md font-light text-neutral-300">{title}</h2>
        <div className='flex flex-row justify-between'>
            <ProgressCard progressVal={progressVal1} />
            <ProgressCard progressVal={progressVal2} />
        </div>
    </div>
  );
};

export default GuageCard;