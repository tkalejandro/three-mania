'use client';
import React from 'react';
import Link from 'next/link';
import { ContentSection } from '@/types/DocAppTypes';
import { StyledMarkdown } from '@/components';

interface DocAppProps {
  markdownContent: string;
  docStructure: ContentSection;
  paths: string[];
  directory: string;
  os: NodeJS.Platform;
}

const DocApp = ({ markdownContent, docStructure, paths, directory, os }: DocAppProps) => {
  //This is because the final file name doenst work as url. We need the original path, but with the directory.
  // Directory can change, but 'docs' is not related to directory, we could change docs with chocolate if we want.
  // Or change directory but wont affect logic
  const assignUrl = (file: string) => {
    // Windows
    if (os === 'win32') {
      return paths
        .find((i) => i.includes(`\\${file}`))
        ?.replace(directory, 'docs')
        .replace('src', '');
    }
    // Mac
    return paths.find((i) => i.includes(`/${file}`))?.replace(directory, 'docs');
  };

  const generateNestedList = (content: ContentSection) => {
    const keys = Object.keys(content);

    if (keys.length === 0) {
      return null;
    }

    return (
      <ul>
        {keys.map((key) => {
          const finalUrl = assignUrl(key) ?? '';
          return (
            <li key={key}>
              <Link href={finalUrl.endsWith(key) ? finalUrl : ''}>{key}</Link>
              {/* This will loop the code until nested is finished */}
              {generateNestedList(content[key] as ContentSection)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <StyledMarkdown>{markdownContent}</StyledMarkdown>
      <hr />
      <h2>Content</h2>
      {generateNestedList(docStructure)}
    </div>
  );
};

export default DocApp;
