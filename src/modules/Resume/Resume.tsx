'use client';
import { soniaCoronado } from '@/data';
import { useAppSettings } from '@/store';
import React, { ReactNode } from 'react';
import {
  Button,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Container,
  Link,
  VStack,
} from '@chakra-ui/react';
const Resume = () => {
  const loading = useAppSettings((state) => state.loading);
  const sonia = soniaCoronado;

  return (
    <div className="w-full">
      {loading && <p>...loading</p>}
      <Container maxW="container.lg" py={8}>
        <Heading as="h1" mb={16}>
          Portfolio - {sonia.name}
        </Heading>
        <Text>{sonia.summary}</Text>
      </Container>
      <Container maxW="container.lg" py={8}>
        <Heading as="h2" size="lg">
          Skills
        </Heading>
        <UnorderedList styleType="none">
          {sonia.skills.map((skill, i) => (
            <ListItem key={i}>{skill.title}</ListItem>
          ))}
        </UnorderedList>
      </Container>
      <Container maxW="container.lg" py={8}>
        <Heading as="h2" size="lg">
          Experience
        </Heading>
        <UnorderedList styleType="none">
          {sonia.experience.map((xp) => (
            <ListItem key={xp.id}>{xp.title}</ListItem>
          ))}
        </UnorderedList>
      </Container>
      <Container maxW="container.lg" py={8}>
        <Heading as="h2" size="lg">
          Education
        </Heading>
        <UnorderedList styleType="none">
          {sonia.education.map((project) => (
            <ListItem key={project.id}>{project.title}</ListItem>
          ))}
        </UnorderedList>
      </Container>
      <Container maxW="container.lg" py={8}>
        <Heading as="h2" size="lg">
          Projects
        </Heading>
        <UnorderedList styleType="none">
          {sonia.projects.map((project) => (
            <ListItem key={project.id}>{project.title}</ListItem>
          ))}
        </UnorderedList>
      </Container>
      <Container maxW="container.lg" py={8}>
        <Heading as="h2" size="lg">
          Contact
        </Heading>
        <address className="">
          <VStack align="start" mb={12}>
            <Link href={`mailto:${sonia.email}`}>{sonia.email}</Link>
            <Link href={`phone:${sonia.phone}`}>{sonia.phone}</Link>
          </VStack>
        </address>
        <form action="">
          <FormControl my={6}>
            <FormLabel>Full Name</FormLabel>
            <Input type="text" placeholder="Full Name" />
          </FormControl>
          <FormControl my={6}>
            <FormLabel htmlFor="">Your Email</FormLabel>
            <Input type="email" placeholder="your@mail.com" />
          </FormControl>
          <FormControl my={6}>
            <FormLabel htmlFor="">Description</FormLabel>
            <Textarea placeholder="Enter your description" />
          </FormControl>
          <Button colorScheme="primary" variant="outline">
            Send
          </Button>
        </form>
      </Container>
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
