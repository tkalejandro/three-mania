import React from "react";
import Markdown from "markdown-to-jsx";
import fs, { readFileSync, readdirSync } from "fs";
import { join } from "path";
import DocApp from "@/modules/DocApp/DocApp";

const DocsPage = () => {
  const markdownContent = readFileSync("src/docs/index.md", "utf-8");

  const readDocsPath = (directory: string) => {
    const paths: string[] = [];

    const files = fs.readdirSync(directory);

    files.forEach((item) => {
      const currentPath = join(directory, item);
      const stats = fs.statSync(currentPath);

      if (stats.isDirectory()) {
        // If it's a directory, recursively read its contents
        const subPaths = readDocsPath(currentPath);
        paths.push(...subPaths);
      } else if (
        stats.isFile() &&
        (item.endsWith(".md") || item.endsWith(".mdx"))
      ) {
        // If it's an MD or MDX file, add it to the paths array
        paths.push(currentPath);
      }
    });

    return paths;
  };

  const directory = "src/docs"; // Specify the root directory
  const paths = readDocsPath(directory);

  const organizePathsBySections = (paths: string[]) => {
    const sections: Record<string, any> = {};

    paths.forEach((path) => {
      const parts = path.split("/");
      let currentSection: any = sections;

      for (const part of parts) {
        if (!currentSection[part]) {
          currentSection[part] = {};
        }
        currentSection = currentSection[part];
      }
    });

    return sections;
  };
  const content = organizePathsBySections(paths);

  return (
    <DocApp
      markdownContent={markdownContent}
      docStructure={content.src.docs}
      paths={paths}
      directory={directory}
    />
  );
};

export default DocsPage;
