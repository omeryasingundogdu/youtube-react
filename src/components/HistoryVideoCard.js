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
  Menu
} from '@mantine/core';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import { CheckCircle } from '@mui/icons-material';
import { IconMusic } from '@tabler/icons-react';

function HistoryVideoCard({ 
  thumbnail, 
  profilePic, 
  title, 
  channel, 
  views, 
  time, 
  duration,
  description,
  previewGif,
  songArtist,
  verified
}) {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const getChannelInitials = (channelName) => {
    const words = channelName.split(' ');
    if (words.length === 1) {

      return `${words[0].charAt(0)}${words[0].charAt(words[0].length - 1)}`.toUpperCase();
    }
 
    return `${words[0].charAt(0)}${words[words.length - 1].charAt(0)}`.toUpperCase();
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
        marginBottom: rem(20),
        overflow: 'visible'
      }}
    >
      <Box 
        pos="relative" 
        mb={rem(10)} 
        style={{ 
          aspectRatio: '16/9',
          overflow: 'hidden',
          borderRadius: rem(12)
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={getImageSource()}
          alt={title}
          style={{ 
            borderRadius: rem(12),  
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
        
        <Badge 
          pos="absolute" 
          bottom={rem(8)} 
          right={rem(8)}
          bg="rgba(0, 0, 0, 0.8)"
          c="white"
          size="md"
          style={{
            borderRadius: rem(4),
            padding: `${rem(3)} ${rem(6)}`,
            fontSize: rem(12),
            fontWeight: 500
          }}
        >
          {duration}
        </Badge>
      </Box>
      
      <Box px={rem(0)} pb={rem(10)}>
        <Flex gap={rem(12)}>
          {profilePic ? (
            <Avatar
              src={profilePic}
              size={36}
              radius="xl"
            />
          ) : (
            <Avatar
              size={36}
              radius="xl"
              styles={{
                root: {
                  fontSize: rem(14)
                }
              }}
            >
              {getChannelInitials(channel)}
            </Avatar>
          )}
          
          <Box style={{ flex: 1 }}>
            <Text 
              fw={500} 
              lh={1.3} 
              c="white"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                marginBottom: rem(4),
                fontSize: rem(16)
              }}
            >
              {title}
            </Text>
            
            <Box>
              <Group spacing={rem(4)} align="center">
                <Text size="sm" c="dimmed" style={{ 
                  fontSize: rem(13),
                  color: '#AAAAAA'
                }}>
                  {channel}
                </Text>
                {songArtist && (
                  <Tooltip label="Official artists channel">
                    <Box style={{
                      width: rem(16),
                      height: rem(16),
                      borderRadius: '50%',
                      backgroundColor: '#909090',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <IconMusic color="white" size={12} />
                    </Box>
                  </Tooltip>
                )}
                {verified && (
                  <Tooltip label="Verified">
                    <CheckCircle style={{ color: '#909090', fontSize: rem(16) }} />
                  </Tooltip>
                )}
              </Group>
              <Group spacing={rem(4)} mt={0}>
                <Text size="sm" c="dimmed" style={{ fontSize: rem(13), color: '#AAAAAA' }}>
                  {views} views
                </Text>
                <Text size="sm" c="dimmed" style={{ fontSize: rem(13), color: '#AAAAAA' }}>
                  •
                </Text>
                <Text size="sm" c="dimmed" style={{ fontSize: rem(13), color: '#AAAAAA' }}>
                  {time}
                </Text>
              </Group>
            </Box>
          </Box>
          
          <Group spacing={rem(4)} style={{ flexShrink: 0 }}>
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
              <CloseIcon style={{ fontSize: rem(20) }} />
            </ActionIcon>
            <Menu 
              opened={menuOpened} 
              onChange={setMenuOpened}
              shadow="md" 
              width={200}
              position="bottom-end"
              transitionProps={{ transition: 'pop' }}
              withArrow
              styles={{
                dropdown: {
                  backgroundColor: '#282828',
                  border: '1px solid #3f3f3f',
                  color: 'white'
                },
                item: {
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#3f3f3f'
                  }
                }
              }}
            >
              <Menu.Target>
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpened(true);
                  }}
                >
                  <MoreVertIcon style={{ fontSize: rem(20) }} />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item>
                  Remove from Watch history
                </Menu.Item>
                <Menu.Item>
                  Save to Watch Later
                </Menu.Item>
                <Menu.Item>
                  Save to Playlist
                </Menu.Item>
                <Menu.Item>
                  Not interested
                </Menu.Item>
                <Menu.Item>
                  Don't recommend channel
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Flex>
      </Box>
    </Card>
  );
}

export default HistoryVideoCard;