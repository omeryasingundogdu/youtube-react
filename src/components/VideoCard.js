import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card, 
  Image, 
  Text, 
  Group, 
  ActionIcon, 
  Box,
  rem,
  Flex,
  Avatar,
  Tooltip,
  Menu
} from '@mantine/core';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconMusic } from '@tabler/icons-react';
import { CheckCircle } from '@mui/icons-material';

function VideoCard({ id, thumbnail, title, channel, views, time, duration, profilePic, songArtist, verified, content, horizontal, previewGif, index, videoUrl }) {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const cardRef = useRef(null);
  const previewTimeoutRef = useRef(null);
  const navigate = useNavigate();
  
  // Intersection Observer for lazy loading and reveal animation
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Temizleme fonksiyonu
  useEffect(() => {
    return () => {
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
      }
    };
  }, []);

  const getChannelInitials = (channelName) => {
    const words = channelName.split(' ');
    if (words.length === 1) {
      return `${words[0].charAt(0)}${words[0].charAt(words[0].length - 1)}`.toUpperCase();
    }
    return `${words[0].charAt(0)}${words[words.length - 1].charAt(0)}`.toUpperCase();
  };

  const getRandomColor = () => {
    const colors = ['#FF0000'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Alternatif GIF önizleme
  const getVideoPreview = () => {
    // YouTube videosu için önizleme GIF'i oluştur
    if (videoUrl && videoUrl.includes('youtube.com/watch?v=')) {
      const videoId = videoUrl.split('v=')[1]?.split('&')[0];
      if (videoId) {
        return `https://i.ytimg.com/vi_webp/${videoId}/mqdefault.webp`;
      }
    }
    
    // Fallback olarak dogGif kullan veya thumbnail kullan
    return previewGif || thumbnail;
  };

  const handleVideoClick = () => {
    navigate(`/watch/${id !== undefined ? id : (index || 0)}`);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    
    // Önizleme GIF'ini göstermek için zamanlayıcı ayarla (500ms gecikme)
    previewTimeoutRef.current = setTimeout(() => {
      setShowPreview(true);
    }, 500);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowPreview(false);
    
    // Zamanlayıcıyı temizle
    if (previewTimeoutRef.current) {
      clearTimeout(previewTimeoutRef.current);
      previewTimeoutRef.current = null;
    }
  };

  // YouTube-style animation and lazy loading styles
  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
  };

  // Görüntülenecek resim kaynağını belirle
  const getCurrentImageSource = () => {
    if (showPreview) {
      return getVideoPreview();
    }
    return thumbnail;
  };

  if (horizontal) {
    return (
      <Card 
        ref={cardRef}
        shadow="none" 
        p={0}
        radius={0}
        style={{ 
          backgroundColor: 'transparent',
          color: 'white',
          cursor: 'pointer',
          width: '100%',
          ...animationStyle
        }}
        onClick={handleVideoClick}
      >
        <Box 
          pos="relative" 
          style={{ width: '100%', aspectRatio: '16/9' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isVisible && (
            <>
              <Image
                src={getCurrentImageSource()}
                alt={title}
                loading="lazy"
                onLoad={handleImageLoad}
                style={{ 
                  borderRadius: rem(8),
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  opacity: imageLoaded ? 1 : 0
                }}
              />
              
              {!imageLoaded && (
                <Box 
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#1f1f1f',
                    borderRadius: rem(8)
                  }}
                />
              )}
              
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
              
            
            </>
          )}
        </Box>
      </Card>
    );
  }

  return (
    <Card 
      ref={cardRef}
      shadow="none"
      p={0}
      radius={0}
      style={{ 
        backgroundColor: 'transparent',
        color: 'white',
        cursor: 'pointer',
        width: '100%',
        marginBottom: rem(20),
        overflow: 'visible',
        ...animationStyle
      }}
      onClick={handleVideoClick}
    >
      <Box 
        pos="relative" 
        mb={rem(10)} 
        style={{ 
          aspectRatio: '16/9',
          overflow: 'hidden',
          borderRadius: rem(12)
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isVisible && (
          <>
            <Image
              src={getCurrentImageSource()}
              alt={title}
              loading="lazy"
              onLoad={handleImageLoad}
              style={{ 
                borderRadius: rem(12),
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                opacity: imageLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            />
            
            {!imageLoaded && (
              <Box 
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#1f1f1f',
                  borderRadius: rem(12)
                }}
              />
            )}
            
            <ActionIcon 
              size="xl" 
              radius="xl" 
              variant="filled" 
              pos="absolute"
              top="50%"
              left="50%"
              style={{ 
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                width: rem(46),
                height: rem(46),
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.2s'
              }}
              c="white"
              sx={(theme) => ({
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)'
                }
              })}
            >
              <PlayArrowIcon style={{ fontSize: rem(30) }} />
            </ActionIcon>
            
  
            
            {showPreview && (
              <Box 
                pos="absolute"
                bottom={0}
                left={0}
                right={0}
                style={{
                  height: rem(3),
                  backgroundColor: 'red',
                  zIndex: 5
                }}
              />
            )}
          </>
        )}
      </Box>

      <Group position="apart" spacing={8} noWrap>
        <Group spacing={rem(10)} noWrap style={{ flex: 1, overflow: 'hidden' }}>
          {profilePic ? (
            <Avatar 
              src={profilePic} 
              size={rem(36)} 
              radius="xl"
              style={{ flexShrink: 0 }}
            />
          ) : (
            <Avatar 
              color={getRandomColor()} 
              radius="xl" 
              size={rem(36)}
              style={{ flexShrink: 0 }}
            >
              {getChannelInitials(channel)}
            </Avatar>
          )}
          
          <Box style={{ flex: 1, overflow: 'hidden' }}>
            <Text 
              size="sm" 
              weight={500} 
              lineClamp={2}
              style={{ 
                marginBottom: rem(4),
                lineHeight: 1.3
              }}
            >
              {title}
            </Text>
            
            <Group spacing={rem(4)} noWrap align="center">
              <Text 
                size="xs" 
                color="dimmed"
                style={{ 
                  maxWidth: '100%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {channel}
              </Text>
              
              {verified && (
                <Tooltip label="Doğrulanmış" position="top" withArrow>
                  <Box>
                    <CheckCircle 
                      style={{ 
                        fontSize: rem(14), 
                        color: '#aaa',
                        marginLeft: rem(4),
                        marginTop: rem(1)
                      }} 
                    />
                  </Box>
                </Tooltip>
              )}
              
              {songArtist && (
                <Tooltip label="Müzik Sanatçısı" position="top" withArrow>
                  <Box>
                    <IconMusic 
                      style={{ 
                        width: rem(14), 
                        height: rem(14), 
                        color: '#aaa',
                        marginLeft: rem(4),
                        marginTop: rem(1)
                      }} 
                    />
                  </Box>
                </Tooltip>
              )}
            </Group>
            
            <Group spacing={rem(4)} mt={rem(2)}>
              <Text size="xs" color="dimmed">
                {views} görüntülenme
              </Text>
              <Text size="xs" color="dimmed">•</Text>
              <Text size="xs" color="dimmed">
                {time}
              </Text>
            </Group>
          </Box>
        </Group>
        
        <Menu
          opened={menuOpened}
          onChange={setMenuOpened}
          position="bottom-end"
          transition="pop"
          withArrow
          shadow="md"
          width={200}
          withinPortal
        >
          <Menu.Target>
            <ActionIcon 
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpened(true);
              }}
              variant="subtle"
              color="gray"
              style={{ 
                marginTop: rem(-2),
                visibility: isHovered ? 'visible' : 'hidden',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.2s'
              }}
            >
              <MoreVertIcon style={{ fontSize: rem(22) }} />
            </ActionIcon>
          </Menu.Target>
          
          <Menu.Dropdown>
            <Menu.Item>Daha sonra izle</Menu.Item>
            <Menu.Item>Oynatma listesine ekle</Menu.Item>
            <Menu.Item>İndirme</Menu.Item>
            <Menu.Item>Paylaş</Menu.Item>
            <Menu.Item color="red">İlgilenmiyorum</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
      
    </Card> 
  );
}

export default VideoCard;