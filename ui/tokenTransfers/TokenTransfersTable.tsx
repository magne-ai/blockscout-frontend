import { Table, Tbody, Tr, Th, Box } from '@chakra-ui/react';
import React from 'react';

import type { TokenTransfer } from 'types/api/tokenTransfer';

import { AddressHighlightProvider } from 'lib/contexts/addressHighlight';
import { default as Thead } from 'ui/shared/TheadSticky';
import TokenTransferTableItem from 'ui/tokenTransfers/TokenTransfersTableItem';

interface Props {
  items?: Array<TokenTransfer>;
  top: number;
  isLoading?: boolean;
}

const TokenTransferTable = ({ items, top, isLoading }: Props) => {
  return (
    <AddressHighlightProvider>
      <Box bgColor="customBlue.200"
        borderWidth="1px"
        borderRadius="8px"
        borderColor="customBlue.50">
        <Table variant="simple" size="sm" minW="950px" style={{ tableLayout: 'auto' }}
        >
          <Thead top={ top }>
            <Tr>
              <Th bgColor="transparent" color="white">Txn hash</Th>
              <Th bgColor="transparent" color="white">Method</Th>
              <Th bgColor="transparent" color="white">Block</Th>
              <Th bgColor="transparent" color="white">From/To</Th>
              <Th bgColor="transparent" color="white">Token ID</Th>
              <Th isNumeric bgColor="transparent" color="white">Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            { items?.map((item, index) => (
              <TokenTransferTableItem
                key={ item.transaction_hash + item.log_index + (isLoading ? index : '') }
                item={ item }
                isLoading={ isLoading }
              />
            )) }
          </Tbody>
        </Table>
      </Box>
    </AddressHighlightProvider>
  );
};

export default React.memo(TokenTransferTable);
