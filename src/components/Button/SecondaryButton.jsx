import React from 'react'

const SecondaryButton = ({className, children, ...props}) => {
  return (
    <button className={`${className} bg-[#101D3D] text-white px-3 py-2 text-lg font-semibold flex justify-center items-center border border-gray-400 shadow-md shadow-gray-400`} {...props}>
        {children}
    </button>
  )
}

export default SecondaryButton
