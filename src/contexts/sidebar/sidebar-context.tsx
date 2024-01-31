'use client';

import { useState, createContext, ReactNode, useMemo } from 'react';

interface SidebarProviderProps {
  children: ReactNode;
}

interface SidebarContextProps {
  showSidebar: boolean;
  handleOpenSidebar(): void;
  handleToggleSidebar(): void;
  handleCloseSidebar(): void;
}

export const SidebarContext = createContext<SidebarContextProps>({
  showSidebar: true,
  handleOpenSidebar: () => {},
  handleToggleSidebar: () => {},
  handleCloseSidebar: () => {}
});

export function SidebarContextProvider({
  children
}: Readonly<SidebarProviderProps>) {
  const [showSidebar, setShowSidebar] = useState(true);

  const memoValue = useMemo(() => {
    const handleOpenSidebar = () => {
      setShowSidebar(true);
    };

    const handleCloseSidebar = () => {
      setShowSidebar(false);
    };

    const handleToggleSidebar = () => {
      setShowSidebar((prev) => !prev);
    };

    return {
      handleCloseSidebar,
      handleOpenSidebar,
      handleToggleSidebar,
      showSidebar
    };
  }, [showSidebar]);

  return (
    <SidebarContext.Provider value={memoValue}>
      {children}
    </SidebarContext.Provider>
  );
}
