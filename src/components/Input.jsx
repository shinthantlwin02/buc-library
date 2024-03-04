import React from 'react';

const Input = ({ label }) => {
  return (
    <div className='relative'>
      <input className='border border-gray-500 rounded-lg w-[400px] px-4 py-4'/>
      <div className='absolute -top-2 left-2 bg-white px-3 text-xl font-medium capitalize'>{label}</div>
    </div>
  );
};

export default Input;
