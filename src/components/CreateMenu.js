import React, { useState } from 'react';
import { Paper, Group, UnstyledButton, Box, Text, Modal } from '@mantine/core';
import UploadVideo from './UploadVideo';

// SVG icons as React components
const UploadVideoIcon = () => (
  <div style={{ width: '24px', height: '24px', display: 'block', fill: 'currentcolor' }}>
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
      <path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path>
    </svg>
  </div>
);

const GoLiveIcon = () => (
  <div style={{ width: '24px', height: '24px', display: 'block', fill: 'currentcolor' }}>
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
      <g>
        <path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"></path>
      </g>
    </svg>
  </div>
);

const CreatePostIcon = () => (
  <div style={{ width: '24px', height: '24px', display: 'block', fill: 'currentcolor' }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
      <path d="M15.01,7.34l1.64,1.64L8.64,17H6.99v-1.64L15.01,7.34 M15.01,5.92l-9.02,9.02V18h3.06l9.02-9.02L15.01,5.92L15.01,5.92z M17.91,4.43l1.67,1.67l-0.67,0.67L17.24,5.1L17.91,4.43 M17.91,3.02L15.83,5.1l3.09,3.09L21,6.11L17.91,3.02L17.91,3.02z M21,10h-1 v10H4V4h10V3H3v18h18V10z"></path>
    </svg>
  </div>
);

function CreateMenu({ visible, onItemClick }) {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  if (!visible) return null;

  const handleUploadClick = () => {
    setUploadModalOpen(true);
  };
  
  const closeUploadModal = () => {
    setUploadModalOpen(false);
  };

  return (
    <>
      <Modal
        opened={uploadModalOpen}
        onClose={closeUploadModal}
        size="lg"
        centered
        withCloseButton={true}
        padding={0}
        styles={{
          header: { display: 'none' },
          body: { padding: 0 },
          content: { backgroundColor: 'transparent', boxShadow: 'none' }
        }}
      >
        <UploadVideo onClose={closeUploadModal} />
      </Modal>

      <Paper
        shadow="md"
        radius="sm"
        style={{
          position: 'absolute',
          top: '48px',
          right: '80px',
          zIndex: 1000,
          width: '180px',
          backgroundColor: '#121212',
          border: '1px solid #2c2c2c',
          overflow: 'hidden'
        }}
      >
        <Box style={{ padding: '8px 0' }}>
          <UnstyledButton
            style={{
              width: '100%',
              padding: '10px 16px',
              display: 'block',
              color: 'white',
              transition: 'background-color 0.2s ease'
            }}
            sx={(theme) => ({
              '&:hover': { backgroundColor: '#1f1f1f' }
            })}
            onClick={handleUploadClick}
          >
            <Group spacing="sm">
              <UploadVideoIcon />
              <Text size="sm" fw={400}>Video yükle</Text>
            </Group>
          </UnstyledButton>

          <UnstyledButton
            style={{
              width: '100%',
              padding: '10px 16px',
              display: 'block',
              color: 'white',
              transition: 'background-color 0.2s ease'
            }}
            sx={(theme) => ({
              '&:hover': { backgroundColor: '#1f1f1f' }
            })}
            onClick={() => onItemClick('live')}
          >
            <Group spacing="sm">
              <GoLiveIcon />
              <Text size="sm" fw={400}>Canlı yayın</Text>
            </Group>
          </UnstyledButton>

          <UnstyledButton
            style={{
              width: '100%',
              padding: '10px 16px',
              display: 'block',
              color: 'white',
              transition: 'background-color 0.2s ease'
            }}
            sx={(theme) => ({
              '&:hover': { backgroundColor: '#1f1f1f' }
            })}
            onClick={() => onItemClick('post')}
          >
            <Group spacing="sm">
              <CreatePostIcon />
              <Text size="sm" fw={400}>Gönderi oluştur</Text>
            </Group>
          </UnstyledButton>
        </Box>
      </Paper>
    </>
  );
}

export default CreateMenu; 