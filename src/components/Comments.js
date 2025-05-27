import React from 'react';
import { 
  Box, 
  Text, 
  Group, 
  Avatar, 
  Button, 
  Flex,
  Stack,
  ActionIcon,
  rem
} from '@mantine/core';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Comments({ videoId }) {
  const commentData = [
    {
      id: 1,
      username: '@blablaCAT',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      timeAgo: '2 months ago',
      content: 'thats a good video',
      likes: 634,
      replies: 9,
    },
    {
      id: 2,
      username: '@oi_oi_oi',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      timeAgo: '2 months ago',
      content: 'thats a good video',
      likes: 943,
      replies: 9,
    },
    {
      id: 3,
      username: '@cr7_fan',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      timeAgo: '1 month ago',
      content: 'thats a good video',
      likes: 387,
      replies: 7,
    },
    {
      id: 4,
      username: '@really_long_username',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
      timeAgo: '2 months ago',
      content: 'thats a good video',
      likes: 344,
      replies: 16,
    },
    {
      id: 5,
      username: '@long_username_123',
      avatar: 'https://randomuser.me/api/portraits/men/72.jpg',
      timeAgo: '1 month ago',
      content: 'thats a good video',
      likes: 21,
      replies: 1,
    }
  ];

  return (
    <Box mb={rem(24)}>
      <Flex justify="space-between" align="center" mb={rem(16)}>
        <Text fw={600} c="white" size="md">1,569 Comments</Text>
      </Flex>

      <Flex gap={rem(16)} mb={rem(24)}>
        <Avatar 
          radius="xl" 
          size={40} 
          src="https://randomuser.me/api/portraits/men/40.jpg" 
        />
        <Box style={{ flex: 1 }}>
          <Box 
            style={{ 
              borderBottom: '1px solid #3f3f3f', 
              padding: `${rem(8)} 0`, 
              width: '100%' 
            }}
          >
            <Text c="dimmed" size="sm">Add a comment...</Text>
          </Box>
        </Box>
      </Flex>

      <Stack spacing={rem(24)}>
        {commentData.map(comment => (
          <Box key={comment.id}>
            <Flex gap={rem(16)}>
              <Avatar 
                radius="xl" 
                size={40} 
                src={comment.avatar} 
              />
              <Box style={{ flex: 1 }}>
                <Flex justify="space-between">
                  <Group spacing={rem(6)} mb={rem(2)}>
                    <Text c="white" size="xs" fw={500}>{comment.username}</Text>
                    <Text c="dimmed" size="xs">{comment.timeAgo}</Text>
                  </Group>
                  <ActionIcon variant="subtle" color="gray" size="xs">
                    <MoreHorizIcon style={{ color: 'white', fontSize: rem(16) }} />
                  </ActionIcon>
                </Flex>
                <Text c="white" size="sm" mb={rem(6)}>  
                  {comment.content}
                </Text>
                <Flex align="center" gap={rem(16)}>
                  <Group spacing={rem(2)}>
                    <ActionIcon variant="subtle" size="xs">
                      <ThumbUpOffAltIcon style={{ color: 'white', fontSize: rem(16) }} />
                    </ActionIcon>
                    <Text c="dimmed" size="xs">{comment.likes}</Text>
                  </Group>
                  <ActionIcon variant="subtle" size="xs">
                    <ThumbDownOffAltIcon style={{ color: 'white', fontSize: rem(16) }} />
                  </ActionIcon>
                  <Text c="white" size="xs" fw={500}>Reply</Text>
                </Flex>
                {comment.replies > 0 && (
                  <Button 
                    variant="subtle" 
                    color="blue" 
                    compact 
                    mt={rem(6)}
                    leftIcon={<Text size="xs">▼</Text>}
                    style={{ padding: 0 }}
                  >
                    <Text size="xs" c="white">{comment.replies} replies</Text>
                  </Button>
                )}
              </Box>
            </Flex>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default Comments; 