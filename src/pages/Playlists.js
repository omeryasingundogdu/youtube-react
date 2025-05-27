import React from 'react';
import { Box, rem, Text, Grid, Card, Image, Group, Avatar } from '@mantine/core';

function Playlists() {
  const playlists = [
    {
      id: 1,
      title: 'Favorite Videos',
      videoCount: 24,
      thumbnail: 'https://i.ytimg.com/vi/LHdMhdJ8EIo/maxresdefault.jpg'
    },
    {
      id: 2,
      title: 'Gaming Highlights',
      videoCount: 15,
      thumbnail: 'https://i.ytimg.com/vi/GrJFpITq56I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAW4C7bl0avie6L5obWQbGnioLbdA'
    },
    {
      id: 3,
      title: 'Music Collection',
      videoCount: 42,
      thumbnail: 'https://static01.nyt.com/images/2018/03/27/arts/27billboard/merlin_135771648_23c2ae85-f910-401e-b175-f8e5518f2794-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
    },
    {
      id: 4,
      title: 'CS2 Matches',
      videoCount: 8,
      thumbnail: 'https://i.ytimg.com/vi/63EBrTf56-0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCzvkqznv9jTKJ0lDPUZZK6Hnix5A'
    }
  ];

  return (
    <Box style={{ 
      backgroundColor: '#0f0f0f', 
      minHeight: '100vh',
      padding: `${rem(24)} ${rem(32)}`
    }}>
      <Text size="xl" fw={700} c="white" mb={rem(24)}>Playlists</Text>
      
      <Grid>
        {playlists.map((playlist) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }} key={playlist.id}>
            <Card 
              p={0} 
              radius="md" 
              style={{ 
                backgroundColor: '#1e1e1e',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Box pos="relative">
                <Image 
                  src={playlist.thumbnail}
                  height={180}
                  alt={playlist.title}
                  style={{ objectFit: 'cover' }}
                />
                <Box 
                  pos="absolute" 
                  bottom={0} 
                  right={0}
                  bg="rgba(0,0,0,0.7)"
                  px={rem(10)}
                  py={rem(5)}
                >
                  <Text c="white" size="sm">{playlist.videoCount} videos</Text>
                </Box>
              </Box>
              
              <Box p={rem(16)}>
                <Text c="white" fw={600} mb={rem(4)}>
                  {playlist.title}
                </Text>
                <Text c="dimmed" size="sm">Playlist</Text>
              </Box>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}

export default Playlists; 