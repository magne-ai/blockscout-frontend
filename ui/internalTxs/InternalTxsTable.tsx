import { Table, Tbody, Tr, Th, Box } from '@chakra-ui/react';
import React from 'react';

import type { InternalTransaction } from 'types/api/internalTransaction';

import { AddressHighlightProvider } from 'lib/contexts/addressHighlight';
import { currencyUnits } from 'lib/units';
import { default as Thead } from 'ui/shared/TheadSticky';

import InternalTxsTableItem from './InternalTxsTableItem';

interface Props {
  data: Array<InternalTransaction>;
  currentAddress?: string;
  isLoading?: boolean;
}

const InternalTxsTable = ({ data, currentAddress, isLoading }: Props) => {
  return (
    <AddressHighlightProvider>
      <Box bg="customBlue.200"
        borderWidth="1px"
        borderRadius="8px"
        borderColor="customBlue.50">
        <Table>
          <Thead top={ 68 } bg="gray.900">
            <Tr>
              <Th width="15%" bg="transparent" color="white">Parent txn hash</Th>
              <Th width="15%" bg="transparent" color="white">Type</Th>
              <Th width="10%" bg="transparent" color="white">Block</Th>
              <Th width="40%" bg="transparent" color="white">From/To</Th>
              <Th width="20%" isNumeric bg="transparent" color="white">
                Value { currencyUnits.ether }
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            { data.map((item, index) => (
              <InternalTxsTableItem
                key={ item.transaction_hash + '_' + index }
                { ...item }
                currentAddress={ currentAddress }
                isLoading={ isLoading }
              />
            )) }
          </Tbody>
        </Table>
      </Box>
    </AddressHighlightProvider>

  );
};

export default InternalTxsTable;
