'use client';
import {
  Chip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Image,
  Input,
  Textarea,
  Link,
  Listbox,
  ListboxItem,
} from '@nextui-org/react';
import { soniaCoronado } from '@/data';
import { useAppSettings } from '@/store';
import { Button } from '@nextui-org/react';
import React, { ReactNode } from 'react';

const Resume = () => {
  const loading = useAppSettings((state) => state.loading);
  const sonia = soniaCoronado;

  const Section = ({ children }: any) => {
    return <section className="my-20 p-10 border-2 flex flex-wrap">{children}</section>;
  };

  const Subtitle = ({ content }: any) => {
    return <h2 className="text-primary text-xl w-full">{content}</h2>;
  };

  return (
    <div className="w-full border-2">
      <Section>
        Portfolio - {sonia.name} and I am loading {loading.toString()}
        <div>
          <Button color="warning">Hello Button</Button>
        </div>
      </Section>
      <Section>
        <div className="flex-1 bg-slate-400">
          <p className="my-20">{sonia.summary}</p>
        </div>
        <Image
          /* width={300} */
          alt="NextUI hero Image"
          src="https://uscscoring.com/images/students/794f2284-776b-42bc-9ae0-7acba40a0ae0.png?v=201701"
        />
        {/* <Link href="">Contact</Link> */}
      </Section>
      <Section>
        <Subtitle content="Skills" />
        {sonia.skills.map((skill, i) => (
          <Chip key={i} variant="bordered">
            {skill.title}
          </Chip>
        ))}
      </Section>
      <Section>
        <Subtitle content="Experience" />
        <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
          {sonia.experience.map((xp) => (
            <ListboxItem key={xp.id}>{xp.title}</ListboxItem>
          ))}
        </Listbox>
      </Section>
      <Section>
        <Subtitle content="Education" />
        <Listbox>
          {sonia.education.map((project) => (
            <ListboxItem key={project.id}>{project.title}</ListboxItem>
          ))}
        </Listbox>
      </Section>
      <Section>
        <Subtitle content="Projects" />
        <Listbox>
          {sonia.projects.map((project) => (
            <ListboxItem key={project.id}>{project.title}</ListboxItem>
          ))}
        </Listbox>
      </Section>
      <Section>
        <Subtitle content="Contact" />
        <address className="flex flex-col">
          <Link href={`mailto:${sonia.email}`} color="foreground">
            {sonia.email}
          </Link>
          <Link href={`phone:${sonia.phone}`} color="foreground">
            {sonia.phone}
          </Link>
        </address>
        <form className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input type="text" label="Full Name" />
          <Input type="email" label="Your Email" />
          <Textarea label="Description" placeholder="Enter your description" />
          <Button color="primary">Send</Button>
        </form>
      </Section>
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
