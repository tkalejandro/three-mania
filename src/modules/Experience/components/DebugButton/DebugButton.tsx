import { useDeveloperSettings } from '@/store';
import { Button } from '@nextui-org/react';
import React from 'react';

const DebugButton = () => {
  const setDebugMode = useDeveloperSettings((state) => state.setDebugMode);
  return (
    <Button
      variant="shadow"
      color="warning"
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
