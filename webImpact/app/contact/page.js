// // pass an object, Person is JSON, in curly braxkets, there are variables
  
// // contact form, dark mode, public API, generative AI

"use client";
import Container from '../components/Container';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  const person = {
    name: "Juliane Mercoli",
    address: {
      city: "Seattle",
      country: "United States"
    },
    contact: {
      email: "juliane.mercoli@gmail.com"
    },
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-indigo-400 mb-12 text-center font-serif">
          Let&apos;s Get In Touch
        </h1>
        
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 w-full max-w-4xl">
          {/* Contact Details */}
          <Person person={person} />

          {/* "You can also" and Button */}
          <div className="flex flex-col items-center text-center justify-center md:mt-auto md:mb-auto">
            <p className="text-xl font-semibold text-white mb-4 font-serif">You can also</p>
            <Link href="/contactform">
              <button className="px-8 py-4 bg-indigo-400 text-white text-lg font-semibold rounded-full border-2 border-white shadow-lg hover:bg-indigo-500 transition-transform transform hover:scale-105 whitespace-nowrap font-mono">
                Send me a message
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Person({ person }) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm p-6 bg-gradient-to-bl from-secondary-900 to-black via-black rounded-xl shadow-xl md:hover:shadow-2xl md:hover:scale-105 transition-all space-y-4">
      <h3 className="text-3xl font-semibold text-white mb-4">{person.name}</h3>
      <p className="text-xl text-indigo-400 mb-4">
        {person.address.city}, {person.address.country}
      </p>
      <ul className="text-lg text-gray-300 space-y-2">
        <li>{person.contact.email}</li>
        <li>{person.contact.phone}</li>
      </ul>
    </div>
  );
}
