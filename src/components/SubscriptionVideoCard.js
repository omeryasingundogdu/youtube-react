import React, { useState } from 'react';
import { 
  Card, 
  Image, 
  Text, 
  Group, 
  ActionIcon, 
  Badge, 
  Box,
  rem,
  Flex,
  Avatar,
  Tooltip,
} from '@mantine/core';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconMusic } from '@tabler/icons-react';
import { CheckCircle } from '@mui/icons-material';

function SubscriptionVideoCard({ thumbnail, title, channel, views, time, duration, profilePic, verified, isMusic, isShort, previewGif }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const getChannelInitials = (channelName) => {
    const words = channelName.split(' ');
    if (words.length === 1) {
      return `${words[0].charAt(0)}${words[0].charAt(words[0].length - 1)}`.toUpperCase();
    }
    return `${words[0].charAt(0)}${words[words.length - 1].charAt(0)}`.toUpperCase();
  };

  const getRandomColor = () => {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#00FFFF', '#FFFF00', 
                   '#FF4500', '#8A2BE2', '#7FFF00', '#DC143C', '#00CED1', '#FF69B4'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  const getImageSource = () => {
    if (isHovered && previewGif) {
      return previewGif;
    }
    return thumbnail;
  };

  return (
    <Card 
      shadow="none" 
      p={0}
      radius={0}
      style={{ 
        backgroundColor: 'transparent',
        color: 'white',
        cursor: 'pointer',
        width: '100%',
        margin: 0
      }}
    >
      <Box 
        pos="relative" 
        mb={rem(6)} 
        style={{ 
          aspectRatio: isShort ? '9/16' : '16/9',
          width: isShort ? '100%' : '100%',
          borderRadius: isShort ? rem(12) : 0,
          overflow: 'hidden'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={getImageSource()}
          alt={title}
          style={{ 
            borderRadius: isShort ? rem(12) : 0,
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            transition: 'all 0.3s ease'
          }}
        />
        
        <ActionIcon 
          size="xl" 
          radius="xl" 
          variant="filled" 
          pos="absolute"
          top="50%"
          left="50%"
          style={{ 
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            width: rem(42),
            height: rem(42),
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.2s'
          }}
          c="white"
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.9)'
            }
          })}
        >
          <PlayArrowIcon style={{ fontSize: rem(24) }} />
        </ActionIcon>
        
        {isShort ? (
          <Badge 
            pos="absolute" 
            bottom={rem(8)} 
            left={rem(8)}
            bg="rgba(255, 0, 0, 0.9)"
            c="white"
            size="sm"
            style={{
              borderRadius: rem(4),
              padding: `${rem(2)} ${rem(4)}`,
              fontSize: rem(11),
              textTransform: 'uppercase'
            }}
          >
            Short
          </Badge>
        ) : (
          <Badge 
            pos="absolute" 
            bottom={rem(8)} 
            right={rem(8)}
            bg="rgba(0, 0, 0, 0.8)"
            c="white"
            size="sm"
            style={{
              borderRadius: rem(4),
              padding: `${rem(2)} ${rem(4)}`,
              fontSize: rem(12)
            }}
          >
            {duration}
          </Badge>
        )}
      </Box>
      
      <Group noWrap spacing={rem(6)} mb={rem(6)}>
        {!isShort && profilePic ? (
          <Avatar
            src={profilePic}
            size={34}
            radius="xl"
          />
        ) : !isShort ? (
          <Avatar
            size={34}
            radius="xl"
            color={getRandomColor()}
            styles={{
              root: {
                border: '1px solid #333',
                fontSize: rem(14)
              }
            }}
          >
            {getChannelInitials(channel)}
          </Avatar>
        ) : null}
        
        <Box style={{ flex: 1 }}>
          <Flex justify="space-between" align="flex-start">
            <Text 
              size="md" 
              fw={500} 
              lh={1.3} 
              c="white"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                flex: 1,
                marginRight: rem(4),
                fontSize: isShort ? rem(13) : rem(14)
              }}
            >
              {title}
            </Text>
            
            <ActionIcon 
              variant="subtle" 
              color="gray"
              style={{ 
                color: '#909090'
              }}
              sx={(theme) => ({
                '&:hover': {
                  backgroundColor: '#3f3f3f'
                }
              })}
            >
              <MoreVertIcon style={{ fontSize: rem(18) }} />
            </ActionIcon>
          </Flex>
          
          <Box mt={rem(2)}>
            {isShort ? (
              <Text size="sm" c="dimmed" style={{ 
                fontSize: rem(12),
                color: '#AAAAAA'
              }}>
                {views} views
              </Text>
            ) : (
              <>
                <Group spacing={rem(4)} align="center">
                  <Text size="sm" c="dimmed" style={{ 
                    fontSize: rem(12),
                    color: '#AAAAAA'
                  }}>
                    {channel}
                  </Text>
                  {verified && (
                    <Tooltip label="Verified">
                      <CheckCircle style={{ color: '#909090', fontSize: rem(14) }} />
                    </Tooltip>
                  )}
                  {isMusic && (
                    <Tooltip label="Official artist channel">
                      <Box style={{
                        width: rem(14),
                        height: rem(14),
                        borderRadius: '50%',
                        backgroundColor: '#909090',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <IconMusic color="white" size={10} />
                      </Box>
                    </Tooltip>
                  )}
                </Group>
                <Group spacing={rem(6)} mt={2}>
                  <Text size="sm" c="dimmed" style={{ fontSize: rem(11) }}>
                    {views} views
                  </Text>
                  <Text size="sm" c="dimmed" style={{ fontSize: rem(11) }}>
                    •
                  </Text>
                  <Text size="sm" c="dimmed" style={{ fontSize: rem(11) }}>
                    {time}
                  </Text>
                </Group>
              </>
            )}
          </Box>
        </Box>
      </Group>
    </Card>
  );
}

export default SubscriptionVideoCard; 