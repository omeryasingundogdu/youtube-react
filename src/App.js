import React from 'react';
import { MantineProvider } from '@mantine/core';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BasicAppShell } from './BasicAppShell';
import History from './pages/History';
import Home from './pages/Home';
import Shorts from './pages/Shorts';
import Subscriptions from './pages/Subscriptions';
import Playlists from './pages/Playlists';
import WatchLater from './pages/WatchLater';
import LikedVideos from './pages/LikedVideos';
import SubsPage from './pages/subs';
import Trending from './pages/Trending';
import SearchResults from './pages/SearchResults';
import VideoPlayer from './pages/VideoPlayer';
import Upload from './pages/Upload';
import NotFound from './pages/NotFound';

function App() {
  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        primaryColor: 'red',
        defaultRadius: 'md',
        colors: {
          dark: [
            '#C1C2C5',
            '#A6A7AB',
            '#909296',
            '#5c5f66',
            '#373A40',
            '#2C2E33',
            '#25262b',
            '#1A1B1E',
            '#141517',
            '#101113',
          ],
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Routes>
        <Route path="/" element={<BasicAppShell />}>
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="shorts" element={<Shorts />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="playlists" element={<Playlists />} />
          <Route path="watch-later" element={<WatchLater />} />
          <Route path="liked-videos" element={<LikedVideos />} />
          <Route path="subs" element={<SubsPage />} />
          <Route path="subs/:channelId" element={<SubsPage />} />
          <Route path="trending" element={<Trending />} />
          <Route path="search/:query" element={<SearchResults />} />
          <Route path="watch/:videoId" element={<VideoPlayer />} />
          <Route path="watch/1" element={<VideoPlayer videoId="1" />} />
          <Route path="watch/2" element={<VideoPlayer videoId="2" />} />
          <Route path="watch/3" element={<VideoPlayer videoId="3" />} />
          <Route path="upload" element={<Upload />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}

export default App;