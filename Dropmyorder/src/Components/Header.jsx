import React from 'react'

const Header = () => {
  return (
    //add a img to header
    <div className=" relative w-full h-[32rem] border border-black">
    <div className="absolute inset-0 bg-black opacity-50 object-cover"></div>
        <img className='w-full h-full object-cover object-bottom filter z-10 ' src="https://imgur.com/PAHTGmR.png" alt="Docplanner " />
    </div>

  )
}

export default Header