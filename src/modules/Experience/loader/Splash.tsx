import { useAppTheme } from '@/hooks';
import { Box } from '@chakra-ui/layout';
import React from 'react';

const Splash = () => {
  const theme = useAppTheme();
  return (
    <Box
      style={{
        background: theme.colors.primary.main,
        width: '100%',
        height: '100vh',
      }}
    >
      hello
    </Box>
  );
};

export default Splash;
