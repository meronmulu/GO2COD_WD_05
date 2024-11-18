import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className='fixed top-0 left-0 w-full grid grid-cols-2 items-center bg- p-4 z-10'>
        <div>
          <h1 className='text-white text-xl font-bold'>Meron</h1>
        </div>
        <div className='flex justify-end gap-4 text-white'>
          <Link to="/" className='hover:text-[#009E66]'>
            Home
          </Link>
          <Link to="/about" className='hover:text-[#009E66]'>
            About
          </Link>
          <Link to="/projects" className='hover:text-[#009E66]'>
            Project
          </Link>
          <Link to="/contact" className='hover:text-[#009E66]'>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
