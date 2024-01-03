import Experience from '@/modules/Experience/Experience';
import Head from 'next/head';
import React from 'react';
import { Providers } from './providers';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sonia Coronado - Music Portfolio</title>
        <meta
          name="description"
          content="Immerse yourself in Sonia Coronado's captivating music portfolio. Explore a unique blend of creativity, innovation, and musical mastery."
          key="desc"
        />
        <meta property="og:title" content="Sonia Coronado - Music Portfolio" />
        <meta
          property="og:description"
          content="Immerse yourself in Sonia Coronado's captivating music portfolio. Explore a unique blend of creativity, innovation, and musical mastery."
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/C5603AQFFkALXGQDtfA/profile-displayphoto-shrink_800_800/0/1598900964195?e=1709769600&v=beta&t=rxBatjiyd0-pUfSojY_vv9PW5oJmP7AVQ2249wSisfg"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://example.com" />
      </Head>
      <Experience />
    </>
  );
}
