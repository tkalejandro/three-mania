import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 p-4 text-center">
      &copy; Sonia Coronado {year} | Crafted with ❤️ by the amazing
      <a href="link-to-contributors-page" className="text-blue-500 underline">
        Development Team
      </a>
    </footer>
  );
};

export default Footer;
