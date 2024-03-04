import React from 'react';
import BUC from '/images/buc.png';
import Input from '../../components/Input';

const Login = () => {
  return (
    <div className='p-10 font-Poppins h-screen'>
      <div className='flex'>
        <div className='flex flex-col items-center justify-center gap-4 w-full'>
          <img src={BUC} />
          <h1 className='text-[45px] font-medium'>Welcome to BUC library </h1>
          <p className='text-xl font-light'>
            Unlock the world's wonders with each turn of the page
          </p>
        </div>
        <div className='w-full flex flex-col gap-8 items-center'>
          <h1 className='text-xl font-medium'>Sign in to your account</h1>
          <Input label='email' />
          <Input label='password' />
        </div>
      </div>
    </div>
  );
};

export default Login;
