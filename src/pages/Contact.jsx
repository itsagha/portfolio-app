import React from 'react'

export default function Contact() {
  const btnContact = [
    { id: 1, content: 'Linkedin saw it first', URL: 'https://www.linkedin.com/in/rasyidmagha/'},
    { id: 2, content: 'Instagram', URL: 'https://www.instagram.com/rsydagha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='},
    { id: 3, content: 'Github', URL: 'https://github.com/itsagha'},
  ];

  const qrCode = [
    { id: 1, content: 'Linkedin', imgUrl: '/images/linkedinQR.png'},
    { id: 2, content: 'Instagram', imgUrl: '/images/instagramQR.png'},
    { id: 3, content: 'Github', imgUrl: '/images/githubQR.png'},
  ];

  return (
    <>
    {/* Image & button sosmed */}
     <div className='flex justify-center align-middle mt-32 mb-7 mx-44 font-bold text-3xl'>
        <h1 className='text-white'>
          GET TO KNOW ME ON
          <span className='text-tertiary'> SOCIAL MEDIA!</span>
        </h1>
      </div>

      <div className='flex justify-center align-middle mb-24 mx-44 gap-7'>
        <img src="/images/sosmed.jpg" alt="" className='h-60 w-60 object-cover rounded-2xl'/>
        <div className='w-1 h-60 bg-tertiary rounded-2xl'></div>
        <div className='flex-col'>
          {btnContact.map((btn) => (
            <a 
              key={btn.id} 
              href={btn.URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='text-white w-60 h-10 border border-solid border-tertiary flex items-center justify-center text-center bg-primary rounded-lg mb-8 cv-btn'>
              {btn.content}
            </a>
          ))}
          <p className='text-white flex justify-center text-justify'>rsydmagha@gmail.com</p>
        </div>
      </div>

      {/* QR Code */}
      <div className='flex justify-center align-middle mb-7 font-bold text-3xl'>
        <h1 className='text-white'>
          OR SCAN THESE
          <span className='text-tertiary'> QR CODES</span>
        </h1>
      </div>

      <div className='flex justify-center align-middle gap-7 mx-44'>
        {qrCode.map((QR) => (
          <div key={QR.id} className='text-center'>
            <img
              src={QR.imgUrl} 
              alt={QR.content} 
              className='object-cover rounded-lg h-40 w-40'  
            />
            <p className='mt-2 text-white'>{QR.content}</p>
          </div>
        ))}
      </div>


    </>
  );
}