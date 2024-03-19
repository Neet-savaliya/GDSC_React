import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between px-4 py-2">
      <div className="flex items-center">
        <img id="logo" className="w-20 h-30 mr-4" src="../public/icon.jpeg" alt="Logo" />
        <h2 id="heading" className="text-5xl font-semibold">Progress Tracker</h2>
      </div>

      <div className="flex items-center space-x-6">
        <ul className="flex space-x-6 text-violet">
          <li>
            <a href="#" className="hover:text-gray-500">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">LeetCode</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">Aptitude</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
