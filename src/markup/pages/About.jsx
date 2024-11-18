import React from 'react';
import img2 from '../../asset/images/img2.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

function About() {
  return (
    <> 
    <div className=' bg-[#101010] p-5'>
      <div>
      <h1 className='text-white font-bold  text-center text-6xl bg-[#101010] m-8'>About Me</h1>
      <hr className='item-center border-green-500 w-28 mx-auto '/>
     </div>
     <div className='flex flex-col md:flex-row items-center gap-5 md:gap-12 bg-gradient-to-r  p-10 rounded-lg shadow-lg py-20' data-aos="fade-up">
      <div className='w-full md:w-1/2 flex justify-center' data-aos='zoom-in'>
        <img 
          src={img2} 
          alt="Profile" 
          className='w-[150px] sm:w-[300px] md:w-[350px] h-[150px] sm:h-[300px] md:h-[350px] rounded-full sm:rounded-none  border-gray-700 shadow-lg object-cover' 
        />
      </div>
      <div className='w-full md:w-1/2 p-6' data-aos='zoom-in'>
       
        <h1 className='text-center md:text-left text-xl font-bold text-white mb-6'>
          I&apos;m Meron Mulu, a Software Engineering Student and Frontend Developer
        </h1>
        <p className='text-center md:text-left text-lg text-gray-300 mb-4'>
          I am a dedicated software engineering student and front-end developer passionate about building responsive and visually appealing web applications. With strong skills in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React, I craft seamless user interfaces and engaging user experiences.
        </p>
        <div className='text-gray-400 mb-6'>
          <hr className='border-gray-600 mb-4' />
        </div>
        <div className='flex gap-4 text-2xl justify-center md:justify-start text-white'>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' className='hover:text-pink-500 transition-colors'><InstagramIcon /></a>
          <a href='https://github.com/' target='_blank' rel='noopener noreferrer' className='hover:text-gray-300 transition-colors'><GitHubIcon /></a>
          <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500 transition-colors'><LinkedInIcon /></a>
          <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' className='hover:text-blue-600 transition-colors'><FacebookIcon /></a>
        </div>
      </div>
     </div>
    </div>
    
    </>
  );
}

export default About;
