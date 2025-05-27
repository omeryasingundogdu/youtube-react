import React from 'react';
import { 
  Box, 
  Text, 
  Group, 
  Avatar, 
  Stack,
  Button,
  rem
} from '@mantine/core';
import { ChevronDown } from 'tabler-icons-react';

function Subscriptions() {
  // Subscription data from sidebar.js
  const subscriptionData = [
    { id: 1, username: 'testttt', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, username: 'Hazretiyasuo', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, username: 'CombatRy', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, username: 'sweenwh', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, username: 'test_1', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 6, username: 'test_2', avatar: 'https://i.pravatar.cc/150?img=6' },
    { id: 7, username: 'test_3', avatar: 'https://i.pravatar.cc/150?img=7' }
  ];

  return (
    <Box 
      style={{ 
        backgroundColor: '#0f0f0f',
        padding: rem(16),
        width: '100%',
        maxWidth: rem(240),
      }}
    >
      <Text fw={600} c="white" mb={rem(16)} size="md">Subscriptions</Text>

      <Stack spacing={rem(16)}>
        {subscriptionData.map(subscription => (
          <Group key={subscription.id} spacing={rem(12)} style={{ cursor: 'pointer' }}>
            <Avatar 
              radius="xl" 
              size={24} 
              src={subscription.avatar} 
            />
            <Text c="white" size="sm" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {subscription.username}
            </Text>
          </Group>
        ))}

        <Button 
          variant="subtle" 
          color="gray" 
          leftIcon={<ChevronDown size={14} />}
          style={{ 
            padding: '0 rem(8)', 
            fontWeight: 'normal',
            color: 'white',
            justifyContent: 'flex-start'
          }}
          fullWidth
        >
          Show more
        </Button>
      </Stack>
    </Box>
  );
}

export default Subscriptions; 