import { AppShell } from '@mantine/core';
import Sidebar from './sidebar';
import Header from './header';
import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const SidebarContext = createContext();
export const CounterContext = createContext();

export function BasicAppShell({ children }) {

  const getSavedSidebarState = () => {
    const savedState = localStorage.getItem('sidebarOpened');
    return savedState !== null ? savedState === 'true' : false;
  };

  const [sidebarOpened, setSidebarOpened] = useState(getSavedSidebarState());

  const toggleSidebar = () => {
    const newState = !sidebarOpened;
    setSidebarOpened(newState);
    localStorage.setItem('sidebarOpened', newState.toString ());
  };

  const getSavedCounterState = () => {
    const savedCount = localStorage.getItem('counter');
    if (savedCount !== null) {
      return parseInt(savedCount);
    } else {
      return 0;
    }
  };

  const [count, setCount] = useState(getSavedCounterState());

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('counter', newCount.toString());
  };

  return (
    <SidebarContext.Provider value={{ sidebarOpened, toggleSidebar }}>
      <CounterContext.Provider value={{ count, incrementCount }}>
        <AppShell
          padding={0}
          header={{ height: 56 }}
          navbar={{
            width: sidebarOpened ? 240 : 80,
            breakpoint: 'sm',
            collapsed: { mobile: !sidebarOpened, desktop: false }
          }}
          styles={(theme) => ({
            main: {
              paddingTop: 56,
              backgroundColor: '#0f0f0f',
              color: 'white'
            }
          })}
        >
          <AppShell.Header style={{ 
            backgroundColor: '#0f0f0f', 
            color: 'white', 
            position: 'fixed',
            height: 56,
            borderBottom: 'none'
          }}>
            <Header />
          </AppShell.Header>

          <AppShell.Navbar style={{ 
            backgroundColor: '#0f0f0f',
            borderRight: '1px solid #272727',
            transition: 'width 0.3s ease-in-out',
            width: sidebarOpened ? '240px' : '80px'
          }}>
            <Sidebar />
          </AppShell.Navbar>

          <AppShell.Main style={{ backgroundColor: '#0f0f0f', color: 'white' }}>
            <Outlet />
          </AppShell.Main>
        </AppShell>
      </CounterContext.Provider>
    </SidebarContext.Provider>
  );
}

export default BasicAppShell;
