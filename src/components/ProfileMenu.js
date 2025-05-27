import React from 'react';
import { Paper, UnstyledButton, Box, Text, Group, Divider, Avatar } from '@mantine/core';
import { IconChevronRight, IconSettings, IconHelp, IconMessageCircle } from '@tabler/icons-react';
import AvatarImage from "../pfp.jpg";

function ProfileMenu({ visible, onItemClick }) {
  if (!visible) return null;

  return (
    <Paper
      shadow="md"
      radius="sm"
      style={{
        position: 'absolute',
        top: '48px',
        right: '0',
        zIndex: 1000,
        width: '300px',
        backgroundColor: '#282828',
        border: '1px solid #3f3f3f',
        overflow: 'hidden'
      }}
    >
      {/* Profile Header */}
      <Box p="sm" style={{ borderBottom: '1px solid #3f3f3f' }}>
        <Group>
          <Avatar src={AvatarImage} radius="xl" size="md" />
          <Box>
            <Text size="sm" fw={500} color="white">ug_gu</Text>
            <Text size="xs" color="#3ea6ff">@rick0w</Text>
            <Text size="xs" color="#3ea6ff" mt={5}>View your channel</Text>
          </Box>
        </Group>
      </Box>

      {/* Google Account */}
      <Box>
        <Group p="xs" spacing="xs">
          <Box style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 12 }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%', fill: 'white' }}>
              <path d="M12 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77C6.48 22 2 17.52 2 12S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.97-1.49-3.85-1.49-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22H12z"></path>
            </svg>
          </Box>
          <Text size="sm" fw={500} color="white">Google Account</Text>
        </Group>

        <UnstyledButton
          style={{
            width: '100%',
            padding: '7px 3px 7px 16px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            color: 'white'
          }}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: '#383838'
            }
          })}
          onClick={() => onItemClick('switch_account')}
        >
          <Group spacing="xs">
            <Box style={{ width: 24, height: 24 }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%', fill: 'white' }}>
                <path d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"></path>
              </svg>
            </Box>
            <Text size="sm">Switch account</Text>
          </Group>
          <IconChevronRight size={16} style={{ marginLeft: 'auto' }} />
        </UnstyledButton>

        <UnstyledButton
          style={{
            width: '100%',
            padding: '7px 3px 7px 16px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            color: 'white'
          }}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: '#383838'
            }
          })}
          onClick={() => onItemClick('sign_out')}
        >
          <Group spacing="xs">
            <Box style={{ width: 24, height: 24 }}>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%', fill: 'white' }}>
                <path d="M20 3v18H8v-1h11V4H8V3h12zm-8.9 12.1.7.7 4.4-4.4L11.8 7l-.7.7 3.1 3.1H3v1h11.3l-3.2 3.3z"></path>
              </svg>
            </Box>
            <Text size="sm">Sign out</Text>
          </Group>
        </UnstyledButton>
      </Box>

      <Divider color="#3f3f3f" my={0} />

      {/* YouTube Options */}
      <Box>
        <UnstyledButton
          style={{
            width: '100%',
            padding: '7px 3px 7px 16px',
            display: 'block',
            color: 'white'
          }}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: '#383838'
            }
          })}
          onClick={() => onItemClick('studio')}
        >
          <Group spacing="xs">
            <Box style={{ width: 24 }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M10,9.35,15,12l-5,2.65ZM12,3a.73.73,0,0,0-.31.06L4.3,7.28a.79.79,0,0,0-.3.31.8.8,0,0,0-.09.4v8a.79.79,0,0,0,.09.4.78.78,0,0,0,.3.31l7.39,4.21a.83.83,0,0,0,.62,0l7.39-4.21a.78.78,0,0,0,.3-.31.79.79,0,0,0,.09-.4v-8a.8.8,0,0,0-.09-.4.79.79,0,0,0-.3-.31L12.31,3.06A.73.73,0,0,0,12,3m0-1a1.6,1.6,0,0,1,.8.19l7.4,4.22A1.77,1.77,0,0,1,21,8V16a1.77,1.77,0,0,1-.8,1.59l-7.4,4.22a1.78,1.78,0,0,1-1.6,0L3.8,17.59A1.77,1.77,0,0,1,3,16V8A1.77,1.77,0,0,1,3.8,6.41l7.4-4.22A1.6,1.6,0,0,1,12,2Z"></path>
              </svg>
            </Box>
            <Text size="sm">YouTube Studio</Text>
          </Group>
        </UnstyledButton>

        <UnstyledButton
          style={{
            width: '100%',
            padding: '7px 3px 7px 16px',
            display: 'block',
            color: 'white'
          }}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: '#383838'
            }
          })}
          onClick={() => onItemClick('music')}
        >
          <Group spacing="xs">
            <Box style={{ width: 24 }}>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%', fill: 'white' }}>
                <path d="M10 9.35 15 12l-5 2.65ZM12 3a.73.73 0 00-.31.06L4.3 7.28a.79.79 0 00-.3.52v8.4a.79.79 0 00.3.52l7.39 4.22a.83.83 0 00.62 0l7.39-4.22a.79.79 0 00.3-.52V7.8a.79.79 0 00-.3-.52l-7.39-4.22A.73.73 0 0012 3m0-1a1.6 1.6 0 01.8.19l7.4 4.22A1.77 1.77 0 0121 7.8v8.4a1.77 1.77 0 01-.8 1.39l-7.4 4.22a1.78 1.78 0 01-1.6 0l-7.4-4.22A1.77 1.77 0 013 16.2V7.8a1.77 1.77 0 01.8-1.39l7.4-4.22A1.6 1.6 0 0112 2Zm0 4a.42.42 0 00-.17 0l-4.7 2.8a.59.59 0 00-.13.39v5.61a.65.65 0 00.13.37l4.7 2.8A.42.42 0 0012 18a.34.34 0 00.17 0l4.7-2.81a.56.56 0 00.13-.39V9.19a.62.62 0 00-.13-.37L12.17 6A.34.34 0 0012 6m0-1a1.44 1.44 0 01.69.17L17.39 8A1.46 1.46 0 0118 9.19v5.61a1.46 1.46 0 01-.61 1.2l-4.7 2.81A1.44 1.44 0 0112 19a1.4 1.4 0 01-.68-.17L6.62 16A1.47 1.47 0 016 14.8V9.19A1.47 1.47 0 016.62 8l4.7-2.8A1.4 1.4 0 0112 5Z"></path>
              </svg>
            </Box>
            <Text size="sm">YouTube Music</Text>
          </Group>
        </UnstyledButton>

        <UnstyledButton
          style={{
            width: '100%',
            padding: '7px 3px 7px 16px',
            display: 'block',
            color: 'white'
          }}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: '#383838'
            }
          })}
          onClick={() => onItemClick('premium')}
        >
          <Group spacing="xs">
            <Box style={{ width: 24, display: 'flex', justifyContent: 'center' }}>
              <Box style={{ width: 18, height: 18, backgroundColor: '#f00', borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text size="xs" fw={700} color="white">P</Text>
              </Box>
            </Box>
            <Text size="sm">Your Premium benefits</Text>
          </Group>
        </UnstyledButton>

        <UnstyledButton
          style={{
            width: '100%',
            padding: '7px 3px 7px 16px',
            display: 'block',
            color: 'white'
          }}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: '#383838'
            }
          })}
          onClick={() => onItemClick('purchases')}
        >
          <Group spacing="xs">
            <Box style={{ width: 24 }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M12 3c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 15 12 15s3.5-1.57 3.5-3.5S13.93 8 12 8zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 10 12 10s1.5.67 1.5 1.5S12.83 13 12 13z"></path>
              </svg>
            </Box>
            <Text size="sm">Purchases and memberships</Text>
          </Group>
        </UnstyledButton>

        <UnstyledButton
          style={{
            width: '100%',
            padding: '7px 3px 7px 16px',
            display: 'block',
            color: 'white'
          }}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: '#383838'
            }
          })}
          onClick={() => onItemClick('data')}
        >
          <Group spacing="xs">
            <Box style={{ width: 24 }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M12 3c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 15 12 15s3.5-1.57 3.5-3.5S13.93 8 12 8zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 10 12 10s1.5.67 1.5 1.5S12.83 13 12 13z"></path>
              </svg>
            </Box>
            <Text size="sm">Your data in YouTube</Text>
          </Group>
        </UnstyledButton>

        <UnstyledButton
          style={{
            width: '100%',
            padding: '7px 3px 7px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white'
          }}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: '#383838'
            }
          })}
          onClick={() => onItemClick('appearance')}
        >
          <Group spacing="xs">
            <Box style={{ width: 24 }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z"></path>
              </svg>
            </Box>
            <Text size="sm">Appearance: Dark</Text>
          </Group>
          <IconChevronRight size={16} />
        </UnstyledButton>

        <UnstyledButton
          style={{
            width: '100%',
            padding: '7px 3px 7px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white'
          }}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: '#383838'
            }
          })}
          onClick={() => onItemClick('language')}
        >
          <Group spacing="xs">
            <Box style={{ width: 24 }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M11.99,2C6.47,2 2,6.48 2,12C2,17.52 6.47,22 11.99,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 11.99,2ZM18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.35 18.92,8ZM12,4.04C12.83,5.24 13.48,6.57 13.91,8H10.09C10.52,6.57 11.17,5.24 12,4.04ZM4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14H4.26ZM5.08,16H8.03C8.35,17.25 8.81,18.45 9.41,19.56C7.57,18.93 6.04,17.66 5.08,16ZM8.03,8H5.08C6.04,6.34 7.57,5.07 9.41,4.44C8.81,5.55 8.35,6.75 8.03,8ZM12,19.96C11.17,18.76 10.52,17.43 10.09,16H13.91C13.48,17.43 12.83,18.76 12,19.96ZM14.34,14H9.66C9.57,13.34 9.5,12.68 9.5,12C9.5,11.32 9.57,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14ZM14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56ZM16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14H16.36Z"></path>
              </svg>
            </Box>
            <Text size="sm">Language: English</Text>
          </Group>
          <IconChevronRight size={16} />
        </UnstyledButton>

        <UnstyledButton
          style={{
            width: '100%',
            padding: '7px 3px 7px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white'
          }}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: '#383838'
            }
          })}
          onClick={() => onItemClick('restricted')}
        >
          <Group spacing="xs">
            <Box style={{ width: 24 }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"></path>
              </svg>
            </Box>
            <Text size="sm">Restricted Mode: Off</Text>
          </Group>
          <IconChevronRight size={16} />
        </UnstyledButton>

        <UnstyledButton
          style={{
            width: '100%',
            padding: '7px 3px 7px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white'
          }}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: '#383838'
            }
          })}
          onClick={() => onItemClick('location')}
        >
          <Group spacing="xs">
            <Box style={{ width: 24 }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M11.99,1.98C6.46,1.98 1.98,6.47 1.98,12C1.98,17.53 6.46,22.02 11.99,22.02C17.52,22.02 22,17.53 22,12C22,6.47 17.52,1.98 11.99,1.98ZM12,20.15C7.49,20.15 3.85,16.51 3.85,12C3.85,7.49 7.49,3.85 12,3.85C16.51,3.85 20.15,7.49 20.15,12C20.15,16.51 16.51,20.15 12,20.15ZM12.83,7.3L11.42,10.3H14.3V11.56H10.85L9.21,14.96H7.94L9.58,11.56H6.7V10.3H9.99L11.41,7.3H12.83Z"></path>
              </svg>
            </Box>
            <Text size="sm">Location: Turkey</Text>
          </Group>
          <IconChevronRight size={16} />
        </UnstyledButton>

        <UnstyledButton
          style={{
            width: '100%',
            padding: '7px 3px 7px 16px',
            display: 'block',
            color: 'white'
          }}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: '#383838'
            }
          })}
          onClick={() => onItemClick('keyboard')}
        >
          <Group spacing="xs">
            <Box style={{ width: 24 }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M16,16H8V8H16V16ZM16,7H8C7.45,7 7,7.45 7,8V16C7,16.55 7.45,17 8,17H16C16.55,17 17,16.55 17,16V8C17,7.45 16.55,7 16,7ZM3,3V21H21V3H3ZM20,20H4V4H20V20Z"></path>
              </svg>
            </Box>
            <Text size="sm">Keyboard shortcuts</Text>
          </Group>
        </UnstyledButton>
      </Box>

      <Divider color="#3f3f3f" my={0} />

      {/* Settings & Help */}
      <Box>
        <UnstyledButton
          style={{
            width: '100%',
            padding: '7px 3px 7px 16px',
            display: 'block',
            color: 'white'
          }}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: '#383838'
            }
          })}
          onClick={() => onItemClick('settings')}
        >
          <Group spacing="xs">
            <Box style={{ width: 24 }}>
              <IconSettings size={24} />
            </Box>
            <Text size="sm">Settings</Text>
          </Group>
        </UnstyledButton>

        <UnstyledButton
          style={{
            width: '100%',
            padding: '7px 3px 7px 16px',
            display: 'block',
            color: 'white'
          }}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: '#383838'
            }
          })}
          onClick={() => onItemClick('help')}
        >
          <Group spacing="xs">
            <Box style={{ width: 24 }}>
              <IconHelp size={24} />
            </Box>
            <Text size="sm">Help</Text>
          </Group>
        </UnstyledButton>

        <UnstyledButton
          style={{
            width: '100%',
            padding: '7px 3px 7px 16px',
            display: 'block',
            color: 'white'
          }}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: '#383838'
            }
          })}
          onClick={() => onItemClick('feedback')}
        >
          <Group spacing="xs">
            <Box style={{ width: 24 }}>
              <IconMessageCircle size={24} />
            </Box>
            <Text size="sm">Send feedback</Text>
          </Group>
        </UnstyledButton>
      </Box>
    </Paper>
  );
}

export default ProfileMenu;
