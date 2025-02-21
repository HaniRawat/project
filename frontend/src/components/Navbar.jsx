import { CiHome } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiUser } from "react-icons/ci";


function Navbar() {
  return (
      <nav className="bg-[#3A2F42] w-1/10 h-screen flex flex-col items-center justify-between py-4 space-y-6">

        {/* LOGO */}

        <div className="w-15 h-15 rounded-full bg-white flex items-center justify-center">
          <img src="/logo.png" alt="Logo" className="w-20 h-20 rounded-full object-cover" />
        </div>

        {/* NAVIGATION LINKS */}

        <div className="flex flex-col items-center justify-center space-y-6">
        <button className="w-15 h-15 cursor-pointer flex items-center justify-center">
        <CiHome className="w-10 h-10 text-white" />
        </button>
        <button className="w-15 h-15 cursor-pointer rounded-full flex items-center justify-center">
          <CiBookmark className="w-10 h-10 text-white" />
        </button>
        <button className="w-15 h-15 cursor-pointer rounded-full flex items-center justify-center">
          <CiUser className="w-10 h-10 text-white" />
        </button>
      </div>

      {/* Login/SignUp */}
      <div className="flex flex-col items-center justify-center">
   
      <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
      border-blue-600
      border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
      active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
        Login/SignUp
      </button>

      </div>
      </nav>
  )
}

export default Navbar

