import React, { useState } from 'react';
import { Box, Text, Group, Title, Flex, Tabs, ActionIcon } from '@mantine/core';
import { MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const nowVideos = [
  {
    id: 1,
    title: "Sevgili Dili ve Edebiyatı 📝",
    channel: "uberkuloz",
    views: "3M views",
    time: "2 days ago",
    thumbnail: "https://i.ytimg.com/vi/KXzVQXJq5y8/hq720.jpg",
    duration: "0:24",
    channelAvatar: "https://i.pravatar.cc/150?img=3",
    isShort: true
  },
  {
    id: 2,
    title: "AFRIKA SÖZÜMÜZÜ TUTTUK",
    channel: "Ebo ve Çakal",
    views: "800K views",
    time: "20 hours ago",
    thumbnail: "https://i.ytimg.com/vi/LHdMhdJ8EIo/maxresdefault.jpg",
    duration: "42:08",
    channelAvatar: "https://i.pravatar.cc/150?img=1",
    description: "Herkese selam arkadaşlar, Afrika sözümüzü tuttuğumuz Tanzanya vloğu ile karşınızdayız. Şimdi sırada Cape Town var. Bir çok eğlenlik umarsız siz de eğlenirsiniz, iyi seyirler..."
  },
  {
    id: 3,
    title: "What did she want? 😳 @karina-kola",
    channel: "Andrey Grechka",
    views: "42M views",
    time: "2 days ago",
    thumbnail: "https://i.ytimg.com/vi/-E8v9-RK8tQ/hqdefault.jpg",
    duration: "0:15",
    channelAvatar: "https://i.pravatar.cc/150?img=4",
    isShort: true
  },
  {
    id: 4,
    title: "🧟 Zombies 🧟‍♂️ vs Steve 🙋‍♂️ vs Inhabitant 👨‍🌾 vs Creeper 🟩 | Which of them is stronger? 🤔",
    channel: "Rezoblik",
    views: "75M views",
    time: "3 days ago",
    thumbnail: "https://i.ytimg.com/vi/JKPTonOjs5s/hqdefault.jpg",
    duration: "0:22",
    channelAvatar: "https://i.pravatar.cc/150?img=5",
    isShort: true
  },
  {
    id: 5,
    title: "erkin koray no 1 cover",
    channel: "Uzunmakarna",
    views: "561K views",
    time: "20 hours ago",
    thumbnail: "https://i.ytimg.com/vi/7nD2W6pRRVk/hqdefault.jpg",
    duration: "12:20",
    channelAvatar: "https://i.pravatar.cc/150?img=7"
  }
];

const musicVideos = [
  {
    id: 1,
    title: "erkin koray no 1 cover",
    channel: "Uzunmakarna",
    views: "561K views",
    time: "20 hours ago",
    thumbnail: "https://i.ytimg.com/vi/7nD2W6pRRVk/hqdefault.jpg",
    duration: "12:20",
    channelAvatar: "https://i.pravatar.cc/150?img=7"
  },
  {
    id: 2,
    title: "Kendrick Lamar - Not Like Us (Official Video)",
    channel: "Kendrick Lamar",
    views: "45M views",
    time: "4 days ago",
    thumbnail: "https://i.ytimg.com/vi/r1h-2YtlvI4/hq720.jpg",
    duration: "3:47",
    channelAvatar: "https://i.pravatar.cc/150?img=10"
  },
  {
    id: 3,
    title: "Cakal, Reckol - HOP",
    channel: "Cakal",
    views: "2.1M views",
    time: "1 week ago",
    thumbnail: "https://i.ytimg.com/vi/9QfRqcNRGAY/hq720.jpg",
    duration: "3:12",
    channelAvatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 4,
    title: "Ezhel - Pavyon",
    channel: "Ezhel",
    views: "5.3M views",
    time: "5 days ago",
    thumbnail: "https://i.ytimg.com/vi/8Z2c-ctTv0E/hq720.jpg",
    duration: "3:35",
    channelAvatar: "https://i.pravatar.cc/150?img=12"
  }
];

const gamingVideos = [
  {
    id: 1,
    title: "🧟 Zombies 🧟‍♂️ vs Steve 🙋‍♂️ vs Inhabitant 👨‍🌾 vs Creeper 🟩 | Which of them is stronger? 🤔",
    channel: "Rezoblik",
    views: "75M views",
    time: "3 days ago",
    thumbnail: "https://i.ytimg.com/vi/JKPTonOjs5s/hqdefault.jpg",
    duration: "0:22",
    channelAvatar: "https://i.pravatar.cc/150?img=5",
    isShort: true
  },
  {
    id: 2,
    title: "I Survived 100 Days in HARDCORE Minecraft...",
    channel: "Wadzee",
    views: "12M views",
    time: "1 week ago",
    thumbnail: "https://i.ytimg.com/vi/n7wkSD_V0qA/hq720.jpg",
    duration: "36:14",
    channelAvatar: "https://i.pravatar.cc/150?img=14"
  },
  {
    id: 3,
    title: "CS2 - BEST OF SIMPLE",
    channel: "Tshirt",
    views: "1.8M views",
    time: "2 days ago",
    thumbnail: "https://i.ytimg.com/vi/LHdMhdJ8EIo/maxresdefault.jpg",
    duration: "15:28",
    channelAvatar: "https://i.pravatar.cc/150?img=1"
  }
];

const moviesVideos = [
  {
    id: 1,
    title: "Joker: Folie À Deux | Official Trailer",
    channel: "Warner Bros. Pictures",
    views: "22M views",
    time: "3 days ago",
    thumbnail: "https://i.ytimg.com/vi/03ymBj144ng/hq720.jpg",
    duration: "2:18",
    channelAvatar: "https://i.pravatar.cc/150?img=20"
  },
  {
    id: 2,
    title: "Dune 2 - Complete Analysis and Ending Explained",
    channel: "hdKAANFLIXceh",
    views: "5.7M views",
    time: "4 days ago",
    thumbnail: "https://i.ytimg.com/vi/7nD2W6pRRVk/hqdefault.jpg",
    duration: "32:14",
    channelAvatar: "https://i.pravatar.cc/150?img=7"
  },
  {
    id: 3,
    title: "The Best Movie of 2024 So Far",
    channel: "CinemaSins",
    views: "2.3M views",
    time: "1 week ago",
    thumbnail: "https://i.ytimg.com/vi/qf9o7hXxYwc/hq720.jpg",
    duration: "18:45",
    channelAvatar: "https://i.pravatar.cc/150?img=17"
  }
];

function Trending() {
  const [category, setCategory] = useState('now');
  const navigate = useNavigate();
  
  const logoStyle = {
    width: 80,
    height: 80,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    overflow: 'hidden'
  };

  const getVideosForCategory = () => {
    switch(category) {
      case 'music':
        return musicVideos;
      case 'gaming':
        return gamingVideos;
      case 'movies':
        return moviesVideos;
      case 'now':
      default:
        return nowVideos;
    }
  };

  const currentVideos = getVideosForCategory();

  return (
    <Box style={{ 
      backgroundColor: '#0F0F0F', 
      minHeight: '100vh', 
      color: 'white',
      padding: '20px'
    }}>
      <Box style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Group align="center" mb={24}>
          <Box style={logoStyle}>
            <img 
              src="https://www.youtube.com/img/trending/avatar/trending_animated.webp" 
              alt="Trending"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
          <Title order={2}>Trending</Title>
        </Group>
        
        <Tabs 
          value={category} 
          onChange={setCategory}
          style={{ borderBottom: '1px solid #272727', marginBottom: 20 }}
          styles={{
            tab: {
              color: 'white',
              fontWeight: 400,
              padding: '12px 16px',
              borderBottom: '3px solid transparent',
              marginRight: 0,
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'white',
                borderColor: '#3f3f3f'
              },
              '&[data-active]': {
                borderBottomColor: 'white',
                backgroundColor: 'transparent',
                color: 'white'
              }
            },
            tabsList: {
              border: 'none',
              gap: '16px'
            }
          }}
        >
          <Tabs.List>
            <Tabs.Tab value="now">Now</Tabs.Tab>
            <Tabs.Tab value="music">Music</Tabs.Tab>
            <Tabs.Tab value="gaming">Gaming</Tabs.Tab>
            <Tabs.Tab value="movies">Movies</Tabs.Tab>
          </Tabs.List>
        </Tabs>
        
        <Flex direction="column" gap={20}>
          {currentVideos.map((video, index) => (
            <Box 
              key={video.id} 
              style={{ 
                display: 'flex',
                gap: '16px',
                cursor: 'pointer',
                padding: '0 0 20px 0',
                borderRadius: '12px',
                position: 'relative'
              }}
              onClick={() => navigate(`/watch/${video.id}`)}
            >
              {/* Video Thumbnail */}
              <Box style={{ position: 'relative', flexShrink: 0 }}>
                <Box 
                  component="img" 
                  src={video.thumbnail} 
                  alt={video.title}
                  style={{ 
                    width: '320px', 
                    aspectRatio: '16/9',
                    borderRadius: '12px',
                    objectFit: 'cover' 
                  }}
                />
                {video.isShort ? (
                  <Box 
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      left: '8px',
                      backgroundColor: '#000000',
                      padding: '4px 6px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Text fw={700} size="xs">SHORTS</Text>
                  </Box>
                ) : (
                  <Box 
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      padding: '2px 4px',
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}
                  >
                    {video.duration}
                  </Box>
                )}
              </Box>
              
              {/* Video Info */}
              <Box style={{ flex: 1, maxWidth: 'calc(100% - 340px)' }}>
                <Group position="apart" align="flex-start" noWrap>
                  <Text size="lg" fw={500} lineClamp={2} mb={8} style={{ maxWidth: '90%' }}>
                    {video.title}
                  </Text>
                  <ActionIcon variant="subtle" color="gray">
                    <MoreVertical size={16} />
                  </ActionIcon>
                </Group>
                
                <Group spacing={4} noWrap>
                  <Text size="sm" c="dimmed">
                    {video.channel}
                  </Text>
                  <Text size="sm" c="dimmed">•</Text>
                  <Text size="sm" c="dimmed">
                    {video.views}
                  </Text>
                  <Text size="sm" c="dimmed">•</Text>
                  <Text size="sm" c="dimmed">
                    {video.time}
                  </Text>
                </Group>
                
                {video.description && (
                  <Text size="sm" c="dimmed" mt={8} lineClamp={2}>
                    {video.description}
                  </Text>
                )}
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default Trending; 