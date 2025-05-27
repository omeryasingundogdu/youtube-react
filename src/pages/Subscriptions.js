import React from 'react';
import SubscriptionsVideo from './videos/SubscriptionsVideo';
import { Box } from '@mantine/core';
import './Home.css';

export function Subscriptions() {
  return (
    <Box style={{ position: 'relative', marginTop: '56px' }}>
      <Box style={{ 
        minHeight: 'calc(100vh - 56px)'
      }}>
        <SubscriptionsVideo />
      </Box>
    </Box>
  );
}

export default Subscriptions; 