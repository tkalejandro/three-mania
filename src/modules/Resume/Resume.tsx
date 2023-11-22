'use client';
import { soniaCoronado } from '@/data';
import { useAppSettings } from '@/store';
import React, { ReactNode } from 'react';
import { Heading, Link, Text } from '@radix-ui/themes/dist/cjs/components';

const Resume = () => {
  const loading = useAppSettings((state) => state.loading);
  const sonia = soniaCoronado;

  const Section = ({ children }: any) => {
    return <section className="flex flex-wrap justify-center">{children}</section>;
  };

  return (
    <div className="w-full">
      {loading && <p>...loading</p>}
      <Heading as="h1">Portfolio - {sonia.name}</Heading>
      <Section>
        <Text>{sonia.summary}</Text>
      </Section>
      <Section>
        <Heading as="h2" content="Skills" />
        <ul className="flex flex-wrap skills">
          {sonia.skills.map((skill, i) => (
            <li key={i}>{skill.title}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <Heading as="h2">Experience</Heading>
        <ul>
          {sonia.experience.map((xp) => (
            <li key={xp.id}>{xp.title}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <Heading as="h2">Education</Heading>
        <ul>
          {sonia.education.map((project) => (
            <li key={project.id}>{project.title}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <Heading as="h2">Projects</Heading>
        <ul>
          {sonia.projects.map((project) => (
            <li key={project.id}>{project.title}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <Heading as="h2">Contact</Heading>
        <address className="">
          <Link href={`mailto:${sonia.email}`}>{sonia.email}</Link>
          <Link href={`phone:${sonia.phone}`}>{sonia.phone}</Link>
        </address>
        {/* there's a radix.ui form that must be installed sepparatedly https://www.radix-ui.com/primitives/docs/components/form, although I'm not sure how that works with next.js form*/}
        <form className="flex w-1/2 flex-wrap md: gap-4">
          <label htmlFor="">
            Full Name
            <input type="text" />
          </label>
          <label htmlFor="">
            Your Email
            <input type="email" />
          </label>
          <label htmlFor="">
            Description
            <textarea placeholder="Enter your description" />
          </label>
          <button color="primary">Send</button>
        </form>
      </Section>
      {/* <Dropdown>
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
      </Dropdown> */}
    </div>
  );
};

export default Resume;
