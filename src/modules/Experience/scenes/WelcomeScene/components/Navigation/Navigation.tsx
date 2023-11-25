import { ChakraHtml } from '@/modules/Experience/components';
import { Button } from '@chakra-ui/react';
import { Html } from '@react-three/drei';
import React from 'react';

const Navigation = () => {
  return (
    <group>
      <ChakraHtml position={[0, 0.1, 0]}>
        <div
          style={{
            height: '30vh',
            minHeight: '300',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <div>
            <Button size="sm" variant="outlined">
              About
            </Button>
          </div>
          <div>
            <Button size="sm">Project and Awards</Button>
          </div>
          <div>
            <Button size="sm">Media Cover</Button>
          </div>
          <div>
            <Button size="sm">Audio Library</Button>
          </div>
          <div>
            <Button size="sm" colorScheme="secondary">
              Contact
            </Button>
          </div>
        </div>
      </ChakraHtml>
    </group>
  );
};

export default Navigation;
