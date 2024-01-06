import { StyledMarkdown } from '@/modules/DocApp/components';
import { Button } from '@chakra-ui/react';
import fs, { readFileSync } from 'fs';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import React from 'react';

/**
 * This page will allow:
 * /docs/category
 * /docs/category/subcategory
 * /docs/category/subcategory/and/much/more
 */
const SlugPage = ({ params }: { params: { slug: string[] } }) => {
  //Patch the path to real folder stucture
  const patchPath = `src/docs/${params.slug.join('/')}`;

  // Fin the current path
  const stats = fs.statSync(patchPath);

  let element: JSX.Element;
  if (!stats.isDirectory()) {
    const markdownContent = readFileSync(`${patchPath}`, 'utf-8');
    return (
      <>
        <StyledMarkdown>{markdownContent}</StyledMarkdown>
        <Button colorScheme="primary" mt={10}>
          <Link href="/docs">Back To Docs </Link>
        </Button>
      </>
    );
  }

  //TODO More work is need here
  return <h1>Not a file, is a folder</h1>;
};

export default SlugPage;
