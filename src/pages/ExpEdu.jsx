import React from 'react'

export default function ExpEdu() {
  return (
    <>
      {/* Pendidikan */}
      <h1 className='text-tertiary text-5xl font-bold mx-40 mt-20 mb-10'>EDUCATION</h1>
      <div className='flex justify-start gap-7 mx-40 mb-24'>
        <img src="/images/uns.jpg" alt="UNS" className='h-72 w-80 object-cover rounded-2xl' />
        <div className='bg-tertiary w-1 h-72 rounded-2xl'></div>

        <div className='flex flex-col'>
          <h2 className='text-white text-2xl font-bold'>
              Universitas Sebelas Maret (UNS)
          </h2>
          <p className='text-white mt-5 w-[34rem] text-justify'>
              This cool guy is an undergraduate student of Informatics at Sebelas Maret University, now in his 5th semester. 
              He is learning a Front-end Web framework in both knowledge and practical skills. Through his coursework and 
              hands-on projects with his friends, he is sharpening his expertise in Front-end development, problem solvement, and systems development.
          </p>
        </div>
      </div>

      {/* organisasi */}
      <h1 className='text-tertiary text-5xl font-bold mx-40 mt-20 mb-10 text-right'>ORGANIZATION</h1>
      <div className='flex justify-end gap-7 mx-40 mb-24'>
        <div className='flex flex-col'>
          <h2 className='text-white text-2xl font-bold text-right'>
              Badan Eksekutif Mahasiswa FATISDA
          </h2>
          <p className='text-white mt-5 w-[34rem] text-justify'>
              While he's learning front-end framework, he's a staff of the Scientific and Cultural Arts Ministry of BEM. It has been a hard things
              to managed his schedule between MSIB, organizational, and volunteer event. Many activities he have been undertaken in this organization, 
              one of which is visits to other universities and comparative studies between faculties.
          </p>
        </div>
        <div className='bg-tertiary w-1 h-72 rounded-2xl'></div>
        <img src="/images/stubanKSMR.jpg" alt="UNS" className='h-72 w-80 object-cover rounded-2xl' />
        <img src="/images/rabidBEM.jpg" alt="UNS" className='h-72 w-80 object-cover rounded-2xl' />
      </div>

      {/* volunteer */}
      <h1 className='text-tertiary text-5xl font-bold mx-40 mt-20 mb-10'>VOLUNTEER</h1>
      <div className='flex justify-start gap-7 mx-40 mb-24'>
        <img src="/images/pingfest3.jpg" alt="UNS" className='h-72 w-80 object-cover rounded-2xl' />
        <div className='bg-tertiary w-1 h-72 rounded-2xl'></div>

        <div className='flex flex-col'>
          <h2 className='text-white text-2xl font-bold'>
              P!NGFEST
          </h2>
          <p className='text-white mt-5 w-[34rem] text-justify'>
               In order to make new friends and expertise his teamwork skills, this guy has participated in P!NGFEST. P!NGFEST is an event organized by Informatics UNS
               that provides E-Sports competition, competitive programming, and talkshows that invites many guest stars such as Sandhika Galih and Fiki Naki.
          </p>
        </div>
      </div>
    </>
  )
}

