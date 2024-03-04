import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../Button/PrimaryButton'
import SecondaryButton from '../Button/SecondaryButton'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between container mx-auto py-4'>
      <img src="/icons/logo.svg" className='w-20 h-20 object-cover'/>
      <div className='flex gap-3 items-center'>
        <Link to={'/about'} className='mr-4 font-semibold text-lg'>About</Link>
        <PrimaryButton className={'rounded-xl'}>Sign in</PrimaryButton>
        <SecondaryButton className={'rounded-xl'}>Sign up</SecondaryButton>
      </div>
    </div>
  )
}

export default Navbar
