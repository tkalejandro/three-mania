import Resume from '@/modules/StaticPages/Resume/Resume';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

const ResumePage = () => {
  return (
    <>
      <Head>
        <title>Sonia Coronado Cuesta - Music Designer at PlayStation</title>
        <meta
          name="description"
          content="Explore Sonia Coronado's impressive resume as a seasoned music designer at PlayStation. Learn about her career, achievements, and expertise in game audio music leadership."
          key="desc"
        />
        <meta property="og:title" content="Sonia Coronado Cuesta - Music Designer at PlayStation" />
        <meta
          property="og:description"
          content="Explore Sonia Coronado's impressive resume as a seasoned music designer at PlayStation. Learn about her career, achievements, and expertise in game audio music leadership."
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/C5603AQFFkALXGQDtfA/profile-displayphoto-shrink_400_400/0/1598900964195?e=1709769600&v=beta&t=wL_1M0FfPLkAc-oEt_q9-m1GknjK3MCYfxe6KV1tog8"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://example.com/resume" />
      </Head>
      <Resume />
    </>
  );
};

export default ResumePage;
