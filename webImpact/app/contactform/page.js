"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setSent(true);  // Set sent to true to show the success message
          setTimeout(() => {
            setSent(false);
            window.location.reload(); // Refresh the page after 2 seconds
          }, 2000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gradient-to-bl from-gray-800 via-gray-900 to-black p-8 rounded-lg shadow-lg max-w-md w-full">
        {sent ? (
          <p className="text-center text-green-500 font-bold">Your message has been sent!</p>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center text-indigo-400 mb-6">Contact Us</h1>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  ref={nameRef}
                  name="user_name"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  name="user_email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  ref={messageRef}
                  name="message"
                  id="message"
                  className="w-full px-4 py-2 border rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  rows="4"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
