import React from 'react';
import Markdown from 'markdown-to-jsx';
import fs, { readFileSync, readdirSync } from 'fs';
import { join, normalize } from 'path';
import DocApp from '@/modules/DocApp/DocApp';
import os from 'os';
const DocsPage = () => {
  const markdownContent = readFileSync('src/docs/index.md', 'utf-8');

  const readDocsPath = (directory: string) => {
    const paths: string[] = [];

    const files = fs.readdirSync(directory);

    files.forEach((item) => {
      const currentPath = normalize(join(directory, item));
      const stats = fs.statSync(currentPath);

      if (stats.isDirectory()) {
        // If it's a directory, recursively read its contents
        const subPaths = readDocsPath(currentPath);
        paths.push(...subPaths);
      } else if (stats.isFile() && (item.endsWith('.md') || item.endsWith('.mdx'))) {
        // If it's an MD or MDX file, add it to the paths array
        paths.push(currentPath);
      }
    });

    return paths;
  };

  const directory = 'src/docs'; // Specify the root directory
  const paths = readDocsPath(directory);

  const organizePathsBySections = (paths: string[]) => {
    const sections: Record<string, any> = {};
    const platform = os.platform() === 'win32' ? '\\' : '/'
    paths.forEach((path) => {
      const parts = path.split(platform);
      let currentSection: any = sections;

      for (const part of parts) {
        if (!currentSection[part]) {
          currentSection[part] = {};
        }
        currentSection = currentSection[part];
      }
    });
    // Shady fix!
    return sections as { src: { docs: Record<string, any> } };
  };
  const content = organizePathsBySections(paths);
  console.log(content);

  return (
    <DocApp
      markdownContent={markdownContent}
      docStructure={content.src.docs}
      paths={paths}
      directory={directory}
      os={os.platform()}
    />
  );
};

export default DocsPage;
