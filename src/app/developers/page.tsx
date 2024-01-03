import { Box } from '@chakra-ui/react';
import { Developers } from '@/modules/StaticPages/Developers/Developers';
import React from 'react';
import Head from 'next/head';

const DevelopersPage = () => {
  return (
    <>
      <Head>
        <title>Meet the Developers | Portfolio Sonia Coronado</title>
        <meta
          name="description"
          content="Explore the talented developers behind this Portfolio Sonia Coronado. Learn about their skills, expertise, and contributions."
          key="desc"
        />
        <meta property="og:title" content="Meet the Developers | Portfolio Sonia Coronado" />
        <meta
          property="og:description"
          content="Explore the talented developers behind Portfolio Sonia Coronado. Learn about their skills, expertise, and contributions."
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/C5603AQFFkALXGQDtfA/profile-displayphoto-shrink_400_400/0/1598900964195?e=1709769600&v=beta&t=wL_1M0FfPLkAc-oEt_q9-m1GknjK3MCYfxe6KV1tog8"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://example.com/developers" />
      </Head>
      <Box>
        <Developers />
      </Box>
    </>
  );
};

export default DevelopersPage;
