import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import WelcomePage from '../Welcome/WelcomePage';

const Home = () => {
  return (
    <div className='h-screen overflow-hidden'>
      <Navbar />
      <WelcomePage />
    </div>
  );
};

export default Home;
