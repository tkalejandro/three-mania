'use client';
import { soniaCoronado } from '@/data';
import { useAppSettings } from '@/store';
import React, { ReactNode } from 'react';

const Resume = () => {
  const loading = useAppSettings((state) => state.loading);
  const sonia = soniaCoronado;

  return (
    <div className="w-full">
      {loading && <p>...loading</p>}
      <h1>Portfolio - {sonia.name}</h1>
      <section>
        <h2>{sonia.summary}</h2>
      </section>
      <section>
        <h2 content="Skills" />
        <ul className="flex flex-wrap skills">
          {sonia.skills.map((skill, i) => (
            <li key={i}>{skill.title}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Experience</h2>
        <ul>
          {sonia.experience.map((xp) => (
            <li key={xp.id}>{xp.title}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Education</h2>
        <ul>
          {sonia.education.map((project) => (
            <li key={project.id}>{project.title}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          {sonia.projects.map((project) => (
            <li key={project.id}>{project.title}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <address className="">
          <a href={`mailto:${sonia.email}`}>{sonia.email}</a>
          <a href={`phone:${sonia.phone}`}>{sonia.phone}</a>
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
      </section>
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
