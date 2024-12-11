import React from "react";

const JobsCard = ({ type, title, description, salary }) => {
  return (
    <div className='bg-white rounded-lg mt-4 p-4'>
      <div className='text-start'>
        <span className='text-xs text-gray-600'>{type}</span>
        <p className='m-0 text-sm font-bold mb-3'>{title}</p>

        <p className='line-clamp-2 text-sm mb-5 text-gray-500'>{description}</p>
      </div>
      <div className='flex items-center justify-between mt-2'>
        <div className='flex items-center'>
          <p className='ml-1 text-sm text-cyan-700'>R{salary}pm</p>
        </div>
        <p className='py-2 px-4 rounded-md text-sm bg-red-100 text-red-600'>
          Read more
        </p>
      </div>
    </div>
  );
};

export default JobsCard;
