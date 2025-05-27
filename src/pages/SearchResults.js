import React, { useState, useEffect } from 'react';
import { Box, Text, Group, UnstyledButton, Flex, Divider, rem } from '@mantine/core';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { IconFilter } from '@tabler/icons-react';
import videos from '../data/videos';

function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);    // Filter videos based on the query - improved search algorithm
  useEffect(() => {
    if (query) {
      const searchFilter = query.toLowerCase();
      const filteredResults = videos.filter(video => {
        const titleMatch = video.title.toLowerCase().includes(searchFilter);
        const channelMatch = video.channel.toLowerCase().includes(searchFilter);
        const descriptionMatch = video.description && video.description.toLowerCase().includes(searchFilter);
        const contentMatch = video.content && video.content.some(tag => tag.toLowerCase().includes(searchFilter));
  
        return titleMatch || channelMatch || descriptionMatch || contentMatch;
      });
      
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <Box style={{ 
      backgroundColor: '#0f0f0f', 
      minHeight: 'calc(100vh - 56px)',
      padding: `${rem(20)} ${rem(30)}`,
      color: 'white'
    }}>
      <Group position="apart" mb={rem(16)}>
        <Box>
          <Text size="xl" fw={500} mb={rem(5)}>
            Arama sonuçları: "{query}"
          </Text>
          <Text size="sm" color="dimmed">
            {results.length} sonuç bulundu
          </Text>
        </Box>
        <UnstyledButton 
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#272727',
            padding: `${rem(8)} ${rem(16)}`,
            borderRadius: rem(18),
            cursor: 'pointer'
          }}
        >
          <IconFilter size={16} style={{ marginRight: rem(8) }} />
          <Text size="sm">Filtreler</Text>
        </UnstyledButton>
      </Group>
      
      <Divider color="#272727" mb={rem(20)} />
      
      <Box>
        {results.length > 0 ? (
          results.map((video, index) => (
            <Flex 
              key={index}
              mb={rem(20)}
              gap={rem(15)}
              align="flex-start"
            >
              <Box style={{ width: '360px', minWidth: '360px' }}>
                <VideoCard {...video} horizontal index={index} />
              </Box>
              <Box>
                <Text size="lg" fw={500} mb={rem(5)}>
                  {video.title}
                </Text>
                <Text size="xs" color="dimmed" mb={rem(5)}>
                  {video.views} görüntüleme • {video.time}
                </Text>
                <Group spacing={rem(5)} mb={rem(10)}>
                  <Box 
                    style={{
                      width: rem(24),
                      height: rem(24),
                      borderRadius: '50%',
                      overflow: 'hidden'
                    }}
                  >
                    <img 
                      src={video.profilePic} 
                      alt={video.channel} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                  <Text size="sm" color="dimmed">
                    {video.channel}
                  </Text>
                </Group>
                {video.description && (
                  <Text size="xs" color="dimmed" lineClamp={2}>
                    {video.description}
                  </Text>
                )}
              </Box>
            </Flex>
          ))
        ) : (
          <Box style={{ textAlign: 'center', padding: rem(50) }}>
            <Text size="lg">"{query}" için sonuç bulunamadı</Text>
            <Text size="sm" color="dimmed" mt={rem(10)}>
              Farklı anahtar kelimeler deneyebilir veya filtreleri değiştirebilirsiniz
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchResults; 