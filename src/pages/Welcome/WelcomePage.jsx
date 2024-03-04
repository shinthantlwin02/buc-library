import React from 'react';

const WelcomePage = () => {
  return (
    <div className='overflow-hidden h-screen'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl font-bold mb-3'>BUC LIBRARY</h1>
        <p className='text-lg font-medium text-gray-500'>
          “Lost in stories, found in libraries”
        </p>
      </div>

      <div className='flex items-center justify-between container mx-auto mb-5'>
        <img src='/icons/left-arrow.svg' className='w-10' />
        <img src='/icons/right-arrow.svg' className='w-10' />
      </div>

      <div className='w-full flex justify-between relative'>
        <img
          src='/images/welcome/image1.png'
          className='w-[300px] h-[500px] -ml-[150px] mt-[200px]'
        />
        <img
          src='/images/welcome/image2.png'
          className='w-[300px] h-[500px] mt-[100px]'
        />
        <img src='/images/welcome/image3.png' className='w-[320px] h-[500px]' />
        <img
          src='/images/welcome/image4.png'
          className='w-[300px] h-[500px] mt-[100px]'
        />
        <img
          src='/images/welcome/image1.png'
          className='w-[300px] h-[500px] -mr-[150px]  mt-[200px]'
        />
      </div>
    </div>
  );
};

export default WelcomePage;
