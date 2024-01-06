import { Th } from '@chakra-ui/table';
import Markdown from 'markdown-to-jsx';
import React, { ReactNode } from 'react';
import { Blockquote } from './ui/Blockquote';
import { Code, Pre } from './ui/Code';
import { HR } from './ui/Dividers';
import { H1, H2, H3, H4, H5, H6 } from './ui/Headings';
import { Img } from './ui/Images';
import { ExternalLink } from './ui/Links';
import { LI, OL, UL } from './ui/Lists';
import { TableWrapper, TBody, TD, TH, THead, TR } from './ui/Table';
import {
  Abbr,
  B,
  Cite,
  Del,
  Em,
  I,
  Ins,
  Kbd,
  Mark,
  P,
  Samp,
  Strikethrough,
  Strong,
  Sub,
  Sup,
  Underline,
} from './ui/Texts';
interface StyledMarkdownProps {
  children: string;
}
/**
 * Documentation
 * https://www.npmjs.com/package/markdown-to-jsx
 */
const StyledMarkdown = ({ children }: StyledMarkdownProps) => {
  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            component: H1,
          },
          h2: {
            component: H2,
          },
          h3: {
            component: H3,
          },
          h4: {
            component: H4,
          },
          h5: {
            component: H5,
          },
          h6: {
            component: H6,
          },
          p: {
            component: P,
          },
          em: {
            component: Em,
          },
          i: {
            component: I,
          },
          b: {
            component: B,
          },
          strong: {
            component: Strong,
          },
          u: {
            component: Underline,
          },
          abbr: {
            component: Abbr,
          },
          cite: {
            component: Cite,
          },
          del: {
            component: Del,
          },
          ins: {
            component: Ins,
          },
          kbd: {
            component: Kbd,
          },
          mark: {
            component: Mark,
          },
          s: {
            component: Strikethrough,
          },
          samp: {
            component: Samp,
          },
          sub: {
            component: Sub,
          },
          sup: {
            component: Sup,
          },
          a: {
            component: ExternalLink,
          },
          img: {
            component: Img,
          },
          code: {
            component: Code,
          },
          blockquote: {
            //TODO Needs work
            component: Blockquote,
          },
          ul: {
            component: UL,
          },
          ol: {
            component: OL,
          },
          li: {
            component: LI,
          },
          hr: {
            component: HR,
          },
          table: {
            component: TableWrapper,
          },
          thead: {
            component: THead,
          },
          tbody: {
            component: TBody,
          },
          tr: {
            component: TR,
          },
          th: {
            component: TH,
          },
          td: {
            component: TD,
          },
          pre: {
            component: Pre,
          },
          //TODO Not sure if is really needed.
          // br: {
          //   component: YourLineBreakComponent,
          // },
        },
      }}
    >
      {children}
    </Markdown>
  );
};

export default StyledMarkdown;
