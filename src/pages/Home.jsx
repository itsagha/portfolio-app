import React from 'react'
import ImageCarousel from '../components/ImageCarousel'
import PortoCard from '../components/PortoCard'
import CertificationCard from '../components/CertificationCard'

export default function Home() {
  return (
    <>
      <div className='flex items-center justify-between my-56 mx-44'>
        <div className='w-1/2'>
          <h1 className='text-2xl font-bold text-tertiary'>WELCOME!</h1>
          <h1 
            className='role'>
              <code>console.log("I'm a Front-end Developer!");</code>
          </h1>

          <p 
            className='text-justify text-white'>
            Hello! My name is Rasyid Muhammad Agha and I'm from Bekasi. I'm a Front-end Web Developer for over 1 year. My Expertise is to create a websites with React.js 
            and Tailwindcss. I'm an undergraduate Informatics student at Sebelas Maret University and still exploring technologies.
          </p>

          <a 
            target='blank'
            href="https://drive.google.com/file/d/1ycOsTq0KD5AQxrDRHNRr6vty8d8kZX_0/view?usp=sharing" 
            className='text-white w-56 h-10 border border-solid border-tertiary flex items-center justify-center text-center bg-primary rounded-lg mt-10 cv-btn'
          >
            Open my CV
          </a>

        </div>
          <img src="/images/profpict.jpg" alt="" className='rounded-2xl h-[24rem]'/>
      </div>

      <div className="flex items-center justify-center mb-20">
        <h1 className='text-white font-bold text-2xl mt-16'>
          SKILLS
        </h1>
      </div>
        <ImageCarousel />

      <div className='flex items-center justify-center mb-20'>
        <h1 className='text-white font-bold text-2xl mt-16'>
          SOME OF MY PROJECTS
        </h1>
      </div>
      <PortoCard/>

      <div className='flex items-center justify-center mb-20'>
        <h1 className='text-white font-bold text-2xl mt-16'>
          CERTIFICATIONS
        </h1>
      </div>
      <CertificationCard />
      
    </>
  )
}