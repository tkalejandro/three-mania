import Experience from '@/modules/Experience/Experience';
import Head from 'next/head';
import React from 'react';
import { Providers } from './providers';

export default function Home() {
  return (
    <>
      <Head>
      <title>Three Mania</title>
        <meta name="description" content="Three Mania, developed by the Three Dev community, is a thrilling and ever-expanding collection of microgames. Dive into a world of quick thinking, reflexes, and endless fun!" />
        <meta name="keywords" content="Three Mania, microgames, gaming, developers, challenges" />
        <meta name="author" content="Three Mania Team" />
        <meta property="og:title" content="Three Mania" />
        <meta property="og:description" content="Dive into a world of quick thinking, reflexes, and endless fun with Three Mania, developed by the Three Dev community!" />
        <meta property="og:image" content="https://example.com/three-mania-thumbnail.jpg" />
        <meta property="og:url" content="https://example.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Three Mania" />
        <meta name="twitter:description" content="Dive into a world of quick thinking, reflexes, and endless fun with Three Mania, developed by the Three Dev community!" />
        <meta name="twitter:image" content="https://example.com/three-mania-thumbnail.jpg" />

        
      </Head>
      <Experience />
    </>
  );
}
