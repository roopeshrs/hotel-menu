import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const About = () => {
  return (
    <div className='flex flex-col items-center h-[90vh] gap-1'>
        <img src='./soles-on-wheels-logo.webp' alt='logo' className='w-52'/>
        <h2 className='text-[#8b0000] text-6xl font-extrabold tracking-widest'>MUNNAR</h2>
        <h1 className='text-white text-8xl font-extrabold tracking-widest'>MENU</h1>
        <p className='text-white tracking-widest'>- SINCE 2018 -</p>
        <div className='text-white text-center text-sm mt-2'>
            <p>Ph: <span className='text-[#ec971c] tracking-widest'>+91 8921152086</span></p>
            <p className='text-[#ec971c] tracking-widest'>www.solesonwheels.com</p>
            <p className='tracking-widest'>Moolakada, Pallivasal, Munnar, <br />Kerala 685612</p>
        </div>
        <div className='flex items-center gap-3 mt-2'>
            <div className='w-10 h-10 flex items-center justify-center bg-[#999997] rounded-full cursor-pointer'><InstagramIcon style={{color: '#324158', fontSize: '1.8rem'}} /></div>
            <div className='w-10 h-10 flex items-center justify-center bg-[#999997] rounded-full cursor-pointer'><FacebookIcon style={{color: '#324158', fontSize: '1.8rem'}} /></div>
            <div className='w-10 h-10 flex items-center justify-center bg-[#999997] rounded-full cursor-pointer'><TwitterIcon style={{color: '#324158', fontSize: '1.8rem'}} /></div>
        </div>
    </div>
  )
}

export default About