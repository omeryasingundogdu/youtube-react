import React from 'react';

const avatarUrl = 'https://api.dicebear.com/6.x/avataaars/svg?seed=noname';

const historyVideos = [
  {
    thumbnail: 'https://i.ytimg.com/vi/5EeDe7hMzH4/hq720.jpg',
    title: 'TÜRKİYENİN İLK ENGELLİ PROFESYONEL BALETİ - Takipçimin Gerçek Hikayesi',
    channel: 'Bentropi',
    views: '44K views',
    time: '3 days ago',
    duration: '24:23',
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/eBSAjfGhMRI/hq720.jpg',
    title: 'KAÇIRILAN YOUTUBER KADININ GİZEMLİ HİKAYESİ! (ve tüm gerçekler)',
    channel: 'Enesup',
    views: '22K views',
    time: '17 hours ago',
    duration: '22:58',
  },
  // ... örnekler ...
];

const playlists = [
  {
    thumbnail: 'https://i.ytimg.com/vi/8i-fE-uAIg8/hq720.jpg',
    title: 'Liked videos',
    count: 436
  },
  {
    thumbnail: 'https://placehold.co/600x400/EEE/31343C',
    title: 'türkçe hoodtrap',
    count: 25
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/5sxxlVL5TUA/hq720.jpg',
    title: 'JUST NO1',
    count: 23
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/wn_C6aA5G8U/hq720.jpg',
    title: 'Cheat Engine Minecraft Windows 10 Tutorials',
    count: 11
  }
];

export default function You() {
  return (
    <div style={{ background: '#181818', minHeight: '100vh', color: '#fff', fontFamily: 'Roboto, Arial, sans-serif' }}>
      {/* Profil üst kısmı */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '32px 40px 16px 40px' }}>
        <img src={avatarUrl} alt="avatar" style={{ width: 80, height: 80, borderRadius: '50%', marginRight: 24, border: '2px solid #333' }} />
        <div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>noname</div>
          <div style={{ color: '#aaa', fontSize: 16, marginBottom: 8 }}>@kroviii · View channel</div>
          <button style={{ background: '#272727', color: '#fff', border: 'none', borderRadius: 16, padding: '6px 16px', marginRight: 8, cursor: 'pointer' }}>Switch account</button>
          <button style={{ background: '#272727', color: '#fff', border: 'none', borderRadius: 16, padding: '6px 16px', cursor: 'pointer' }}>Google Account</button>
        </div>
      </div>

      {/* History */}
      <div style={{ padding: '0 40px' }}>
        <div style={{ fontSize: 22, fontWeight: 600, margin: '32px 0 12px 0' }}>History</div>
        <div style={{ display: 'flex', gap: 16, overflowX: 'auto' }}>
          {historyVideos.map((v, i) => (
            <div key={i} style={{ minWidth: 320, background: '#222', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
              <img src={v.thumbnail} alt={v.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
              <div style={{ padding: 12 }}>
                <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>{v.title}</div>
                <div style={{ color: '#aaa', fontSize: 14 }}>{v.channel}</div>
                <div style={{ color: '#aaa', fontSize: 13 }}>{v.views} • {v.time}</div>
              </div>
              <div style={{ position: 'absolute', bottom: 12, right: 12, background: '#000a', color: '#fff', borderRadius: 4, fontSize: 13, padding: '2px 6px' }}>{v.duration}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Playlists */}
      <div style={{ padding: '0 40px' }}>
        <div style={{ fontSize: 22, fontWeight: 600, margin: '32px 0 12px 0' }}>Playlists</div>
        <div style={{ display: 'flex', gap: 16, overflowX: 'auto' }}>
          {playlists.map((p, i) => (
            <div key={i} style={{ minWidth: 240, background: '#222', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
              <img src={p.thumbnail} alt={p.title} style={{ width: '100%', height: 120, objectFit: 'cover' }} />
              <div style={{ padding: 12 }}>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{p.title}</div>
                <div style={{ color: '#aaa', fontSize: 13 }}>{p.count} videos</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 