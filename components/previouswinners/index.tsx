'use client';

import { useState } from 'react';
import Image from 'next/image';

const winners = [
  {
    name: "Emily Johnson",
    year: 2023,
    scholarship: "STEM Excellence Scholarship",
    image: "https://img.freepik.com/free-photo/happy-graduate-student-gown-posing-white-background_114579-49793.jpg?w=996&t=st=1721130138~exp=1721130738~hmac=7bfca41eee17eaa6ebd5cddfc0bed6a633a0f45be1c6356db261e4da93692d5d",
    story: "Emily's groundbreaking research in renewable energy earned her the top STEM scholarship. She's now pursuing her PhD at MIT.",
  },
  {
    name: "Michael Chang",
    year: 2022,
    scholarship: "Creative Arts Grant",
    image: "https://img.freepik.com/free-photo/young-man-pointing-away-graduate-uniform-looking-optimistic-front-view_176474-58131.jpg?t=st=1721130284~exp=1721133884~hmac=bde0893ac8e9e8ff6300261f46eaa4bdc6ac6ed33c57c695fdc67047ebf67a82&w=996",
    story: "Michael's innovative short film won him the Creative Arts Grant. He's now working on his first feature-length documentary.",
  },
  {
    name: "Aisha Patel",
    year: 2021,
    scholarship: "Global Leadership Award",
    image: "https://img.freepik.com/free-photo/graduate-woman-casual-clothes-uniform-making-receiving-giving-gesture-looking-merry-front-view_176474-51161.jpg?t=st=1721130318~exp=1721133918~hmac=a11403cc9255cd4993d5441bab634662a8067c4823ca34069b51533bac202b1e&w=996",
    story: "Aisha's work in community development earned her the Leadership Award. She's now running a non-profit in her hometown.",
  },
  {
    name: "Carlos Rodriguez",
    year: 2020,
    scholarship: "Entrepreneurship Scholarship",
    image: "https://img.freepik.com/free-photo/portrait-smiley-young-man-graduation_23-2150922961.jpg?t=st=1721130355~exp=1721133955~hmac=75585240dcc556fd7fbbf143cbc009f91b5d193667cd15df5a0ff0a3f1769ee2&w=996",
    story: "Carlos used his scholarship to launch a successful tech startup that's now valued at over $10 million.",
  },
];

const PreviousWinners = () => {
  const [activeWinner, setActiveWinner] = useState(0);

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Previous Winners</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={winners[activeWinner].image}
              alt={winners[activeWinner].name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">{winners[activeWinner].name}</h3>
            <p className="text-xl text-red-600 font-medium">{winners[activeWinner].scholarship} Winner, {winners[activeWinner].year}</p>
            <p className="text-gray-600">{winners[activeWinner].story}</p>
            <div className="flex space-x-4">
              {winners.map((winner, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeWinner ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveWinner(index)}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {winners.map((winner, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                index === activeWinner ? 'opacity-100 scale-105' : 'opacity-50 scale-100'
              }`}
              onClick={() => setActiveWinner(index)}
            >
              <div className="relative h-40 rounded-lg overflow-hidden shadow-md mb-4">
                <Image
                  src={winner.image}
                  alt={winner.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">{winner.name}</h4>
              <p className="text-sm text-gray-600">{winner.year}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          
           <a href="/apply"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300"
          >
            Apply for Scholarship
          </a>
        </div>
      </div>
    </section>
  );
};

export default PreviousWinners;