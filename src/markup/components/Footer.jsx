import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2 ">Navigation</h3>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li><Link to="/" className="hover:text-[#009E66] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#009E66] transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-[#009E66] transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-[#009E66] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
            <div className="flex gap-4 text-2xl justify-center md:justify-start">
              <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' className='hover:text-pink-500 transition-colors'><InstagramIcon /></a>
              <a href='https://github.com/' target='_blank' rel='noopener noreferrer' className='hover:text-gray-300 transition-colors'><GitHubIcon /></a>
              <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500 transition-colors'><LinkedInIcon /></a>
              <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' className='hover:text-blue-600 transition-colors'><FacebookIcon /></a>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <hr className="my-6 border-green-300" />

        {/* Bottom Section: Copyright */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Meron Mulu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;