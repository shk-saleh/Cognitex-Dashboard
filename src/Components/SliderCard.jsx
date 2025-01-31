import React from 'react'
import ProgressCard from './ProgressCard'

export const SliderCard = ({ title, value, progressVal }) => {
    return (
        <div className="bg-[#142124b2] p-4 rounded-lg shadow-lg relative">
          <h2 className="text-md font-light text-neutral-300">{title}</h2>
            <div className='flex flex-row justify-between'>
                <p className="text-4xl py-2 font-normal">{value}</p>
                <ProgressCard progressVal={progressVal} />
            </div>
        </div>
    )
}
