import React from 'react';
import { 
  Box, 
  Text, 
  Group, 
  Flex,
  Badge,
  Stack,
  rem
} from '@mantine/core';

function RelatedVideos({ videos, onVideoSelect }) {
  return (
    <>
      <Text fw={500} c="white" mb={rem(16)} size="md">Related videos</Text>
      <Stack spacing={rem(16)}>
        {videos.map((video, index) => (
          <Box 
            key={index}
            onClick={() => onVideoSelect(video.id)}
            style={{ cursor: 'pointer' }}
          >
            <Flex gap={rem(10)}>
              <Box style={{ 
                width: '168px',
                height: '94px', 
                position: 'relative',
                borderRadius: rem(8),
                overflow: 'hidden'
              }}>
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
                <Badge
                  pos="absolute"
                  bottom={rem(4)}
                  right={rem(4)}
                  bg="rgba(0, 0, 0, 0.8)"
                  c="white"
                  size="xs"
                  p={rem(4)}
                  style={{
                    borderRadius: rem(2),
                    fontSize: rem(11),
                    fontWeight: 600
                  }}
                >
                  {video.duration}
                </Badge>
              </Box>
              <Box style={{ flex: 1 }}>
                <Text size="sm" fw={500} c="white" lineClamp={2} style={{ fontSize: rem(14) }}>
                  {video.title}
                </Text>
                <Text size="xs" c="#aaaaaa" mt={rem(4)}>
                  {video.channel}
                </Text>
                <Group spacing={rem(4)} mt={rem(2)}>
                  <Text size="xs" c="#aaaaaa" style={{ fontSize: rem(12) }}>
                    {video.views} views
                  </Text>
                  <Text size="xs" c="#aaaaaa" style={{ fontSize: rem(10) }}>•</Text>
                  <Text size="xs" c="#aaaaaa" style={{ fontSize: rem(12) }}>
                    {video.time}
                  </Text>
                </Group>
              </Box>
            </Flex>
          </Box>
        ))}
      </Stack>
    </>
  );
}

export default RelatedVideos; 