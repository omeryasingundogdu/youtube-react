import React from 'react';
import { 
  Box, 
  TextInput, 
  Stack, 
  Text, 
  UnstyledButton, 
  Group,
  rem
} from '@mantine/core';
import { 
  IconSearch, 
  IconTrash, 
  IconPlayerPause,
  IconSettings,
  IconMessage,
  IconNotes,
  IconMessageCircle2,
  IconX
} from '@tabler/icons-react';

function HistorySidebar() {
  const menuItems = [
    {
      icon: <IconX size={18} stroke={1.5} />,
      text: 'Search watch history',
      isSearch: true
    },
    {
      icon: <IconTrash size={18} stroke={1.5} />,
      text: 'Clear all watch history'
    },
    {
      icon: <IconPlayerPause size={18} stroke={1.5} />,
      text: 'Pause watch history'
    },
    {
      icon: <IconSettings size={18} stroke={1.5} />,
      text: 'Manage all history'
    },
    {
      type: 'divider'
    },
    {
      text: 'Comments',
      icon: <IconMessage size={18} stroke={1.5} />
    },
    {
      text: 'Posts',
      icon: <IconNotes size={18} stroke={1.5} />
    },
    {
      text: 'Live chat',
      icon: <IconMessageCircle2 size={18} stroke={1.5} />
    }
  ];

  return (
    <Box 
      w={300} 
      style={{ 
        borderLeft: '1px solid #272727',
        height: 'calc(100vh - 56px)',
        position: 'fixed',
        right: 0,
        top: 56,
        backgroundColor: '#0f0f0f',
        color: 'white',
        padding: rem(24)
      }}
    >
      <Stack spacing={rem(8)}>
        {menuItems.map((item, index) => {
          if (item.type === 'divider') {
            return (
              <Box 
                key={index} 
                my={rem(8)} 
                style={{ 
                  borderTop: '1px solid #272727' 
                }} 
              />
            );
          }

          if (item.isSearch) {
            return (
              <TextInput
                key={index}
                placeholder="Search watch history"
                icon={<IconX size={16} stroke={1.5} />}
                styles={{
                  root: {
                    marginBottom: rem(16)
                  },
                  input: {
                    backgroundColor: '#222222',
                    border: 'none',
                    color: 'white',
                    height: rem(40),
                    '&::placeholder': {
                      color: '#888'
                    },
                    '&:focus': {
                      border: '1px solid #3ea6ff'
                    }
                  }
                }}
              />
            );
          }

          return (
            <UnstyledButton
              key={index}
              style={{
                width: '100%',
                padding: `${rem(10)} ${rem(12)}`,
                borderRadius: rem(8),
                transition: 'background-color 0.2s',
                cursor: 'pointer'
              }}
              sx={{
                '&:hover': {
                  backgroundColor: '#272727'
                }
              }}
            >
              <Group spacing={rem(24)} position="left" noWrap>
                {item.icon}
                <Text size="sm" style={{ color: '#f1f1f1' }}>
                  {item.text}
                </Text>
              </Group>
            </UnstyledButton>
          );
        })}
      </Stack>
    </Box>
  );
}

export default HistorySidebar; 