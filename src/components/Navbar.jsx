import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-semibold">Sameer Yadav</h1>
      <ul className="flex gap-6 text-sm">
        <li><a href="#about" className="hover:text-gray-300">About Me</a></li>
        <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
        <li><a href="#blog" className="hover:text-gray-300">Blog</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/sameer-yadav-9222122a6/" target="_blank" rel="noreferrer">
          <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
        </a>
        <a href="https://github.com/sameer622" target="_blank" rel="noreferrer">
          <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
        </a>
        <a href="/resume.pdf" className="px-2 py-1 bg-gray-600 rounded text-sm hover:bg-gray-500">Resume</a>
      </div>
    </nav>
  );
}
