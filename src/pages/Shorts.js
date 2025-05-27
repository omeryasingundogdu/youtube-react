import React from 'react';
import ShortsVideo from './shorts/ShortsVideo';
import { Box } from '@mantine/core';

function Shorts() {
  return (
    <Box style={{ position: 'relative', marginTop: '56px' }}>
      <Box style={{
        minHeight: 'calc(100vh - 56px)'
      }}>
        <ShortsVideo />
      </Box>
    </Box>
  );
}

export default Shorts; 