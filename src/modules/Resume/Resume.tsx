'use client';

import { soniaCoronado } from '@/data';
import { useAppSettings } from '@/store';
import { Button } from '@nextui-org/react';
import React from 'react';

const Resume = () => {
  // Dummy use
  const loading = useAppSettings((state) => state.loading);
  const sonia = soniaCoronado;
  return (
    <div>
      Portfolio - {sonia.name} and I am loading {loading.toString()}
      <div>
        <Button color="warning">Hello Button</Button>
      </div>
    </div>
  );
};

export default Resume;
