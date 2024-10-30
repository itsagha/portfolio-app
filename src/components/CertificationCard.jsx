import React from 'react';

export default function CertificationCard() {
    const boxes = [
        { id: 1, imgURL:'/images/UXDesign.png' },
        { id: 2, imgURL:'/images/sql.png' },
        { id: 3, imgURL:'/images/dasarJS.png' },
        { id: 4, imgURL:'/images/SoftwareDev.png' },
        { id: 5, imgURL:'/images/pm.png' },
        { id: 6, imgURL:'/images/network.png'},
    ];

    return (
        <div className="grid grid-cols-3 gap-8 justify-center mb-40 mx-44">
            {boxes.map((box, index) => (
                <div 
                    key={box.id}
                    className="rounded-3xl border border-solid border-red-500 shadow-2xl items-center justify-center p-2"
                    style={{ gridColumn: index > 2 ? 'span 1 / span 2' : 'span 1' }}
                >
                    <img 
                        src={box.imgURL} 
                        alt={`Image ${box.id}`} 
                        className="rounded-2xl object-cover" 
                    />
                </div>
            ))}
        </div>
    );
}