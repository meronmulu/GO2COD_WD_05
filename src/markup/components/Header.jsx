import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed top-0 left-0 w-full  p-4 z-10'>
      <div className='flex justify-between items-center'>
        <h1 className='text-white text-xl font-bold'>Meron</h1>

        {/* Desktop Navigation */}
        <div className='hidden md:flex justify-end gap-4 text-white'>
          <Link to="/" className='hover:text-[#009E66]'>Home</Link>
          <Link to="/about" className='hover:text-[#009E66]'>About</Link>
          <Link to="/projects" className='hover:text-[#009E66]'>Projects</Link>
          <Link to="/contact" className='hover:text-[#009E66]'>Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <button onClick={toggleDropdown} className='text-white'>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='flex flex-col bg-black md:hidden mt-2  mr-20 justify-end rounded-md shadow-lg w-48'>
          <Link to="/" className='flex items-center p-2 text-white hover:text-[#009E66]'>
            <HomeIcon className='mr-2' /> Home
          </Link>
          <Link to="/about" className='flex items-center p-2 text-white hover:text-[#009E66]'>
            <InfoIcon className='mr-2' /> About
          </Link>
          <Link to="/projects" className='flex items-center p-2 text-white hover:text-[#009E66]'>
            <WorkIcon className='mr-2' /> Projects
          </Link>
          <Link to="/contact" className='flex items-center p-2 text-white hover:text-[#009E66]'>
            <ContactMailIcon className='mr-2' /> Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;