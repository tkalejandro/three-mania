import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import React, { ReactNode } from 'react';

interface TableProps {
  children: ReactNode;
}

export const TableWrapper = ({ children }: TableProps) => {
  return (
    <TableContainer
      style={{
        //TODO Horrible hardcoded color fix me please.
        border: '1px solid #E2E8F0',
        borderRadius: 10,
      }}
    >
      <Table variant="simple" colorScheme="gray">
        {children}
      </Table>
    </TableContainer>
  );
};

export const THead = ({ children }: TableProps) => {
  return <Thead>{children}</Thead>;
};

export const TBody = ({ children }: TableProps) => {
  return <Tbody>{children}</Tbody>;
};

export const TR = ({ children }: TableProps) => {
  return <Tr>{children}</Tr>;
};

export const TH = ({ children }: TableProps) => {
  return <Th>{children}</Th>;
};

export const TD = ({ children }: TableProps) => {
  return <Td>{children}</Td>;
};
