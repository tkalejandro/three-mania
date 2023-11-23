import { useDeveloperSettings } from '@/store';
import React from 'react';
import { Button, useTheme } from '@chakra-ui/react';
const DebugButton = () => {
  const setDebugMode = useDeveloperSettings((state) => state.setDebugMode);

  const theme = useTheme();
  console.log(theme);
  return (
    <Button
      colorScheme="warning"
      onClick={setDebugMode}
      style={{
        position: 'absolute',
        bottom: 20,
        right: 20,
      }}
    >
      Debug Mode
    </Button>
  );
};

export default DebugButton;
