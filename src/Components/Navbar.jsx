import React, {useState} from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='flex items-center justify-between px-12 sm:px-3 shadow-md h-[10vh] fixed bg-white w-full z-50'>
        <div className='flex flex-col items-end w-fit cursor-pointer'>
            <div className='flex items-center gap-2'>
                <img src='./logo.webp' />
                <h1 className='text-[#324158] uppercase font-extrabold tracking-widest text-2xl'>SOLES ON Wheels</h1>
            </div>
            <span className='text-[#324158] text-xs'>The Backpacker's Hostel</span>
        </div>
        <div className='xl:hidden'>
            <ul className='flex items-center gap-6 text-sm'>
                <li className='hover:bg-[#324158] hover:text-white px-4 py-2 cursor-pointer'>HOME</li>
                <li className='hover:bg-[#324158] hover:text-white px-4 py-2 cursor-pointer'>HOSTELS</li>
                <li className='hover:bg-[#324158] hover:text-white px-4 py-2 cursor-pointer'>ABOUT US</li>
                <li className='hover:bg-[#324158] hover:text-white px-4 py-2 cursor-pointer'>FAQ's</li>
                <li className='hover:bg-[#324158] hover:text-white px-4 py-2 cursor-pointer'>CAREERS</li>
                <li className='hover:bg-[#324158] hover:text-white px-4 py-2 cursor-pointer'>CONTACT</li>
                <li className='cursor-default'>More</li>
            </ul>
        </div>
        <div className='flex items-center gap-3'>
            <div onClick={()=>setShowMenu(!showMenu)} className='hidden xl:flex cursor-pointer'><MenuIcon /></div>
            <div className='flex items-center gap-2 cursor-pointer'>
                <AccountCircleIcon style={{fontSize: '2rem'}} />
                <span>Log In</span>
            </div>
        </div>
        {
            showMenu && (
            <div className='absolute top-[10vh] left-0 right-0 h-[90vh]'>
            <ul className='flex flex-col items-center justify-evenly text-3xl bg-white h-full'>
                    <li className='text-[#324158] cursor-pointer hover:border-b-2 hover:border-[#324158]'>HOME</li>
                    <li className='text-[#324158] cursor-pointer hover:border-b-2 hover:border-[#324158]'>HOSTELS</li>
                    <li className='text-[#324158] cursor-pointer hover:border-b-2 hover:border-[#324158]'>ABOUT US</li>
                    <li className='text-[#324158] cursor-pointer hover:border-b-2 hover:border-[#324158]'>FAQ's</li>
                    <li className='text-[#324158] cursor-pointer hover:border-b-2 hover:border-[#324158]'>CAREERS</li>
                    <li className='text-[#324158] cursor-pointer hover:border-b-2 hover:border-[#324158]'>CONTACT</li>
                </ul>
            </div>
            )
        }
    </div>
  )
}

export default Navbar