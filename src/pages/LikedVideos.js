import React from 'react';
import { Box, rem, Text, Flex, Button, ActionIcon, Divider } from '@mantine/core';
import { Download, Play, Shuffle } from 'lucide-react';
import { MoreVert,} from '@mui/icons-material';

function LikedVideos() {

  const likedVideos = [
    {
      id: 1,
      title: '911 CARRERA',
      channel: 'DEHA INC',
      views: '756K',
      time: '1 year ago',
      duration: '1:45',
      thumbnail: 'https://i.ytimg.com/vi/50AsS1WbEFY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAWYc935JvsW359J3fOiqa5cfBB9g',
      index: 1
    },
    {
      id: 2,
      title: 'ŞEHRİM BEREKETLİ (Ba Sing Se)',
      channel: 'KILLOKI',
      views: '1.2M',
      time: '1 year ago',
      duration: '2:05',
      thumbnail: 'https://i.ytimg.com/vi/-E8v9-RK8tQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCEUtCrcIRGfoN16ePin0BSkOtl0A',
      index: 2
    },
    {
      id: 3,
      title: 'NASCAR',
      channel: 'KILLOKI',
      views: '170K',
      time: '1 year ago',
      duration: '2:11',
      thumbnail: 'https://i.ytimg.com/vi/-E8v9-RK8tQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCEUtCrcIRGfoN16ePin0BSkOtl0A',
      index: 3
    },
    {
      id: 4,
      title: 'VERIFIED DRG RACE',
      channel: 'KILLOKI',
      views: '121K',
      time: '1 year ago',
      duration: '1:48',
      thumbnail: 'https://i.ytimg.com/vi/-E8v9-RK8tQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCEUtCrcIRGfoN16ePin0BSkOtl0A',
      index: 4
    },
    {
      id: 5,
      title: 'LVL1 - FVN! (Lyric Video)',
      channel: 'LVL1',
      views: '1.1M',
      time: '3 years ago',
      duration: '3:08',
      thumbnail: 'https://i.ytimg.com/vi/JKPTonOjs5s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLD7DY1T60V8G157j6jcqv4pm88_AQ',
      index: 5
    },
    {
      id: 6,
      title: '15. No.1 - Erkin Koray Cover (Interlude)',
      channel: 'No.1',
      views: '354K',
      time: '9 years ago',
      duration: '2:29',
      thumbnail: 'https://i.ytimg.com/vi/7nD2W6pRRVk/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCdPgRA7SpuqNTuG5v4P1m0Z1KNOg',
      index: 6
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
          background: 'linear-gradient(to bottom, rgba(0, 91, 129, 0.9), rgba(0, 45, 70, 0.95))',
          width: rem(320),
          borderRadius: rem(12),
          overflow: 'hidden',
          flexShrink: 0
        }}>
          <Box pos="relative">
            <Box 
              component="img"
              src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
              alt="Liked Videos"
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
              Liked videos
            </Text>
          </Box>
          
          <Box p={rem(16)}>
            <Text c="gray.5" size="sm">ug_gu</Text>
            <Flex align="center" gap={rem(8)} mt={4}>
              <Text c="gray.5" size="sm">414 videos</Text>
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
          
          {likedVideos.map((video, idx) => (
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
                <Text align="center">{video.index}</Text>
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
                <Flex gap={rem(4)} align="center">
                  <Text c="gray.5" size="xs">{video.channel}</Text>
                  {video.channel === "KILLOKI" && 
                    <Text c="gray.5" size="xs">•</Text>
                  }
                  {video.channel === "KILLOKI" && 
                    <Text c="gray.5" size="xs">{video.views} views</Text>
                  }
                  <Text c="gray.5" size="xs">•</Text>
                  <Text c="gray.5" size="xs">{video.time}</Text>
                </Flex>
                {video.channel !== "KILLOKI" && 
                  <Text c="gray.5" size="xs">{video.views} views</Text>
                }
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

export default LikedVideos; 