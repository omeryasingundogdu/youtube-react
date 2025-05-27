import { Box, Stack, Tooltip, UnstyledButton, Text, Divider, rem, ScrollArea, Avatar } from '@mantine/core';
import { 
  IconUserCircle, IconVideo, IconDownload, IconFlame, IconMusic, IconMovie, IconDeviceGamepad2, IconNews, IconTrophy,
  IconHeadphones, IconSettings, IconFlag, IconHelpCircle, IconMessages, IconBrandYoutubeKids, IconChevronDown, IconHistory, IconClock, IconThumbUp
} from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { SidebarContext } from './BasicAppShell';

const subscriptions = [
  { name: 'user1', avatar: 'https://i.pravatar.cc/150?img=1' },
  { name: 'user2', avatar: 'https://i.pravatar.cc/150?img=2' },
  { name: 'user3', avatar: 'https://i.pravatar.cc/150?img=3' },
  { name: 'user4', avatar: 'https://i.pravatar.cc/150?img=4' },
  { name: 'user5', avatar: 'https://i.pravatar.cc/150?img=12' },
  { name: 'user6', avatar: 'https://i.pravatar.cc/150?img=5' },
  { name: 'user7', avatar: 'https://i.pravatar.cc/150?img=22' },
    { name: 'user8', avatar: 'https://i.pravatar.cc/150?img=33' }
];

const useStyles = {
  navbar: {
    width: rem(80),
    height: '100vh',
    background: '#0F0F0F',
    color: 'white',
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid #272727',
    position: 'sticky',
    top: 0,
    transition: 'all 0.3s ease-in-out',
  },
  navbarExpanded: {
    width: rem(240),
  },
  link: {
    width: '90%',
    height: rem(50),
    borderRadius: rem(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '4px auto',
    padding: 0,
    color: 'white',
    textDecoration: 'none',
    backgroundColor: '#0F0F0F',
    transition: 'all 0.3s ease-in-out',
  },
  linkExpanded: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '0 15px',
    height: rem(40),
  },
  active: {
    '&, &:hover': {
      color: 'white',
      backgroundColor: '#272727',
    },
  },
  linkIcon: {
    fontSize: rem(18),
    marginBottom: rem(3),
    transition: 'all 0.3s ease-in-out',
    color: 'white',
  },
  linkIconExpanded: {
    marginBottom: 0,
    marginRight: rem(20),
  },
  linkText: {
    fontSize: rem(10),
    fontWeight: 500,
    marginTop: rem(1),
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out',
    color: 'white',
  },
  linkTextExpanded: {
    fontSize: rem(14),
    marginTop: 0,
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: rem(16),
    fontWeight: 500,
    padding: '0 24px',
    marginBottom: rem(12),
    color: 'white',
  },
  footer: {
    padding: '0 24px',
    marginTop: 'auto',
    marginBottom: rem(20),
    fontSize: rem(12),
    color: 'white',
  },
  footerLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: rem(8),
    marginBottom: rem(12),
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: 'white',
    }
  },
  
  copyright: {
    marginTop: rem(12),
    color: 'white',
  }
};



function NavLink({ icon, label, to = '/', active = false, notification = false, customIcon = null, svgPath = null }) {
  const { sidebarOpened } = useContext(SidebarContext);
  const IconComponent = icon;
  
  const renderIcon = () => {
    if (svgPath) {
      return (
        <Box 
          style={{
            ...useStyles.linkIcon,
            ...(sidebarOpened ? useStyles.linkIconExpanded : {}),
            color: 'white',
            width: '20px',
            height: '20px',
          }}
        >
          <div 
            style={{ 
              width: '100%', 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
            dangerouslySetInnerHTML={{ __html: svgPath }}
          />
        </Box>
      );
    }
    
    if (customIcon) {
      return (
        <Box style={{
          ...useStyles.linkIcon,
          ...(sidebarOpened ? useStyles.linkIconExpanded : {}),
          color: 'white',
        }}>
          {customIcon}
        </Box>
      );
    }
    
    if (icon) {
      return (
        <IconComponent 
          style={{
            ...useStyles.linkIcon,
            ...(sidebarOpened ? useStyles.linkIconExpanded : {}),
            color: 'white',
          }} 
          stroke={1.5} 
        />
      );
    }
    
    // Eğer icon, svgPath veya customIcon yoksa boş bir Box döndür
    return (
      <Box style={{
        ...useStyles.linkIcon,
        ...(sidebarOpened ? useStyles.linkIconExpanded : {}),
        width: '20px',
        height: '20px',
        color: 'white',
      }} />
    );
  };
  
  return (
    <Tooltip 
      label={label} 
      position="right" 
      withArrow 
      transitionProps={{ duration: 200 }}
      disabled={sidebarOpened}
    >
      <UnstyledButton
        component={Link}
        to={to}
        style={{
          ...useStyles.link,
          ...(active ? useStyles.active : {}),
          ...(sidebarOpened ? useStyles.linkExpanded : {}),
          color: 'white',
          backgroundColor: active ? '#272727' : '#0F0F0F',
          borderRadius: rem(8),
          margin: sidebarOpened ? '4px auto' : '4px auto',
          width: sidebarOpened ? '85%' : '90%',
          height: sidebarOpened ? rem(40) : rem(50),
        }}
      >
        {renderIcon()}
        <Text 
          style={{
            ...useStyles.linkText,
            ...(sidebarOpened ? useStyles.linkTextExpanded : {}),
            color: 'white',
          }}
        >
          {label}
        </Text>
        
        {notification && sidebarOpened && (
          <Box 
            style={{ 
              width: '6px', 
              height: '6px', 
              borderRadius: '50%', 
              backgroundColor: '#3ea6ff',
              marginLeft: 'auto' 
            }}
          />
        )}
      </UnstyledButton>
    </Tooltip>
  );
}


function AvatarLink({ name, avatar, to = '/' }) {
  const { sidebarOpened } = useContext(SidebarContext);
  
  return (
    <Tooltip 
      label={name} 
      position="right" 
      withArrow 
      transitionProps={{ duration: 200 }}
      disabled={sidebarOpened}
    >
      <UnstyledButton
        component={Link}
        to={to}
        style={{
          ...useStyles.link,
          ...(sidebarOpened ? useStyles.linkExpanded : {}),
          height: rem(40),
          color: 'white',
        }}
      >
        <Avatar 
          src={avatar} 
          size={24} 
          radius="xl" 
          style={sidebarOpened ? { marginRight: rem(20) } : {}}
        />
        
        {sidebarOpened && (
          <Text 
            style={{
              fontSize: rem(14),
              fontWeight: 400,
              marginTop: 0,
              marginBottom: 0,
              textAlign: 'left',
              flex: 1,
              color: 'white',
            }}
          >
            {name}
          </Text>
        )}
      </UnstyledButton>
    </Tooltip>
  );
}


export default function CompactSidebar() {
  const { sidebarOpened, toggleSidebar } = useContext(SidebarContext);
  const location = useLocation();
  
  // Run only once when component mounts
  useEffect(() => {
    const savedSidebarState = localStorage.getItem('sidebarOpened');
    if (savedSidebarState !== null) {
      const savedState = savedSidebarState === 'true';
      // Only set the state if it's different from the saved state
      if (savedState !== sidebarOpened) {
        // We're using a ref to avoid the infinite loop
        toggleSidebar();
      }
    }
  }, [sidebarOpened, toggleSidebar]);
  
  useEffect(() => {
    localStorage.setItem('sidebarOpened', sidebarOpened.toString());
  }, [sidebarOpened]);
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  

  const homeSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5H14v-8h-4v8H5.5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146Z" fill-rule="evenodd"></path></svg>';
  
  const shortsSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="m7.61 15.719.392-.22v-2.24l-.534-.228-.942-.404c-.869-.372-1.4-1.15-1.446-1.974-.047-.823.39-1.642 1.203-2.097h.001L15.13 3.59c1.231-.689 2.785-.27 3.466.833.652 1.058.313 2.452-.879 3.118l-1.327.743-.388.217v2.243l.53.227.942.404c.869.372 1.4 1.15 1.446 1.974.047.823-.39 1.642-1.203 2.097l-.002.001-8.845 4.964-.001.001c-1.231.688-2.784.269-3.465-.834-.652-1.058-.313-2.451.879-3.118l1.327-.742Zm1.993 6.002c-1.905 1.066-4.356.46-5.475-1.355-1.057-1.713-.548-3.89 1.117-5.025a4.14 4.14 0 01.305-.189l1.327-.742-.942-.404a4.055 4.055 0 01-.709-.391c-.963-.666-1.578-1.718-1.644-2.877-.08-1.422.679-2.77 1.968-3.49l8.847-4.966c1.905-1.066 4.356-.46 5.475 1.355 1.057 1.713.548 3.89-1.117 5.025a4.074 4.074 0 01-.305.19l-1.327.742.942.403c.253.109.49.24.709.392.963.666 1.578 1.717 1.644 2.876.08 1.423-.679 2.77-1.968 3.491l-8.847 4.965ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z" fill-rule="evenodd"></path></svg>';
  
  const subSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5H4Zm16.5 3h-17v11h17v-11ZM3.5 6A1.5 1.5 0 002 7.5v11A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6h-17Zm7.257 4.454a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429L15 13l-4.243-2.546Z" fill-rule="evenodd"></path></svg>';
  
  const musicSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M12 20.5c4.694 0 8.5-3.806 8.5-8.5S16.694 3.5 12 3.5 3.5 7.306 3.5 12s3.806 8.5 8.5 8.5Zm0 1.5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-5c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Zm0 1c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6Zm-1.243-8.546c-.333-.2-.757.04-.757.43v4.233c0 .389.424.629.757.429L15 12l-4.243-2.546Z" fill-rule="evenodd"></path></svg>';
  
  return (
    <Box 
      style={{
        ...useStyles.navbar,
        ...(sidebarOpened ? useStyles.navbarExpanded : {})
      }}
    >
      <ScrollArea h="100%" scrollbarSize={0} style={{ overflowX: 'hidden' }}>
        <Box p={0}>
          {/* Ana Navigasyon */}
          <Stack spacing={0} alignItems="center" mb={0}>
            <NavLink 
              svgPath={homeSvg}
              label="Home" 
              to="/" 
              active={isActive('/')}
            />
            <NavLink 
              svgPath={shortsSvg}
              label="Shorts" 
              to="/shorts" 
              active={isActive('/shorts')}
            />
            <NavLink 
              svgPath={subSvg}
              label="Subscription" 
              to="/subscriptions"
              active={isActive('/subscriptions')}
              // notification={true}
            />
            
            {!sidebarOpened && (
              <>
                <NavLink 
                  icon={IconUserCircle}
                  label="You"
                  to="/channel" 
                  active={isActive('/channel')}
                />
              </>
            )}
          </Stack>

          {sidebarOpened && (
            <>              
              {/* You Section */}
              <Text style={{ color: 'white', fontSize: rem(16), fontWeight: 500, padding: '20px 24px 10px', marginBottom: 0 }}>
                You
              </Text>
              
              <Stack spacing={0} align="flex-start" mb={0}>
                <NavLink 
                  label="You >"
                  to="/channel" 
                  active={isActive('/channel')}
                />
                <NavLink 
                  icon={IconHistory} 
                  label="History" 
                  to="/history" 
                  active={isActive('/history')}
                />
                <NavLink 
                  icon={IconVideo} 
                  label="Your videos" 
                  to="/your-videos" 
                  active={isActive('/your-videos')}
                />
                <NavLink 
                  icon={IconClock} 
                  label="Watch later" 
                  to="/watch-later" 
                  active={isActive('/watch-later')}
                />
                <NavLink 
                  icon={IconThumbUp} 
                  label="Liked videos" 
                  to="/liked-videos" 
                  active={isActive('/liked-videos')}
                />
              </Stack>
              
              {/* Subscriptions Section */}
              <Text style={{ color: 'white', fontSize: rem(16), fontWeight: 500, padding: '20px 24px 10px', marginBottom: 0 }}>
                Subscriptions
              </Text>
              
              <Stack spacing={0} align="flex-start" mb={0}>
                {subscriptions.map((channel, index) => (
                  <AvatarLink 
                    key={index}
                    name={channel.name}
                    avatar={channel.avatar}
                    to={`/subs/${channel.name.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                ))}
                
                <UnstyledButton
                  style={{
                    ...useStyles.link,
                    ...useStyles.linkExpanded,
                    height: rem(40),
                    color: 'white',
                  }}
                >
                  <IconChevronDown 
                    size={20} 
                    style={{ marginRight: rem(20), color: 'white' }}
                  />
                  <Text style={{ fontSize: rem(14), color: 'white' }}>
                    Show more
                  </Text>
                </UnstyledButton>
              </Stack>
              
              {/* Explore Section */}
              <Text style={{ color: 'white', fontSize: rem(16), fontWeight: 500, padding: '20px 24px 10px', marginBottom: 0 }}>
                Explore
              </Text>
              
              <Stack spacing={0} align="flex-start" mb={0}>
                <NavLink 
                  icon={IconFlame} 
                  label="Trending" 
                  to="/trending" 
                  active={isActive('/trending')}
                />
                <NavLink 
                  icon={IconMusic} 
                  label="Music" 
                  to="/music-category" 
                  active={isActive('/music-category')}
                />
                <NavLink 
                  icon={IconMovie} 
                  label="Movies" 
                  to="/movies" 
                  active={isActive('/movies')}
                />
                <NavLink 
                  icon={IconDeviceGamepad2} 
                  label="Gaming" 
                  to="/gaming" 
                  active={isActive('/gaming')}
                />
                <NavLink 
                  icon={IconNews} 
                  label="News" 
                  to="/news" 
                  active={isActive('/news')}
                />
                <NavLink 
                  icon={IconTrophy} 
                  label="Sports" 
                  to="/sports" 
                  active={isActive('/sports')}
                />
                <NavLink 
                  icon={IconHeadphones} 
                  label="Podcasts" 
                  to="/podcasts" 
                  active={isActive('/podcasts')}
                />
              </Stack>
              
              {/* More from YouTube */}
              <Text style={{ color: 'white', fontSize: rem(16), fontWeight: 500, padding: '20px 24px 10px', marginBottom: 0 }}>
                More from YouTube
              </Text>
              
              <Stack spacing={0} align="flex-start" mb={0}>
                <NavLink 
                  icon={IconVideo} 
                  label="YouTube Studio" 
                  to="/studio" 
                  active={isActive('/studio')}
                />
                <NavLink 
                  icon={IconBrandYoutubeKids} 
                  label="YouTube Kids" 
                  to="/kids" 
                  active={isActive('/kids')}
                />
              </Stack>
              
              <Stack spacing={0} align="flex-start" mb={16} style={{ marginTop: '20px' }}>
                <NavLink 
                  icon={IconSettings} 
                  label="Settings" 
                  to="/settings" 
                  active={isActive('/settings')}
                />
                <NavLink 
                  icon={IconFlag} 
                  label="Report history" 
                  to="/report-history" 
                  active={isActive('/report-history')}
                />
                <NavLink 
                  icon={IconHelpCircle} 
                  label="Help" 
                  to="/help" 
                  active={isActive('/help')}
                />
                <NavLink 
                  icon={IconMessages} 
                  label="Send feedback" 
                  to="/feedback" 
                  active={isActive('/feedback')}
                />
              </Stack>
              
              <Box style={useStyles.footer}>
                <Box style={useStyles.footerLinks}>
                  <Box component="a" href="#" style={useStyles.footerLink}>About</Box>
                  <Box component="a" href="#" style={useStyles.footerLink}>Press</Box>
                  <Box component="a" href="#" style={useStyles.footerLink}>Copyright</Box>
                  <Box component="a" href="#" style={useStyles.footerLink}>Contact us</Box>
                  <Box component="a" href="#" style={useStyles.footerLink}>Creators</Box>
                  <Box component="a" href="#" style={useStyles.footerLink}>Advertise</Box>
                  <Box component="a" href="#" style={useStyles.footerLink}>Developers</Box>
                </Box>
                
                <Box style={useStyles.footerLinks}>
                  <Box component="a" href="#" style={useStyles.footerLink}>Terms</Box>
                  <Box component="a" href="#" style={useStyles.footerLink}>Privacy</Box>
                  <Box component="a" href="#" style={useStyles.footerLink}>Policy & Safety</Box>
                  <Box component="a" href="#" style={useStyles.footerLink}>How YouTube works</Box>
                  <Box component="a" href="#" style={useStyles.footerLink}>Test new features</Box>
                </Box>
                
                <Text style={useStyles.copyright}>© 2025 Google LLC YouTube, a Google company</Text>
              </Box>
            </>
          )}
        </Box>
      </ScrollArea>
    </Box>
  );
}
