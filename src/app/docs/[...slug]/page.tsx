import fs, { readFileSync } from "fs";
import Markdown from "markdown-to-jsx";
import React from "react";

/**
 * This page will allow:
 * /docs/category
 * /docs/category/subcategory
 * /docs/category/subcategory/and/much/more
 */
const SlugPage = ({ params }: { params: { slug: string[] } }) => {
  //Patch the path to real folder stucture
  const patchPath = `src/docs/${params.slug.join("/")}`;

  // Fin the current path
  const stats = fs.statSync(patchPath);

  let element: JSX.Element;
  if (!stats.isDirectory()) {
    const markdownContent = readFileSync(`${patchPath}`, "utf-8");
    return <Markdown>{markdownContent}</Markdown>;
  }

  //TODO More work is need here
  return <h1>Not a file, is a folder</h1>;
};

export default SlugPage;
