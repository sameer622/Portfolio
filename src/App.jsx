import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}
