import { Button } from '@nextui-org/button';
import { Html } from '@react-three/drei';
import React from 'react';

const Navigation = () => {
  return (
    <group>
      <Html position={[0, 0.1, 0]}>
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
            <Button size="md">About</Button>
          </div>
          <div>
            <Button size="md">Project and Awards</Button>
          </div>
          <div>
            <Button size="md">Media Cover</Button>
          </div>
          <div>
            <Button size="md">Audio Library</Button>
          </div>
          <div>
            <Button size="md" color="secondary">
              Contact
            </Button>
          </div>
        </div>
      </Html>
    </group>
  );
};

export default Navigation;
