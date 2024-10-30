import React from 'react';

export default function PortoCard() {
  // array buat ngeloop 3 kotak
  const boxes = [
    { id: 1, title: 'UI/UX Listenz', desc: "My very first UI/UX Design, it's a mobile music streaming application.", imgUrl: '/images/UIUXListenz.jpeg' },
    { id: 2, title: 'Shot Spotter', desc: 'Online Billiard Table Reservation Web. Created using Laravel, HTML, CSS, and Javascript vanilla.', imgUrl: '/images/ShotSpotter.jpeg' },
    { id: 3, title: 'Shopshop', desc: 'Online Shopping Web. Created using HTML, CSS, and Javascript vanilla.', imgUrl: '/images/Shopshop.png' },
  ];

  return (
    <div className='flex justify-center gap-8 mb-40'>
      {boxes.map((box) => (
        <div 
          key={box.id} 
          className='w-[28.5rem] h-[24.5rem] bg-primary rounded-3xl border border-solid border-red-500 shadow-2xl items-center justify-center p-4'
        >
          <img 
            src={box.imgUrl} 
            alt={`Image ${box.id}`} 
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
            <h3 className="text-white font-bold text-left mb-4">{box.title}</h3>
            <p className="text-white text-sm text-justify">{box.desc}</p>

        </div>
      ))}
    </div>
  );
}  