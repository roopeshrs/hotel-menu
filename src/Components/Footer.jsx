import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const Footer = () => {
  return (
    <div className='bg-[#324158] shadow-md text-white flex justify-between px-12 sm:px-3 py-4 lg:flex-col lg:items-start lg:gap-12'>
        <div className='flex-1 flex justify-center'>
            <div className='flex flex-col gap-6'>
                <h3 className='text-xl font-bold tracking-widest'>USEFUL LINKS</h3>
                <ul className='flex flex-wrap text-md gap-8'>
                    <li className='w-28 cursor-pointer'>Guest Policy</li>
                    <li className='w-28 cursor-pointer'>T & C</li>
                    <li className='w-28 cursor-pointer'>About Us</li>
                    <li className='w-28 cursor-pointer'>Privacy Policy</li>
                    <li className='w-28 cursor-pointer'>Careers</li>
                    <li className='w-28 cursor-pointer'>Contact Us</li>
                    <li className='w-28 cursor-pointer'>Cookie Policy</li>
                    <li className='w-28 cursor-pointer'>FAQ's</li>
                    <li className='w-28 cursor-pointer'>Destinations</li>
                    <li className='w-28 cursor-pointer'>COVID-19 FAQs</li>
                </ul>
            </div>
        </div>
        <div className='flex-1 flex justify-center'>
            <div className='flex flex-col gap-6'>
                <h3 className='text-xl font-bold tracking-widest'>SUBSCRIBE</h3>
                <div className='flex gap-3'>
                    <div className='flex flex-col gap-2'>
                        <input type='text' className='bg-transparent outline-none border border-gray-100 border-opacity-20 px-3 py-2' />
                        <input type='email' className='bg-transparent outline-none border border-gray-100 border-opacity-20 px-3 py-2' />
                    </div>
                    <div className='bg-[#999997] flex items-center justify-center w-10 cursor-pointer'>
                        <ArrowForwardIosIcon style={{color: '#324158'}} />
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className='w-5 h-5' />
                    <p>I accept Terms & Conditions</p>
                </div>
            </div>
        </div>
        <div className='flex-1 flex justify-center'>
            <div className='flex flex-col gap-6'>
                <h3 className='text-xl font-bold tracking-widest'>SOCIAL</h3>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 flex items-center justify-center bg-[#999997] rounded-full cursor-pointer'><FacebookIcon style={{color: '#324158', fontSize: '1.8rem'}} /></div>
                    <div className='w-10 h-10 flex items-center justify-center bg-[#999997] rounded-full cursor-pointer'><InstagramIcon style={{color: '#324158', fontSize: '1.8rem'}} /></div>
                    <div className='w-10 h-10 flex items-center justify-center bg-[#999997] rounded-full cursor-pointer'><TwitterIcon style={{color: '#324158', fontSize: '1.8rem'}} /></div>
                    <div className='w-10 h-10 flex items-center justify-center bg-[#999997] rounded-full cursor-pointer'><YouTubeIcon style={{color: '#324158', fontSize: '1.8rem'}} /></div>
                    <div className='w-10 h-10 flex items-center justify-center bg-[#999997] rounded-full cursor-pointer'><PinterestIcon style={{color: '#324158', fontSize: '1.8rem'}} /></div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='bg-blue-700 w-fit px-1 rounded-md flex items-center gap-1 cursor-pointer text-sm'><ThumbUpIcon style={{fontSize: '1rem'}} /> <span className='border-l border-l-[#324158] pl-2'>Like 2</span></div>
                    <div className='bg-[#566a97] w-fit px-1 rounded-md flex items-center gap-1 cursor-pointer text-sm'><FacebookIcon style={{fontSize: '1rem'}} /> <span className='border-l border-l-[#324158] pl-2'>Share</span></div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>SOLES ON WHEELS © 2021</p>
                    <p className='text-sm'>All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer