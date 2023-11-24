import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      &copy; Sonia Coronado {year} | Crafted with ❤️ by the amazing
      <a href="link-to-contributors-page">Development Team</a>
    </footer>
  );
};

export default Footer;
