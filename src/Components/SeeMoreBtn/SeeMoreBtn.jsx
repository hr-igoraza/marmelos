import React from 'react'

const SeeMoreBtn = ({ onClick}) => {
  return (
    <>
    <button
    onClick={onClick}
    className='flex items-center gap-2 bg-primary-green text-white py-2 px-10 fs-20 transform hover:scale-[1.01] duration-300 cursor-pointer '>
        See more
    </button>
    </>
  )
}

export default SeeMoreBtn