import React from 'react';

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-16 px-6">
      <div className="md:w-1/2 w-full">
        <img
          src="/profile.jpg"
          alt="Sameer Yadav"
          className="rounded-lg shadow-lg object-cover w-full max-w-sm mx-auto"
        />
      </div>
      <div className="md:w-1/2 w-full mt-10 md:mt-0 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My name is Sameer Yadav.</h1>
        <p className="text-gray-300 mb-6 text-lg">
          I am currently a Master's student at IIITM Gwalior.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="mailto:sameeryadav1505@gmail.com" className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Contact Me</a>
          <a href="/resume.pdf" className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-400">Resume</a>
        </div>
      </div>
    </div>
  );
}
