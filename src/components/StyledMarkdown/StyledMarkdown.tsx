import Markdown from 'markdown-to-jsx';
import React, { ReactNode } from 'react';
import { H1, H2, H3, H4, H5, H6 } from '../ui/Headings';
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
} from '../ui/Texts';
interface StyledMarkdownProps {
  children: string;
}

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
          // a: {
          //   component: YourAnchorComponent,
          // },
          // img: {
          //   component: YourImageComponent,
          // },
          // code: {
          //   component: YourCodeComponent,
          // },
          // blockquote: {
          //   component: YourBlockquoteComponent,
          // },
          // ul: {
          //   component: YourUnorderedListComponent,
          // },
          // ol: {
          //   component: YourOrderedListComponent,
          // },
          // li: {
          //   component: YourListItemComponent,
          // },
          // hr: {
          //   component: YourHorizontalRuleComponent,
          // },
          // table: {
          //   component: YourTableComponent,
          // },
          // thead: {
          //   component: YourTableHeadComponent,
          // },
          // tbody: {
          //   component: YourTableBodyComponent,
          // },
          // tr: {
          //   component: YourTableRowComponent,
          // },
          // th: {
          //   component: YourTableHeaderCellComponent,
          // },
          // td: {
          //   component: YourTableCellComponent,
          // },
          // code: {
          //   component: YourCodeComponent,
          // },
          // pre: {
          //   component: YourPreComponent,
          // },
          // br: {
          //   component: YourLineBreakComponent,
          // },
          // hr: {
          //   component: YourHorizontalRuleComponent,
          // },
          // blockquote: {
          //   component: YourBlockquoteComponent,
          // },
          // img: {
          //   component:
          // }
        },
      }}
    >
      {children}
    </Markdown>
  );
};

export default StyledMarkdown;
