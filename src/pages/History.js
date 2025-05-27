import React from 'react';
import HistoryVideo from './videos/HistoryVideo';
import { Box } from '@mantine/core';

export function History() {
  return (
    <Box style={{ position: 'relative', marginTop: '56px' }}>
      <Box style={{ 
        minHeight: 'calc(100vh - 56px)'
      }}>
        <HistoryVideo />
      </Box>
    </Box>
  );
}

export default History;