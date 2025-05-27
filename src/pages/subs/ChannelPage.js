import React, { useState, useEffect } from 'react';
import { Box, Text, Avatar, Button, Group, Flex, Tabs, ActionIcon } from '@mantine/core';
import { Bell, BellOff, Search, MoreVertical } from 'lucide-react';

function ChannelPage({ channelId = 'sweenwh' }) {
  const [subscriptionStatus, setSubscriptionStatus] = useState('not-subscribed'); // 'not-subscribed', 'subscribed-no-bell', 'subscribed-bell'
  const [channelData, setChannelData] = useState(null);

  useEffect(() => {
  
   
    const loadChannelData = () => {
      
      const channelDataMap = {
        'user1': {
          name: 'user1',
          username: '@user1',
          subscribers: '2 subscribers',
          videoCount: '1 video',
          description: 'More about this channel',
          profilePic: '/src/pfp.jpg',
          videos: [
            {
              id: 1,
              title: 'lorem ipsum',
              views: '222 views',
              time: '8 days ago',
              duration: '0:24',
              thumbnail: 'https://i.ytimg.com/vi/wxRb2OxkM7E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIYXDCk9uVZSDO9nSz1QgRKPh_EA'
            }
          ]
        },
        'user2': {
          name: 'user2',
          username: '@user2',
          subscribers: '450K subscribers',
          videoCount: '312 videos',
          description: 'lorem ipsum',
          profilePic: 'https://i.pravatar.cc/150?img=1',
          videos: [
            {
              id: 1,
              title: 'lorem ipsum',
              views: '145K views',
              time: '3 days ago',
              duration: '18:45',
              thumbnail: 'https://i.ytimg.com/vi/LHdMhdJ8EIo/maxresdefault.jpg'
            },
            {
              id: 2,
              title: 'How I reached Global Elite in 30 days',
              views: '342K views',
              time: '2 weeks ago',
              duration: '22:17',
              thumbnail: 'https://i.ytimg.com/vi/63EBrTf56-0/hq720.jpg'
            }
          ]
        },
        'user3': {
          name: 'user3',
          username: '@user3',
          subscribers: '25.6M subscribers',
          videoCount: '87 videos',
          description: 'lorem ipsum',
          profilePic: 'https://i.pravatar.cc/150?img=3',
          videos: [
            {
              id: 1,
              title: 'lorem ipsum',
              views: '2.8M views',
              time: '1 month ago',
              duration: '15:22',
              thumbnail: 'https://i.ytimg.com/vi/PB1JMmG-sbw/maxresdefault.jpg'
            },
            {
              id: 2,
              title: 'lorem ipsum',
              views: '12M views',
              time: '3 weeks ago',
              duration: '32:45',
              thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
            }
          ]
        },
        'user4': {
          name: 'user4',
          username: '@user4',
          subscribers: '1.2M subscribers',
          videoCount: '218 videos',
          description: 'lorem ipsum',
          profilePic: 'https://i.pravatar.cc/150?img=4',
          videos: [
            {
              id: 1,
              title: 'lorem ipsum',
              views: '3.4M views',
              time: '5 months ago',
              duration: '24:30',
              thumbnail: 'https://i.ytimg.com/vi/-E8v9-RK8tQ/hqdefault.jpg'
            }
          ]
        },
        'user5': {
          name: 'user5',
          username: '@user5',
          subscribers: '785K subscribers',
          videoCount: '126 videos',
          description: 'lorem ipsum',
          profilePic: 'https://i.pravatar.cc/150?img=5',
          videos: [
            {
              id: 1,
              title: 'lorem ipsum',
              views: '892K views',
              time: '1 year ago',
              duration: '19:45',
              thumbnail: 'https://i.ytimg.com/vi/JKPTonOjs5s/hqdefault.jpg'
            }
          ]
        },
        'user6': {
          name: 'user6',
          username: '@user6',
          subscribers: '5.2M subscribers',
          videoCount: '342 videos',
          description: 'lorem ipsum',
          profilePic: 'https://i.pravatar.cc/150?img=12',
          videos: [
            {
              id: 1,
              title: 'lorem ipsum',
              views: '3.1M views',
              time: '2 months ago',
              duration: '14:22',
              thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg'
            }
          ]
        },
        'user7': {
          name: 'user7',
          username: '@user7',
          subscribers: '1.7M subscribers',
          videoCount: '87 videos',
          description: 'lorem ipsum',
          profilePic: 'https://i.pravatar.cc/150?img=22',
          videos: [
            {
              id: 1,
              title: 'lorem ipsum',
              views: '845K views',
              time: '6 months ago',
              duration: '8:45',
              thumbnail: 'https://i.ytimg.com/vi/G8KpPw303PY/hqdefault.jpg'
            }
          ]
        },
        'user8': {
          name: 'user8',
          username: '@user8',
          subscribers: '320K subscribers',
          videoCount: '54 videos',
          description: 'lorem ipsum',
          profilePic: 'https://i.pravatar.cc/150?img=33',
          videos: [
            {
              id: 1,
              title: 'lorem ipsum',
              views: '246K views',
              time: '3 weeks ago',
              duration: '22:18',
              thumbnail: 'https://i.ytimg.com/vi/u31qwQUeGuM/hqdefault.jpg'
            }
          ]
        },
        'user9': {
            name: 'user9',
            username: '@user9',
            subscribers: '3.8M subscribers',
            videoCount: '428 videos',
            description: 'lorem ipsum',
            profilePic: 'https://i.pravatar.cc/150?img=7',
            videos: [
              {
                id: 1,
                title: 'lorem ipsum',
                views: '1.4M views',
                time: '2 months ago',
                duration: '25:18',
                thumbnail: 'https://i.ytimg.com/vi/7nD2W6pRRVk/hqdefault.jpg'
              },
              {
                id: 2,
              title: 'lorem ipsum',
                views: '2.1M views',
                time: '3 weeks ago',
                duration: '14:32',
                thumbnail: 'https://i.ytimg.com/vi/50AsS1WbEFY/hqdefault.jpg'
              }
            ]
          }
        };
      
 
      setChannelData(channelDataMap[channelId] || channelDataMap['none']);
    };

    loadChannelData();
  }, [channelId]);

  const toggleSubscription = () => {
    if (subscriptionStatus === 'not-subscribed') {
      setSubscriptionStatus('subscribed-no-bell');
    } else {
      setSubscriptionStatus('not-subscribed');
    }
  };

  const toggleBell = () => {
    if (subscriptionStatus === 'subscribed-no-bell') {
      setSubscriptionStatus('subscribed-bell');
    } else if (subscriptionStatus === 'subscribed-bell') {
      setSubscriptionStatus('subscribed-no-bell');
    }
  };

  if (!channelData) {
    return (
      <Box style={{ 
        backgroundColor: '#0f0f0f', 
        minHeight: '100vh', 
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Loading channel...</Text>
      </Box>
    );
  }

  return (
    <Box style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', color: 'white' }}>
      {/* Kanal Kapak Kısmı */}
      <Box style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: '24px',
        paddingBottom: 0,
      }}>
        {/* Profil ve Bilgiler */}
        <Box style={{ 
          width: '100%', 
          maxWidth: '1200px', 
          display: 'flex', 
          alignItems: 'flex-start', 
          gap: '24px',
          padding: '16px 0'
        }}>
          {/* Profil Resmi */}
          <Avatar 
            src={channelData.profilePic} 
            size={128} 
            radius="50%" 
            style={{ flexShrink: 0 }}
          />
          
          {/* Kanal Bilgileri */}
          <Box style={{ flex: 1 }}>
            <Text size="xl" fw={700}>{channelData.name}</Text>
            <Text size="sm" c="dimmed" mb={8}>
              {channelData.username} · {channelData.subscribers} · {channelData.videoCount}
            </Text>
            
            <Group spacing={4}>
              <Text size="sm" c="dimmed" lineClamp={1} style={{ maxWidth: '400px' }}>
                {channelData.description}
              </Text>
              
              <Text size="sm" c="#3ea6ff" style={{ cursor: 'pointer' }}>
                ...more
              </Text>
            </Group>
          </Box>
          
          {/* Abone Ol Butonu ve Çan */}
          <Group spacing={8}>
            {subscriptionStatus.includes('subscribed') && (
              <ActionIcon 
                variant="subtle" 
                color="gray" 
                onClick={toggleBell}
                size="lg"
              >
                {subscriptionStatus === 'subscribed-bell' ? 
                  <Bell size={20} /> : 
                  <BellOff size={20} />
                }
              </ActionIcon>
            )}
            
            <Button 
              onClick={toggleSubscription}
              style={{
                backgroundColor: subscriptionStatus === 'not-subscribed' ? 'white' : '#272727',
                color: subscriptionStatus === 'not-subscribed' ? 'black' : 'white',
                border: 'none',
                borderRadius: '20px',
                fontWeight: 500
              }}
            >
              {subscriptionStatus === 'not-subscribed' ? 'Subscribe' : 'Subscribed'}
            </Button>
          </Group>
        </Box>
        
        {/* Tabs Menu */}
        <Tabs 
          defaultValue="videos" 
          style={{ 
            width: '100%', 
            maxWidth: '1200px',
            marginTop: '20px',
          }}
          styles={{
            tab: {
              color: 'white',
              fontWeight: 500,
              borderBottom: '3px solid transparent',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'transparent',
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
              gap: '16px',
              marginBottom: '8px'
            }
          }}
        >
          <Tabs.List>
            <Tabs.Tab value="videos">Videos</Tabs.Tab>
            <Tabs.Tab value="shorts">Shorts</Tabs.Tab>
            <Tabs.Tab value="live">Live</Tabs.Tab>
            <Tabs.Tab value="playlists">Playlists</Tabs.Tab>
            <Tabs.Tab value="community">Community</Tabs.Tab>
            <Tabs.Tab value="channels">Channels</Tabs.Tab>
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Box style={{ flex: 1 }}></Box>
            <ActionIcon variant="subtle" color="gray">
              <Search size={20} />
            </ActionIcon>
          </Tabs.List>
          
          <Tabs.Panel value="videos">
            {/* Video İçeriği */}
            <Box mt={24}>
              <Box 
                style={{
                  display: 'grid',
                  gridTemplateColumns: channelData.videos.length > 1 ? 'repeat(auto-fill, minmax(260px, 1fr))' : '1fr',
                  gap: '16px',
                  maxWidth: '100%'
                }}
              >
                {channelData.videos.map(video => (
                  <Box key={video.id} style={{ cursor: 'pointer', maxWidth: '260px' }}>
                    <Box style={{ position: 'relative', marginBottom: '8px' }}>
                      <Box 
                        component="img" 
                        src={video.thumbnail} 
                        alt={video.title}
                        style={{ 
                          width: '100%', 
                          aspectRatio: '16/9',
                          borderRadius: '8px',
                          objectFit: 'cover' 
                        }}
                      />
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
                    </Box>
                    
                    <Flex justify="space-between" align="flex-start">
                      <Box>
                        <Text 
                          lineClamp={2}
                          style={{ fontWeight: 500, fontSize: '14px', lineHeight: 1.3 }}
                        >
                          {video.title}
                        </Text>
                        
                        <Group spacing={4} mt={4}>
                          <Text size="xs" c="dimmed">
                            {video.views}
                          </Text>
                          <Text size="xs" c="dimmed">•</Text>
                          <Text size="xs" c="dimmed">
                            {video.time}
                          </Text>
                        </Group>
                      </Box>
                      
                      <ActionIcon variant="subtle" color="gray">
                        <MoreVertical size={16} />
                      </ActionIcon>
                    </Flex>
                  </Box>
                ))}
              </Box>
            </Box>
          </Tabs.Panel>
          
          <Tabs.Panel value="shorts">
            <Box p={24}>
              <Text c="dimmed">No shorts available</Text>
            </Box>
          </Tabs.Panel>
          
          <Tabs.Panel value="live">
            <Box p={24}>
              <Text c="dimmed">No live streams available</Text>
            </Box>
          </Tabs.Panel>
          
          <Tabs.Panel value="playlists">
            <Box p={24}>
              <Text c="dimmed">No playlists available</Text>
            </Box>
          </Tabs.Panel>
          
          <Tabs.Panel value="community">
            <Box p={24}>
              <Text c="dimmed">No community posts available</Text>
            </Box>
          </Tabs.Panel>
          
          <Tabs.Panel value="channels">
            <Box p={24}>
              <Text c="dimmed">No channels available</Text>
            </Box>
          </Tabs.Panel>
          
          <Tabs.Panel value="about">
            <Box p={24}>
              <Text c="dimmed">This channel doesn't have any content yet</Text>
            </Box>
          </Tabs.Panel>
        </Tabs>
      </Box>
    </Box>
  );
}

export default ChannelPage; 