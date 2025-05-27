import React, { useRef } from 'react';
import { Group, Box, rem, ActionIcon, ScrollArea } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

function CategoryNavigation({ activeCategory, setActiveCategory }) {
  const scrollRef = useRef(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: scrollRef.current.scrollLeft - 300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: scrollRef.current.scrollLeft + 300, behavior: 'smooth' });
    }
  };

  const categories = [
    'All',
    'Gaming',
    'Counter-Strike 2',
    'Minecraft',
    'Dead by Daylight',
    'Portal',
    'Eğlence',
    'Belgesel',
    'Film',
    'Yaşam Tarzı',
    'Teknoloji',
    'Yemek',
    'Haber',
    'Politika',
    'Sosyal Medya',
    'Tepki',
    'Analiz',
    'Bilim',
    'İnternet'
  ];

  // "All" kategorisinin yerelleştirilmiş gösterimi
  const getCategoryLabel = (category) => {
    if (category === 'All') return 'Tümü';
    return category;
  };

  return (
    <Box
      style={{
        backgroundColor: '#0f0f0f',
        padding: `${rem(8)} 0`,
        position: 'sticky',
        top: '56px',
        zIndex: 90,
        borderBottom: '1px solid #303030',
        marginTop: 0,
        height: rem(56),
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <ActionIcon 
        onClick={scrollLeft}
        variant="transparent"
        color="white"
        style={{
          position: 'absolute',
          left: 0,
          zIndex: 10,
          height: '100%',
          borderRadius: 0,
          background: 'linear-gradient(to right, #0f0f0f 0%, rgba(15, 15, 15, 0.9) 50%, rgba(15, 15, 15, 0) 100%)',
          width: rem(40),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <IconChevronLeft size={18} />
      </ActionIcon>

      <ScrollArea 
        viewportRef={scrollRef}
        type="never" 
        scrollbarSize={0}
        style={{ 
          width: '100%',
          marginLeft: rem(32),
          marginRight: rem(32),
          maxHeight: rem(56)
        }}
      >
        <Group 
          spacing={rem(12)} 
          px={rem(16)}
          noWrap
          style={{
            flexWrap: 'nowrap',
            display: 'inline-flex',
            width: 'auto',
            height: rem(40),
            alignItems: 'center'
          }}
        >
          {categories.map((category) => (
            <div 
              key={category} 
              onClick={() => setActiveCategory(category)}
              style={{
                backgroundColor: activeCategory === category ? 'white' : '#272727',
                color: activeCategory === category ? 'black' : 'white',
                border: 'none',
                fontWeight: 400,
                fontSize: rem(14),
                padding: `${rem(6)} ${rem(12)}`,
                borderRadius: rem(8),
                cursor: 'pointer',
                userSelect: 'none',
                whiteSpace: 'nowrap',
                height: rem(32),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s ease'
              }}
            >
              {getCategoryLabel(category)}
            </div>
          ))}
        </Group>
      </ScrollArea>

      <ActionIcon 
        onClick={scrollRight}
        variant="transparent"
        color="white"
        style={{
          position: 'absolute',
          right: 0,
          zIndex: 10,
          height: '100%',
          borderRadius: 0,
          background: 'linear-gradient(to left, #0f0f0f 0%, rgba(15, 15, 15, 0.9) 50%, rgba(15, 15, 15, 0) 100%)',
          width: rem(40),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <IconChevronRight size={18} />
      </ActionIcon>
    </Box>
  );
}

export default CategoryNavigation; 