import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Text, 
  Group, 
  Avatar, 
  Button, 
  Paper, 
  Flex,
  Divider,
  rem
} from '@mantine/core';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DownloadIcon from '@mui/icons-material/Download';
import { CheckCircle } from '@mui/icons-material';
import videos from '../data/videos';
import Comments from '../components/Comments';
import RelatedVideos from '../components/RelatedVideos';

function VideoPlayer({ videoId: propVideoId }) {
  const params = useParams();
  const paramVideoId = params.videoId;
  const finalVideoId = propVideoId || paramVideoId;
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [subscribed, setSubscribed] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [subtitlesEnabled, setSubtitlesEnabled] = useState(false);
  const [theaterMode, setTheaterMode] = useState(false);

  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const mainContainerRef = useRef(null);
  
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  const fallbackVideoIds = [
    "dQw4w9WgXcQ",
  ];

  useEffect(() => {
    if (finalVideoId && videos.length > 0) {
      let foundVideo = videos.find(v => v.id.toString() === finalVideoId);
      
      if (!foundVideo) {
        const videoIndex = parseInt(finalVideoId) || 0;
        foundVideo = videos[videoIndex < videos.length ? videoIndex : 0];
      }
      
      setVideo(foundVideo);
      
      const related = videos
        .filter(v => v.id.toString() !== finalVideoId)
        .slice(0, 20);
      setRelatedVideos(related);
    }
  }, [finalVideoId]);

  useEffect(() => {
    if (mainContainerRef.current) {
      const container = mainContainerRef.current;
      if (theaterMode) {
        container.style.width = '100%';
        container.style.maxWidth = '100%';
      } else {
        container.style.width = '70%';
        container.style.maxWidth = '';
      }
    }
  }, [theaterMode]);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.error("YouTube player destroy error:", e);
        }
      }
    };
  }, []);

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleShare = () => {
    alert('Paylaşım seçenekleri burada açılacak');
  };

  const handleDownload = () => {
    alert('İndirme başlatıldı');
  };

  const handleMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    alert('Daha fazla seçenek burada gösterilecek');
  };

  const handleToggleTheaterMode = () => {
    setTheaterMode(!theaterMode);
  };

  const handleToggleSubtitles = () => {
    setSubtitlesEnabled(!subtitlesEnabled);
  };

  const getVideoId = () => {
    if (video && video.videoUrl) {
      const youtubeId = getYouTubeVideoId(video.videoUrl);
      if (youtubeId) return youtubeId;
    }
    
    const index = typeof finalVideoId === 'string' ? parseInt(finalVideoId, 10) : finalVideoId;
    return fallbackVideoIds[index % fallbackVideoIds.length];
  };

  if (!video) return <Text>Yükleniyor...</Text>;

  const youtubeVideoId = getVideoId();
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&cc_load_policy=${subtitlesEnabled ? 1 : 0}&cc_lang_pref=tr&hl=tr&modestbranding=1&rel=0&showinfo=0`;

  return (
    <Box style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', padding: rem(16) }}>
      <Flex gap={rem(24)} align="flex-start">
        <Box ref={mainContainerRef} style={{ width: '70%' }}>
          <Box 
            ref={playerContainerRef}
            style={{ 
              width: '100%', 
              backgroundColor: '#000', 
              aspectRatio: theaterMode ? '21/9' : '16/9',
              marginBottom: rem(16),
              borderRadius: rem(12),
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={youtubeEmbedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
            ></iframe>
          </Box>

          <Text size="xl" fw={600} c="white" mb={rem(12)}>
            {video.title}
          </Text>

          <Flex 
            direction={{ base: 'column', md: 'row' }}
            justify="space-between" 
            align={{ base: 'flex-start', md: 'center' }}
            gap={{ base: rem(12), md: 0 }}
            mb={rem(20)}
          >
            <Group>
              <Avatar src={video.profilePic} size={40} radius="xl" />
              <Box>
                <Group spacing={rem(4)}>
                  <Text fw={600} c="white">{video.channel}</Text>
                  {video.verified && (
                    <CheckCircle style={{ color: '#aaa', fontSize: rem(14) }} />
                  )}
                </Group>
                <Text size="xs" c="dimmed">{video.views} abone</Text>
              </Box>
              <Button 
                variant={subscribed ? "outline" : "filled"} 
                color={subscribed ? "gray" : "red"}
                onClick={() => setSubscribed(!subscribed)}
                ml={rem(16)}
                style={{ borderRadius: rem(20) }}
              >
                {subscribed ? "Abone Olundu" : "Abone Ol"}
              </Button>
            </Group>

            <Group spacing={rem(8)} style={{ flexWrap: 'wrap' }}>
              <Box style={{ 
                backgroundColor: '#272727', 
                borderRadius: '18px',
                height: rem(36),
                display: 'flex',
                overflow: 'hidden'
              }}>
                <Box 
                  style={{ 
                    padding: `0 ${rem(12)}`,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={handleLike}
                >
                  <Group spacing={rem(6)} noWrap>
                    <ThumbUpOffAltIcon style={{ color: liked ? '#3ea6ff' : 'white', fontSize: rem(18) }}/>
                    <Text c={liked ? '#3ea6ff' : 'white'} size="sm" fw={500}>1K</Text>
                  </Group>
                </Box>
                
                <Divider orientation="vertical" color="#3f3f3f" sx={{ height: '60%' }} />
                
                <Box 
                  style={{ 
                    padding: `0 ${rem(12)}`,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={handleDislike}
                >
                  <ThumbDownOffAltIcon style={{ color: disliked ? '#3ea6ff' : 'white', fontSize: rem(18) }}/>
                </Box>
              </Box>
              
              <Box 
                style={{ 
                  backgroundColor: '#272727',
                  borderRadius: '18px',
                  padding: `0 ${rem(12)}`,
                  height: rem(36),
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                onClick={handleShare}
              >
                <Group spacing={rem(6)} noWrap>
                  <ShareIcon style={{ color: 'white', fontSize: rem(18) }}/>
                  <Text c="white" size="sm" fw={500}>Paylaş</Text>
                </Group>
              </Box>
              
              <Box 
                style={{ 
                  backgroundColor: '#272727',
                  borderRadius: '18px',
                  padding: `0 ${rem(12)}`,
                  height: rem(36),
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                onClick={handleDownload}
              >
                <Group spacing={rem(6)} noWrap>
                  <DownloadIcon style={{ color: 'white', fontSize: rem(18) }}/>
                  <Text c="white" size="sm" fw={500}>İndir</Text>
                </Group>
              </Box>
              
              <Box 
                style={{ 
                  backgroundColor: saved ? '#383838' : '#272727',
                  borderRadius: '18px',
                  padding: `0 ${rem(12)}`,
                  height: rem(36),
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                onClick={handleSave}
              >
                <Group spacing={rem(6)} noWrap>
                  <PlaylistAddIcon style={{ color: saved ? '#3ea6ff' : 'white', fontSize: rem(18) }}/>
                  <Text c={saved ? '#3ea6ff' : 'white'} size="sm" fw={500}>Kaydet</Text>
                </Group>
              </Box>
                
              <Box 
                style={{ 
                  backgroundColor: '#272727',
                  borderRadius: '50%',
                  width: rem(36),
                  height: rem(36),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                onClick={handleMoreOptions}
              >
                <MoreHorizIcon style={{ color: 'white', fontSize: rem(18) }}/>
              </Box>
            </Group>
          </Flex>

          <Paper 
            p={rem(16)} 
            mb={rem(24)}
            style={{ 
              backgroundColor: '#272727', 
              borderRadius: rem(12),
              border: 'none'
            }}
          >
            <Group position="apart" mb={rem(10)}>
              <Group spacing={rem(10)}>
                <Text fw={500} c="white">{video.views} görüntüleme</Text>
                <Text c="#aaaaaa">{video.time}</Text>
              </Group>
            </Group>
            <Text c="#e5e5e5" size="sm" lineClamp={3}>
              {video.description || "Bu video için açıklama bulunmuyor."}
            </Text>
          </Paper>
          
          <Comments videoId={finalVideoId} />
        </Box>

        <Box style={{ width: '30%' }}>
          <RelatedVideos videos={relatedVideos} onVideoSelect={(id) => navigate(`/watch/${id}`)} />
        </Box>
      </Flex>
    </Box>
  );
}

export default VideoPlayer; 