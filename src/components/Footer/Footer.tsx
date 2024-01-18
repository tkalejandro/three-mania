import React from 'react';
import { Box } from '@chakra-ui/react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box textAlign="center" p={4}>
      &copy; Sonia Coronado {year} | Crafted with ❤️ by the amazing{' '}
      <a href="developers">Three Mania Team</a>
    </Box>
  );
};

export default Footer;
