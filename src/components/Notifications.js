import React from 'react';
import {
  Paper,
  Flex,
  Text,
  ActionIcon,
  Box,
  Avatar,
  Image,
  ScrollArea,
  UnstyledButton
} from '@mantine/core';
import { IconDots, IconSettings } from '@tabler/icons-react';

const Notifications = ({ visible, notifications }) => {
  if (!visible) return null;

  const importantNotifications = notifications.filter(n => n.category === 'important');
  const moreNotifications = notifications.filter(n => n.category === 'more');

  return (
    <Paper 
      shadow="md"
      style={{
        position: 'absolute',
        top: '40px',
        right: 0,
        width: '480px',
        backgroundColor: '#212121',
        border: '1px solid #303030',
        zIndex: 1000,
        borderRadius: '12px',
        overflow: 'hidden'
      }}
      withBorder
    >
      <Flex 
        justify="space-between" 
        align="center" 
        p="xs" 
        style={{ 
          borderBottom: '1px solid #303030', 
          backgroundColor: '#212121' 
        }}
      >
        <Text size="md" fw={500} color="white">Notifications</Text>
        <ActionIcon variant="subtle" color="gray">
          <IconSettings size={20} />
        </ActionIcon>
      </Flex>
      
      <ScrollArea style={{ height: '450px' }}>
        <Box>
          <Text 
            size="sm" 
            fw={600} 
            color="white" 
            p="sm"
            style={{ backgroundColor: '#181818' }}
          >
            Important
          </Text>
          
          {importantNotifications.map((notification) => (
            <UnstyledButton 
              key={notification.id}
              style={{ 
                padding: 0, 
                width: '100%', 
                display: 'flex',
                borderBottom: '1px solid #303030',
                backgroundColor: '#212121',
                alignItems: 'flex-start',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#383838'
                }
              }}
            >
              <Avatar src={notification.avatar} radius="xl" size="md" mr="md" />
              <Box style={{ flex: 1 }}>
                <Text size="sm" color="white" lineClamp={2}>
                  {notification.content}
                </Text>
                <Text size="xs" color="dimmed">
                  {notification.time}
                </Text>
              </Box>
              <Box ml="md">
                <Box style={{ position: 'relative' }}>
                  <Image
                    src={notification.thumbnail}
                    width={120}
                    height={68}
                    radius="md"
                  />
                  {notification.promo && (
                    <Box 
                      style={{ 
                        position: 'absolute', 
                        bottom: 5, 
                        left: 5, 
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        padding: 0,
                        borderRadius: '4px',
                        color: 'white',
                        fontSize: '12px'
                      }}
                    >
                      {notification.promo}
                    </Box>
                  )}
                </Box>
              </Box>
              <ActionIcon style={{ color: "white", backgroundColor: "#212121" }} ml="xs">
                <IconDots style={{ color: "white", backgroundColor: "#212121" }} size={16} />
              </ActionIcon>
            </UnstyledButton>
          ))}
          
          <Text 
            size="sm" 
            fw={600}
            color="white" 
            p="sm"
            style={{ backgroundColor: '#181818' }}
          >
            More notifications
          </Text>
          
          {moreNotifications.map((notification) => (
            <UnstyledButton 
              key={notification.id}
              style={{ 
                width: '100%', 
                display: 'flex',
                borderBottom: '1px solid #303030',
                backgroundColor: '#212121',
                alignItems: 'flex-start',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#383838'
                }
              }}
            >
              <Avatar src={notification.avatar} radius="xl" size="md" mr="md" />
              <Box style={{ flex: 1 }}>
                <Text size="sm" color="white" lineClamp={2}>
                  {notification.content}
                </Text>
                <Text size="xs" color="dimmed">
                  {notification.time}
                </Text>
              </Box>
              <Box ml="md">
                <Image
                  src={notification.thumbnail}
                  width={120}
                  height={68}
                  radius="md"
                />
              </Box>
              <ActionIcon style={{ color: "white", backgroundColor: "#212121" }} ml="xs">
                <IconDots style={{ color: "white", backgroundColor: "#212121" }} size={16} />
              </ActionIcon>
            </UnstyledButton>
          ))}
        </Box>
      </ScrollArea>
    </Paper>
  );
};

export default Notifications; 