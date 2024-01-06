import { ListItem, OrderedList, UnorderedList } from '@chakra-ui/layout';
import { ReactNode } from 'react';

interface ListProps {
  children: ReactNode;
}

export const UL = ({ children }: ListProps) => {
  return <UnorderedList my={4}>{children}</UnorderedList>;
};

export const OL = ({ children }: ListProps) => {
  return <OrderedList my={4}>{children}</OrderedList>;
};

export const LI = ({ children }: ListProps) => {
  return <ListItem>{children}</ListItem>;
};
