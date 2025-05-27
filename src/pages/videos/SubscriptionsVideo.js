import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, rem, Text, Loader, Center, ActionIcon, Transition } from '@mantine/core';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import VideoCard from '../../components/VideoCard';
import SubscriptionVideoCard from '../../components/SubscriptionVideoCard';
import videos from '../../data/videos';
import '../Home.css';

function SubscriptionsVideo() {
  const [visibleVideos, setVisibleVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const loaderRef = useRef(null);
  const videosPerPage = 24;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleObserver = useCallback((entries) => {
    const [target] = entries;
    if (target.isIntersecting && !loading && videos.length > visibleVideos.length) {
      setPage(prev => prev + 1);
    }
  }, [loading, videos.length, visibleVideos.length]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);
    
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [handleObserver]);

  useEffect(() => {
    if (page === 1) {
      setVisibleVideos(videos.slice(0, videosPerPage));
      return;
    }
    
    setLoading(true);
    
    setTimeout(() => {
      const newVideos = videos.slice(
        (page - 1) * videosPerPage, 
        page * videosPerPage
      );
      
      setVisibleVideos(prev => [...prev, ...newVideos]);
      setLoading(false);
    }, 400);
  }, [page]);


  return (
    <Box style={{ 
      backgroundColor: '#0f0f0f', 
      minHeight: '100vh',
      position: 'relative'
    }}>
      <Box style={{ 
        padding: `${rem(16)} ${rem(24)}`,
      }}>
        <Text fw={700} fz={24} mb={rem(24)} c="white">Abonelikler</Text>
        
        <Box style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: `${rem(16)} ${rem(16)}`,
          maxWidth: '100%',
          margin: '0 auto',
          '@media (max-width: 2100px)': {
            gridTemplateColumns: 'repeat(4, 1fr)'
          },
          '@media (max-width: 1600px)': {
            gridTemplateColumns: 'repeat(3, 1fr)'
          },
          '@media (max-width: 1200px)': {
            gridTemplateColumns: 'repeat(2, 1fr)'
          },
          '@media (max-width: 768px)': {
            gridTemplateColumns: 'repeat(1, 1fr)'
          }
        }}>
          {visibleVideos.map((video, index) => (
            <Box 
              key={index} 
              className="video-card-container"
              style={{ 
                width: '100%',
                maxWidth: '100%'
              }}
            >
              <VideoCard 
                {...video} 
                index={index}
                cssClasses={{
                  card: 'video-card',
                  thumbnail: 'video-thumbnail',
                  overlay: 'video-card-overlay',
                  playButton: 'video-play-button'
                }} 
              />
            </Box>
          ))}
        </Box>
        
        {videos.length > visibleVideos.length && (
          <Center ref={loaderRef} className="infinite-scroll-loader">
            {loading ? (
              <Loader color="gray" size="md" />
            ) : (
              <Box style={{ height: '20px' }} />
            )}
          </Center>
        )}
      </Box>

      <Transition mounted={showScrollTop} transition="fade" duration={400} timingFunction="ease">
        {(styles) => (
          <ActionIcon
            className="scroll-to-top-button"
            onClick={scrollToTop}
            style={{
              ...styles,
              position: 'fixed',
              bottom: rem(30),
              right: rem(30),
              width: rem(44),
              height: rem(44),
              borderRadius: '50%',
              backgroundColor: '#3f3f3f',
              zIndex: 1000
            }}
          >
            <KeyboardArrowUpIcon style={{ color: 'white', fontSize: rem(24) }} />
          </ActionIcon>
        )}
      </Transition>
    </Box>
  );
}

export default SubscriptionsVideo; 