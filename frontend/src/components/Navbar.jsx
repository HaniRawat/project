import React from 'react'

function Navbar() {
  return (
      <nav className="bg-[#3A2F42] w-1/6 h-screen">
        <ul className="flex flex-col gap-3 p-3 justify-items-center ">
          <li className=""><img src = "\public\homeIcon.jpg" className='w-1/4 h-1/4 rounded-3xl object-cover'></img></li>
          <li className=""><img src = "\public\bookMark-noBg.png" className='w-1/6 h-1/6 '></img></li>
          <li className=""><img src = "\public\profileIcon-noBg.png" className='w-1/6 h-1/6 '></img></li>
        </ul>
      </nav>
  )
}

export default Navbar