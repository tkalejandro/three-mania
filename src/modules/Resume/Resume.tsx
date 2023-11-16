'use client';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { soniaCoronado } from '@/data';
import { useAppSettings } from '@/store';
import { Button } from '@nextui-org/react';
import React from 'react';

const Resume = () => {
  const loading = useAppSettings((state) => state.loading);
  const sonia = soniaCoronado;

  return (
    <div>
      Portfolio - {sonia.name} and I am loading {loading.toString()}
      <div>
        <Button color="warning">Hello Button</Button>
      </div>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Open Menu</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="new">New file</DropdownItem>
          <DropdownItem key="copy">Copy link</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Resume;
