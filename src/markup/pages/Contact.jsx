import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import DnsIcon from '@mui/icons-material/Dns';

function Contact() {
  return (
    <div className='min-h-screen mx-4 flex flex-col items-center justify-center bg-[#101010] text-white p-8' data-aos="fade-up">
      <div className='mt-8 text-center mb-16' data-aos='zoom-in'>
        <h1 className='text-white font-bold text-4xl sm:text-6xl mb-8'>Get in Touch</h1>
        <hr className='border-green-500 w-28 mx-auto mb-2' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl'>
        {/* Left side - Form */}
        <div className='space-y-4'>
          <h2 className='text-[#F0F0F0] font-bold text-2xl'>Message Me</h2>
          <div>
            <input
              id='name'
              className='w-full py-2 px-4 border border-transparent outline-none bg-[#161616] text-[#5B5B5B] focus:border-green-500 transition-colors duration-200'
              placeholder='Name'
              type='text'
              name='name'
            />
          </div>
          <div>
            <input
              id='email'
              className='w-full py-2 px-4 border border-transparent outline-none bg-[#161616] text-[#5B5B5B] focus:border-green-500 transition-colors duration-200'
              placeholder='Email'
              type='email'
              name='email'
            />
          </div>
          <div>
            <textarea
              id='message'
              className='w-full py-2 px-4 border border-transparent outline-none bg-[#161616] text-[#5B5B5B] focus:border-green-500 transition-colors duration-200'
              placeholder='Message'
              name='message'
              rows='6'
            />
          </div>
          <div>
            <button className='bg-[#009E66] text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 hover:bg-green-700'>
              Send Message
            </button>
          </div>
        </div>

        {/* Right side - Contact Information */}
        <div className='space-y-4 flex flex-col items-start md:items-center md:ml-4'>
          <h2 className='text-[#F0F0F0] font-bold text-2xl'>Contact Info</h2>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex flex-row md:flex-col items-start'>
              <div className='m-2 text-[#009E66]'><DnsIcon /></div>
              <div className='m-2 text-[#009E66]'><CallIcon /></div>
              <div className='m-2 text-[#009E66]'><EmailIcon /></div>
            </div>
            <div className="border-l-0 md:border-l-2 md:border-green-700 h-0 md:h-32 w-full md:w-0 mx-4 md:mx-0 md:ml-4"></div>
            <div>
              <div className='space-y-1'>
                <p className='font-medium'>Name</p>
                <p className='text-[#B5B5B5]'>Meron Mulu</p>
              </div>
              <div className='space-y-1'>
                <p className='font-medium'>Call Me</p>
                <p className='text-[#B5B5B5]'>+251924552388</p>
              </div>
              <div className='space-y-1'>
                <p className='font-medium'>Email Me</p>
                <p className='text-[#B5B5B5]'>meronmulu2121@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
