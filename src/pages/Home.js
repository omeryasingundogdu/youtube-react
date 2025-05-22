import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, rem, Loader, Center, ActionIcon, Transition } from '@mantine/core';
import VideoCard from '../components/VideoCard';
import CategoryNavigation from '../components/CategoryNavigation';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import videos from '../data/videos';
import './Home.css';

function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const loaderRef = useRef(null);
  const videosPerPage = 24; 
  
  useEffect(() => {
    let result = [...videos];
    
    if (activeCategory !== 'All') {
      result = result.filter(video => 
        video.content && video.content.includes(activeCategory)
      );
    }
    
    setFilteredVideos(result);
    setPage(1);
    
    if (activeCategory === 'All') {
      setVisibleVideos(result);
    } else {
      setVisibleVideos(result.slice(0, videosPerPage));
    }
  }, [activeCategory]);

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
    if (target.isIntersecting && !loading && filteredVideos.length > visibleVideos.length) {
      setPage(prev => prev + 1);
    }
  }, [loading, filteredVideos.length, visibleVideos.length]);

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
    if (page === 1 || activeCategory === 'All') return;
    
    setLoading(true);
    
    setTimeout(() => {
      const newVideos = filteredVideos.slice(
        (page - 1) * videosPerPage, 
        page * videosPerPage
      );
      
      setVisibleVideos(prev => [...prev, ...newVideos]);
      setLoading(false);
    }, 400);
  }, [page, filteredVideos, activeCategory]);

  console.log(`Toplam video sayısı: ${videos.length}, Gösterilen video sayısı: ${visibleVideos.length}`);

  return (
    <Box style={{ 
      backgroundColor: '#0f0f0f', 
      minHeight: '100vh',
      position: 'relative'
    }}>
      <CategoryNavigation activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <Box style={{ 
        padding: `${rem(16)} ${rem(24)}`,
      }}>
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
        
        {/* Loader for infinite scrolling - yalnızca "All" seçili değilken göster */}
        {activeCategory !== 'All' && filteredVideos.length > visibleVideos.length && (
          <Center ref={loaderRef} className="infinite-scroll-loader">
            {loading ? (
              <Loader color="gray" size="md" />
            ) : (
              <Box style={{ height: '20px' }} />
            )}
          </Center>
        )}
      </Box>

      {/* YouTube-style scroll to top button */}
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

export default Home;