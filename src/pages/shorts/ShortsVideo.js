import React from 'react';
import { Box, Text, Avatar, UnstyledButton, Group, ActionIcon } from '@mantine/core';
import { IconThumbUp, IconThumbDown, IconMessage, IconShare, IconDotsVertical, IconPlayerSkipForward } from '@tabler/icons-react';

function ShortsVideo() {
  const shortsData = [
    {
      id: 1,
      video: 'https://i.ytimg.com/vi/H2f0Wd3zNj0/maxresdefault.jpg', // Placeholder for actual video
      username: '@combatry',
      description: 'sadece HARBOR oynayıp, RADIANT oldum! | Valorant cypher kaçıyor, clove kovalıyor... #valorant #shorts',
      likes: '36K',
      comments: '116',
      music: 'Original Sound (Contains music from: Space Cadet - Martin Klem)'
    },
    {
      id: 2,
      video: 'https://i.ytimg.com/vi/H2f0Wd3zNj0/maxresdefault.jpg', // Placeholder for actual video
      username: '@Gezgin',
      description: 'Çin\'in Tianjin şehrinde bulunan büyüleyici kütüphanenin içinden görüntüler #shorts',
      likes: '193K',
      comments: '347',
      music: 'Harry Potter Theme (Piano Cover)'
    },
  ];

  const currentShort = shortsData[0]; // Display the first short for now

  return (
    <Box style={{ backgroundColor: '#0f0f0f', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box style={{ 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        {/* Video Container */}
        <Box style={{ 
          position: 'relative',
          width: '375px',
          height: '667px',
          backgroundColor: '#000',
          overflow: 'hidden',
          borderRadius: '8px',
        }}>
          {/* Video Content */}
          <Box style={{ 
            width: '100%', 
            height: '100%',
            position: 'relative',
          }}>
            <img 
              src={currentShort.video}
              alt="Short video"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            
            {/* Caption Overlay - Now at Bottom */}
            <Box style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              color: '#fff',
              zIndex: 2,
              padding: '12px',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.9))',
            }}>
              <Text fw={600} size="md" mb={8} style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                {currentShort.caption}
              </Text>
              
              <Group position="apart" align="center" mb={8}>
                <Group spacing={8}>
                  <Avatar 
                    size="sm" 
                    radius="xl" 
                    src="https://i.pravatar.cc/150?img=4" 
                  />
                  <Text size="sm" fw={500}>{currentShort.username}</Text>
                </Group>
              </Group>
              
              <Text size="sm" mb={8} style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                {currentShort.description}
              </Text>
              
              <Group spacing={4} align="center">
                <IconPlayerSkipForward size={16} />
                <Text size="xs" color="gray.3">{currentShort.music}</Text>
              </Group>
            </Box>
          </Box>
        </Box>
        
        {/* Right Side Actions - Outside Video Card */}
        <Box style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          marginLeft: '20px',
          padding: '15px 10px',
          backgroundColor: '#1a1a1a',
          borderRadius: '12px',
        }}>
          <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ActionIcon 
              variant="transparent" 
              radius="xl" 
              size="xl"
              color="white"
            >
              <IconThumbUp size={26} />
            </ActionIcon>
            <Text size="xs" color="white" mt={4}>{currentShort.likes}</Text>
          </Box>
          
          <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ActionIcon 
              variant="transparent" 
              radius="xl" 
              size="xl"
              color="white"
            >
              <IconThumbDown size={26} />
            </ActionIcon>
            <Text size="xs" color="white" mt={4}>Dislike</Text>
          </Box>
          
          <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ActionIcon 
              variant="transparent" 
              radius="xl" 
              size="xl"
              color="white"
            >
              <IconMessage size={26} />
            </ActionIcon>
            <Text size="xs" color="white" mt={4}>{currentShort.comments}</Text>
          </Box>
          
          <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ActionIcon 
              variant="transparent" 
              radius="xl" 
              size="xl"
              color="white"
            >
              <IconShare size={26} />
            </ActionIcon>
            <Text size="xs" color="white" mt={4}>Share</Text>
          </Box>
          
          <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ActionIcon 
              variant="transparent" 
              radius="xl" 
              size="xl"
              color="white"
            >
              <IconDotsVertical size={26} />
            </ActionIcon>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ShortsVideo; 