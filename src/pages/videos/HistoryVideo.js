import React from 'react';
import { Text, Box, rem, Flex, ActionIcon, Group} from '@mantine/core';
import '../Home.css';
import { IconX } from '@tabler/icons-react';
import HistorySidebar from '../../components/HistorySidebar';

function HistoryVideo() {
  const videos = [
    {
      thumbnail: 'https://i.ytimg.com/vi/LHdMhdJ8EIo/maxresdefault.jpg',
      profilePic: 'https://yt3.googleusercontent.com/j8dLzMqnVkA365J2YadEbX8pCH4SYJMGnKC4a7aYI0jl-85t5AbVwCA5-9jQfQWnq8kx09fs=s176-c-k-c0x00ffffff-no-rj',
      title: 'lorem ipsum dolor sit amet',
      channel: 'channel-name1',
      views: '15K',
      time: '3 days ago',
      duration: '10:42',
      verified: true,
      description: 'lorem ipsum dolor sit amet'
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      profilePic: 'https://yt3.googleusercontent.com/ytc/AIf8zZTDkfjqxGDNQiXX_S_cQVJi2Jk-T_qsK3mDdHGL=s176-c-k-c0x00ffffff-no-rj',
      title: 'lorem ipsum dolor sit amet',
      channel: 'channel-name3',
      views: '814K',
      time: '1 week ago',
      duration: '15:32',
      verified: true,
      description: 'lorem ipsum dolor sit amet'
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/Z9G5stlXoyg/maxresdefault.jpg',
      profilePic: 'https://yt3.googleusercontent.com/ytc/AIf8zZQHxXrYdMXr7jHR_o0Ln7ZgR8ZCSBAKxBXjxNYq=s176-c-k-c0x00ffffff-no-rj',
      title: 'lorem ipsum dolor sit amet',
      channel: 'channel-name2',
      views: '11K',
      time: '2 days ago',
      duration: '22:15',
      verified: true,
      description: 'lorem ipsum dolor sit amet'
    }
  ];

  return (
    <Box style={{ backgroundColor: '#0f0f0f', minHeight: '100vh' }}>
      <Box style={{
        maxWidth: '1284px',
        margin: '0 auto',
        padding: `${rem(24)} ${rem(32)}`,
        color: 'white'
      }}>
        
        <Flex mb={rem(24)}>
          <Box style={{ width: '70%' }}>
            <Text size="md" fw={600} mb={rem(24)} style={{ fontSize: rem(16) }}>Today</Text>
            
            <Box style={{
              display: 'flex',
              flexDirection: 'column',
              gap: `${rem(16)}`,
              maxWidth: '100%',
              margin: '0 auto',
            }}>
              {videos.map((video, index) => (
                <Flex 
                  key={index}
                  align="flex-start"
                  gap={rem(16)}
                  style={{
                    padding: `${rem(8)} ${rem(4)}`,
                    borderRadius: rem(8),
                    '&:hover': {
                      backgroundColor: '#272727'
                    }
                  }}
                >
                  <Box
                    style={{
                      width: rem(220),
                      height: rem(120),
                      flexShrink: 0,
                      position: 'relative',
                      borderRadius: rem(8),
                      overflow: 'hidden'
                    }}
                  >
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <Box
                      style={{
                        position: 'absolute',
                        bottom: rem(4),
                        right: rem(4),
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: `${rem(1)} ${rem(4)}`,
                        borderRadius: rem(2),
                        fontSize: rem(16)
                      }}
                    >
                      {video.duration}
                    </Box>
                  </Box>
                  
                  <Box style={{ flex: 1 }}>
                    <Text 
                      fw={500} 
                      mb={rem(4)}
                      style={{ 
                        fontSize: rem(14),
                        lineHeight: 1.3,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {video.title}
                    </Text>
                    
                    <Text 
                      size="xs" 
                      c="dimmed"
                      mb={rem(4)}
                      style={{ fontSize: rem(14) }}
                    >
                      {video.channel} • {video.views} views
                    </Text>
                    
                    <Text 
                      size="xs" 
                      c="dimmed"
                      style={{ 
                        fontSize: rem(14),
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {video.description}
                    </Text>
                  </Box>
                  
                  <Group spacing={rem(8)}>
                    <ActionIcon variant="subtle" color="gray" radius="xl">
                      <IconX size={18} />
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="gray" radius="xl">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path>
                      </svg>
                    </ActionIcon>
                  </Group>
                </Flex>
              ))}
            </Box>
          </Box>
          <HistorySidebar />
        </Flex>
      </Box>
    </Box>
  );
}

export default HistoryVideo;