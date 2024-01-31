import { FC, ReactNode } from 'react';
import { SidebarContextProvider } from './sidebar/sidebar-context';

interface IAppProviderProps {
  children: ReactNode;
}

export const AppContextProvider: FC<IAppProviderProps> = ({ children }) => (
  <SidebarContextProvider>{children}</SidebarContextProvider>
);
