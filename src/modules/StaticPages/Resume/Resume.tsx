'use client';
import { soniaCoronado } from '@/constants';
import React, { useRef } from 'react';
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
  Container as Box,
  Link,
  Container,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { useAppTheme } from '@/hooks';

const Resume = () => {
  const sonia = soniaCoronado;
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const theme = useAppTheme();

  const onSubmit = async (e: { preventDefault: () => void }): Promise<void> => {
    try {
      e.preventDefault();


      const fullName = fullNameRef.current?.value;
      const email = emailRef.current?.value;
      const description = textAreaRef.current?.value;

      const mailtoLink = `mailto:${sonia.email}?subject=Contact Request - Portfolio Sonia Coronado&body=${description} %0D%0A%0D%0ASincerly,%0D%0A%0D%0A${fullName}%0D%0A${email}%0D%0A`;
      //Open external Mail App
      window.location.href = mailtoLink;
      //Clear values
      if (fullNameRef.current) fullNameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (textAreaRef.current) textAreaRef.current.value = '';
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Box maxW="100%" py={8}>
        <Heading
          as="h1"
          mb={6}
          bg={theme.colors.primary.main}
          p={3}
          color={theme.colors.primary.contrastText}
          borderRadius="lg"
        >
          {sonia.name}
        </Heading>
        <Text>{sonia.summary}</Text>
      </Box>

      <Box maxW="100%" py={8}>
        <Heading as="h2" size="lg" fontWeight="normal">
          Skills
        </Heading>
        <UnorderedList styleType="none" margin={0}>
          {sonia.skills.map((skill, i) => (
            <ListItem
              key={i}
              display="inline-block"
              bg={theme.colors.secondary[100]}
              p={2}
              m={2}
              rounded="lg"
            >
              {skill.title}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Box maxW="100%" py={8}>
        <Heading as="h2" size="lg">
          Experience
        </Heading>
        <UnorderedList styleType="none" color={theme.colors.primary[700]} margin={0}>
          {sonia.experience.map((xp) => (
            <ListItem key={xp.id}>
              <Box color="#000000" m={0} p={0}>
                {xp.title}
              </Box>
              <Box m={0} p={0}>
                {xp.entity}
              </Box>
              <Box m={0} p={0}>
                {xp.startDate.toLocaleDateString()} - Present{' '}
              </Box>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Box maxW="100%" py={8}>
        <Heading as="h2" size="lg">
          Education
        </Heading>
        <UnorderedList styleType="none" color={theme.colors.primary[700]} margin={0}>
          {sonia.education.map((education) => (
            <ListItem key={education.id}>
              <Box color={theme.colors.black} m={0} p={0}>
                {education.title}
              </Box>
              <Box m={0} p={0}>
                {education.entity}
              </Box>
              <Box m={0} p={0} display="flex" alignItems="center">
                <Box whiteSpace="nowrap" padding={0}>
                  {education.startDate.toLocaleDateString()} -{' '}
                  {education.endDate?.toLocaleDateString()}{' '}
                </Box>
                <Box color="gray.500">{education.country}</Box>
              </Box>
              <br />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Box maxW="100%" py={8}>
        <Heading as="h2" size="lg">
          Projects
        </Heading>
        <UnorderedList styleType="none" margin={0} padding={0}>
          {sonia.projects.map((project) => (
            <ListItem key={project.id}>
              <Box color={theme.colors.black} m={0} p={0}>
                {project.title}
              </Box>
              <Box m={0} p={0}>
                {project.entity}
              </Box>
              <Box m={0} p={0} display="flex" alignItems="center">
                <Box whiteSpace="nowrap" padding={0}>
                  {project.startDate.toLocaleDateString()} - {project.endDate?.toLocaleDateString()}{' '}
                </Box>
                <Box color="gray.500">
                  {project.city} - {project.country}
                </Box>
              </Box>

              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem width="500px">
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Highlights
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>{project.highlights}</Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <br />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Box maxW="100%" py={8}>
        <Heading as="h2" size="lg">
          Contact
        </Heading>
        <address className="">
          <VStack align="start" mb={12}>
            <Link href={`mailto:${sonia.email}`}>{sonia.email}</Link>
            <Link href={`phone:${sonia.phone}`}>{sonia.phone}</Link>
          </VStack>
        </address>
        <form action="" onSubmit={onSubmit}>
          <FormControl my={6}>
            <FormLabel>Full Name</FormLabel>
            <Input type="text" placeholder="Full Name" ref={fullNameRef} />
          </FormControl>
          <FormControl my={6}>
            <FormLabel htmlFor="">Your Email</FormLabel>
            <Input type="email" placeholder="your@mail.com" ref={emailRef} />
          </FormControl>
          <FormControl my={6}>
            <FormLabel htmlFor="">Description</FormLabel>
            <Textarea placeholder="Enter your description" ref={textAreaRef} />
          </FormControl>
          <Button colorScheme="primary" variant="outline" type="submit">
            Send
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Resume;
