import React from 'react';
import Video from './Video';

function HistoryVideo() {
  const videos = [
    {
      thumbnail: 'https://picsum.photos/seed/video1/536/354',
      profile: 'https://picsum.photos/seed/profile1/50/50',
      title: 'aaaaaaaaaaaaa a',
      channel: 'Elon Musk',
      views: '500K',
      time: '2 days ago'
    },{
      thumbnail: 'https://picsum.photos/seed/video1/536/354',
      profile: 'https://picsum.photos/seed/profile1/50/50',
      title: 'aaaaaaaaaaaaa a',
      channel: 'Elon Musk',
      views: '500K',
      time: '2 days ago'
    },{
      thumbnail: 'https://picsum.photos/seed/video1/536/354',
      profile: 'https://picsum.photos/seed/profile1/50/50',
      title: 'aaaaaaaaaaaaa a',
      channel: 'Elon Musk',
      views: '500K',
      time: '2 days ago'
    },{
      thumbnail: 'https://picsum.photos/seed/video1/536/354',
      profile: 'https://picsum.photos/seed/profile1/50/50',
      title: 'aaaaaaaaaaaaa a',
      channel: 'Elon Musk',
      views: '500K',
      time: '2 days ago'
    },{
      thumbnail: 'https://picsum.photos/seed/video1/536/354',
      profile: 'https://picsum.photos/seed/profile1/50/50',
      title: 'aaaaaaaaaaaaa a',
      channel: 'Elon Musk',
      views: '500K',
      time: '2 days ago'
    },
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '16px',
      padding: '24px',
      maxWidth: '800px',
      margin: '0 auto',
      width: '100%'
    }}>
      {videos.map((video, index) => (
        <Video key={index} {...video} />
      ))}
    </div>
  );
}

export default HistoryVideo; 