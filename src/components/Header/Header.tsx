import React from 'react';
import Link from 'next/link';

/**
 * THIS HEADER IS DUMMY. IT WILL CHANGE.
 * @returns
 */
const Header = () => {
  return (
    <header className="bg-gray-100  ">
      <div className="flex p-4 max-w-screen-2xl md:mx-auto">
        <div>Header Content</div>
        <ul className="flex flex-row">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/docs">Docs</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
