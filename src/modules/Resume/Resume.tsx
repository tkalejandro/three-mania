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
    return <section className="py-5">{children}</section>;
  };

  return (
    <div className="w-full border-2 ">
      <section className="hero my-64">
        Portfolio - {sonia.name} and I am loading {loading.toString()}
        <div>
          <Button color="warning">Hello Button</Button>
        </div>
      </section>
      <section className="about-me flex gap-12 ">
        <div className="flex-1 bg-slate-400">
          <p className="my-20">
            Sonia Coronado is a film composer and guitarist from Cartagena, Colombia currently
            living in Los Angeles.
          </p>
          <p>
            She started playing the guitar when she was 12 years old, focusing on rock and fusion as
            her main styles. However, she has also been passionated about film music for a long
            time, which is why she started to compose music that involved storytelling during her
            school years. She eventually moved to Boston and obtained a bachelor degree in Film
            Scoring and Performance in Berklee College of Music.
          </p>
          <p>
            Since then, Sonia has scored for several short films, video games, animations, trailers
            and live shows in both Colombia and the United States, having a great interest in
            orchestral and electronic scores. She was also part of the Berklee Silent Film Orchestra
            as composer and conductor for the period of 2017-2018. She along six other composers
            scored Universal Pictures restoration of the silent film The Man Who Laughs, which
            premiered live to orchestra in the 23rd San Francisco Silent Film Festival. Currently,
            she is doing a Master of Music in Screen Scoring in the University of Southern
            California.
          </p>
          <p>
            For Sonia, the greatest satisfaction of working in this industry is being able to
            fulfill the director's vision of their project. She has a deep love for not only film
            music, but film itself, and that is something she always tries to portray in her work.
          </p>
        </div>
        <Image
          /* width={300} */
          alt="NextUI hero Image"
          src="https://uscscoring.com/images/students/794f2284-776b-42bc-9ae0-7acba40a0ae0.png?v=201701"
        />
        {/* <Link href="">Contact</Link> */}
      </section>
      <Section>
        <h2>Skills</h2>
        <Chip key="1">Skill 1</Chip>
        <Chip key="2">Skill 2</Chip>
        <Chip key="3">Skill 3</Chip>
        <Chip key="43">Skill 4</Chip>
        <Chip key="5">Skill 5</Chip>
      </Section>
      <section className="other-tools py-10">
        <h2>Tools</h2>
        <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
          {/* do you prefer this, or to map from a const toolsData array? */}
          <ListboxItem key="">Logic Pro X</ListboxItem>
          <ListboxItem key="">Pro Tools</ListboxItem>
          <ListboxItem key="">Orchestal Tools</ListboxItem>
          <ListboxItem key="">Sibelius</ListboxItem>
        </Listbox>
      </section>
      <section className="projects py-10">
        <h2>Projects</h2>
        {/* do you prefer this, or to map from a const projectsData array? */}
        <Listbox>
          <ListboxItem key="https://www.imdb.com/title/tt6298000/?ref_=nm_knf_t_1">
            <Link href="">The Last of Us: Part II</Link>
          </ListboxItem>
          <ListboxItem key="https://www.imdb.com/title/tt13119450/?ref_=nm_knf_t_3">
            <Link href="">God of War: Ragnarök</Link>
          </ListboxItem>
          <ListboxItem key="https://www.imdb.com/title/tt10417512/?ref_=nm_knf_t_2">
            <Link href="">Call of Duty: Modern Warfare</Link>
          </ListboxItem>
          <ListboxItem key="https://www.imdb.com/title/tt12496734/?ref_=nm_knf_t_4">
            <Link href="">Spider-Man: Miles Morales</Link>
          </ListboxItem>
          <ListboxItem key="https://www.imdb.com/title/tt0019130/?ref_=nm_flmg_t_8_msdp">
            <Link href="">The Man Who Laughs</Link>
          </ListboxItem>
          <ListboxItem key="https://www.imdb.com/title/tt7651352/?ref_=nm_flmg_t_5_msdp">
            <Link href="">Ghost of Tsushima</Link>
          </ListboxItem>
          <ListboxItem key="https://www.imdb.com/title/tt11590772/?ref_=nm_flmg_t_3_msdp">
            <Link href="">Sunshine Room</Link>
          </ListboxItem>
          <ListboxItem key="https://www.imdb.com/title/tt21062288/?ref_=nm_flmg_t_2_msdp">
            <Link href="">Hurts Like Hell</Link>
          </ListboxItem>
        </Listbox>
      </section>
      <div className="contact" style={{ margin: '2.5vh auto' }}>
        <h2>Contact</h2>
        <address>
          <Link href="mailto:" color="foreground">
            mail@mail.com
          </Link>
          <Link href="phone:" color="foreground">
            +123 456789
          </Link>
        </address>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input type="text" label="Full Name" />
        <Input type="email" label="Your Email" />
        <Textarea label="Description" placeholder="Enter your description" />
        <Button color="primary">Send</Button>
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
