import React from 'react'

const PrimaryButton = ({className, children, ...props}) => {
    return (
      <button className={`${className} bg-[#D9D9D9] text-black px-3 py-2 text-lg font-semibold flex justify-center items-center shadow-md shadow-gray-400`} {...props}>
          {children}
      </button>
    )
  }

export default PrimaryButton
