import React, { useState, useRef } from 'react';
import {
  Box,
  Text,
  Button,
  Group,
  ThemeIcon,
  Stack,
  useMantineTheme,
  CloseButton,
  Paper,
} from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';

const UploadVideo = ({ onClose }) => {
  const theme = useMantineTheme();
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      setFiles(droppedFiles);
      console.log('Dosyalar bırakıldı:', droppedFiles);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
      console.log('Dosyalar seçildi:', selectedFiles);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Paper shadow="xl" radius="xl"
    
    bg="linear-gradient(rgb(56, 56, 56), rgb(10, 10, 10))"
    sx={{
      width: '100%',
      height: '100%',
      padding: theme.spacing.xl,
    }}>
      <CloseButton
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 10,
          color: '#ffffff',
        }}
      />
      
      <Box
        sx={{
          border: `2px dashed ${isDragging ? '#ffffff' : '#ffffff'}`,
          borderRadius: theme.radius.md,
          padding: theme.spacing.xl,
          transition: 'all 200ms ease',
          backgroundColor: isDragging ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Stack spacing="lg" align="center">
          <ThemeIcon 
            size={80} 
            radius={80} 
            color="white"
            variant="light"
            sx={{
              backgroundColor: isDragging ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              border: `1px solid #ffffff`,
            }}
          >
            <IconUpload size={40} stroke={1.5} color="#ffffff" />
          </ThemeIcon>

          <Text size="xl" fw={700} ta="center" color="#ffffff">
            Dosya yüklemek için sürükleyip bırakın
          </Text>

          <Text size="sm" c="#ffffff" ta="center">
            Videolarınız siz yayınlayana kadar gizli kalacak.
          </Text>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="video/*"
            style={{ display: 'none' }}
            multiple
          />

          <Group>
            <Button 
              variant="filled" 
              color="dark" 
              radius="md" 
              size="md"
              onClick={handleButtonClick}
              sx={{
                backgroundColor: '#000000',
                '&:hover': {
                  backgroundColor: '#444444',
                }
              }}
            >
              Dosya seç
            </Button>
            
            <Button
              variant="outline"
              radius="md"
              size="md"
              onClick={onClose}
              sx={{
                color: '#ff3333',
                borderColor: '#ff3333',
                '&:hover': {
                  backgroundColor: 'rgba(255, 51, 51, 0.2)',
                  borderColor: '#ff5555',
                  color: '#ff5555'
                }
              }}
            >
              İptal
            </Button>
          </Group>

          {files.length > 0 && (
            <Box mt="md">
              <Text size="sm" fw={500} color="#ffffff">
                {files.length} dosya seçildi
              </Text>
              {files.map((file, index) => (
                <Text key={index} size="xs" c="#ffffff">
                  {file.name}
                </Text>
              ))}
            </Box>
          )}
        </Stack>
      </Box>

      <Text size="xs" c="#ffffff" ta="center" mt="lg" maw={500} mx="auto">
        Videolarınızı YouTube'a yükleyerek, YouTube Hizmet Şartları'nı ve Topluluk Kuralları'nı kabul ettiğinizi onaylarsınız. Lütfen başkalarının telif hakkını veya gizlilik haklarını ihlal etmediğinizden emin olun.
      </Text>
    </Paper>
  );
};

export default UploadVideo;
