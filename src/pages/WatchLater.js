import React from 'react';
import { Box, rem, Text, Flex, Button, ActionIcon, Group, Divider } from '@mantine/core';
import { Download, Play, Shuffle } from 'lucide-react';
import { MoreVert } from '@mui/icons-material';

function WatchLater() {
  // Örnek watch later videoları
  const watchLaterVideos = [
    {
      id: 1,
      title: 'cs2 nasıl iyi oynanır',
      channel: 'Crizlayer',
      views: '132K',
      time: '2 months ago',
      duration: '34:11',
      thumbnail: 'https://i.ytimg.com/vi/LHdMhdJ8EIo/maxresdefault.jpg',
    },
    {
      id: 2,
      title: 'Valorant best agents',
      channel: 'Valorant',
      views: '346',
      time: '1 month ago',
      duration: '0:07',
      thumbnail: 'https://cdn.gameleap.com/thumbs/videos/valorant_PNwwiq3aH/valorant_PNwwiq3aH_1280x720.jpeg',
    },
    {
      id: 3,
      title: 'Interview with a Hitman | I Kill for 80,000 Lira - Latin America\'s Cartels',
      channel: 'Fatih Koparan',
      views: '907K',
      time: '5 months ago',
      duration: '24:42',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    },
    {
      id: 4,
      title: 'HOW TO make custom Stealth Cheat Engine | Bypass Forza Horizon 5 & other anti-cheats [2024]',
      channel: 'Sethioz',
      views: '49K',
      time: '1 year ago',
      duration: '12:04',
      thumbnail: 'https://i.ytimg.com/vi/63EBrTf56-0/hq720.jpg',
    },
    {
      id: 5,
      title: 'Large Insect',
      channel: 'anow',
      views: '11M',
      time: '16 years ago',
      duration: '0:22',
      thumbnail: 'https://i.ytimg.com/vi/PB1JMmG-sbw/maxresdefault.jpg',
    },
    {
      id: 6,
      title: 'Day 040 - 🐝 Micro css download button animation #coding #webdevelopment #frontend #programação #css',
      channel: 'Bharath',
      views: '6.1K',
      time: '8 months ago',
      duration: '0:29',
      thumbnail: 'https://www.mediadesignschool.com/sites/default/files/2024-05/Indie-Game-Showcase-2024-4397__FillWzkwMCw0NTBd.jpg',
    },
  ];

  return (
    <Box style={{ 
      backgroundColor: '#0f0f0f', 
      minHeight: '100vh',
      padding: `${rem(24)} ${rem(32)}`
    }}>
      <Flex gap={rem(24)} align="flex-start">
        {/* Sol taraf - Bilgi Kartı */}
        <Box style={{
          background: 'linear-gradient(to bottom, rgba(67, 52, 90, 0.8), rgba(36, 34, 57, 0.9))',
          width: rem(320),
          borderRadius: rem(12),
          overflow: 'hidden',
          flexShrink: 0
        }}>
          <Box pos="relative">
            <Box 
              component="img"
              src="https://i.ytimg.com/vi/LHdMhdJ8EIo/maxresdefault.jpg" 
              alt="Watch Later"
              style={{
                width: '100%',
                height: rem(180),
                objectFit: 'cover'
              }}
            />
            <Box 
              pos="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              style={{
                background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
              }}
            />
            <Text 
              pos="absolute" 
              bottom={rem(16)} 
              left={rem(16)} 
              c="white" 
              fw={700} 
              size="xl"
            >
              Watch later
            </Text>
          </Box>
          
          <Box p={rem(16)}>
            <Text c="gray.5" size="sm">ug_gu</Text>
            <Flex align="center" gap={rem(8)} mt={4}>
              <Text c="gray.5" size="sm">7 videos</Text>
              <Text c="gray.5" size="sm">•</Text>
              <Text c="gray.5" size="sm">No views</Text>
              <Text c="gray.5" size="sm">•</Text>
              <Text c="gray.5" size="sm">Updated today</Text>
            </Flex>
            
            <Flex mt={rem(16)} gap={rem(8)}>
              <ActionIcon 
                variant="subtle" 
                radius="xl" 
                size="lg" 
                c="gray.5"
                style={{
                  border: '1px solid #333',
                }}
              >
                <Download size={18} />
              </ActionIcon>
              
              <ActionIcon 
                variant="subtle" 
                radius="xl" 
                size="lg" 
                c="gray.5"
                style={{
                  border: '1px solid #333',
                }}
              >
                <MoreVert style={{ fontSize: rem(18) }} />
              </ActionIcon>
            </Flex>
            
            <Divider color="#333" my={rem(16)} />
            
            <Flex gap={rem(8)}>
              <Button 
                leftSection={<Play size={18} />}
                fullWidth
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  '&:hover': { backgroundColor: '#e0e0e0' }
                }}
              >
                Play all
              </Button>
              
              <Button 
                leftSection={<Shuffle size={18} />}
                variant="filled"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)' }
                }}
              >
                Shuffle
              </Button>
            </Flex>
          </Box>
        </Box>
        
        {/* Sağ taraf - Video Listesi */}
        <Box style={{ flex: 1 }}>
          <Flex gap={rem(16)} mb={rem(12)}>
            <Button 
              variant="filled" 
              size="xs"
              style={{
                backgroundColor: 'white',
                color: 'black',
                borderRadius: rem(20),
                fontWeight: 500,
                '&:hover': { backgroundColor: '#e0e0e0' }
              }}
            >
              All
            </Button>
            
            <Button 
              variant="outline" 
              size="xs"
              style={{
                color: 'white',
                borderColor: '#333',
                borderRadius: rem(20),
                fontWeight: 400,
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.05)' }
              }}
            >
              Videos
            </Button>
            
            <Button 
              variant="outline" 
              size="xs"
              style={{
                color: 'white',
                borderColor: '#333',
                borderRadius: rem(20),
                fontWeight: 400,
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.05)' }
              }}
            >
              Shorts
            </Button>
          </Flex>
          
          {watchLaterVideos.map((video, idx) => (
            <Flex 
              key={video.id} 
              align="center" 
              mb={rem(12)}
              style={{
                cursor: 'pointer',
                padding: `${rem(4)} ${rem(8)}`,
                borderRadius: rem(8),
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.05)' }
              }}
            >
              <Box style={{ width: rem(24), marginRight: rem(8), color: '#aaa' }}>
                <Text align="center">{idx + 1}</Text>
              </Box>
              
              <Box style={{ position: 'relative', flexShrink: 0, marginRight: rem(12) }}>
                <Box 
                  component="img"
                  src={video.thumbnail}
                  alt={video.title}
                  style={{
                    width: rem(160),
                    height: rem(90),
                    borderRadius: rem(8),
                    objectFit: 'cover'
                  }}
                />
                <Box 
                  style={{
                    position: 'absolute',
                    bottom: rem(4),
                    right: rem(4),
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: `${rem(1)} ${rem(4)}`,
                    borderRadius: rem(4),
                    fontSize: rem(12)
                  }}
                >
                  <Text c="white" size="xs">{video.duration}</Text>
                </Box>
              </Box>
              
              <Box style={{ flex: 1 }}>
                <Text c="white" lineClamp={2} style={{ fontSize: rem(15), fontWeight: 500 }}>
                  {video.title}
                </Text>
                <Text c="gray.5" size="xs">{video.channel}</Text>
                <Flex gap={rem(4)} align="center">
                  <Text c="gray.5" size="xs">{video.views} views</Text>
                  <Text c="gray.5" size="xs">•</Text>
                  <Text c="gray.5" size="xs">{video.time}</Text>
                </Flex>
              </Box>
              
              <ActionIcon variant="subtle" c="gray.5">
                <MoreVert style={{ fontSize: rem(20) }} />
              </ActionIcon>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}

export default WatchLater; 