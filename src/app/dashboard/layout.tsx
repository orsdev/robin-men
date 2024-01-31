'use client';

import { LayoutHeader, Sidebar } from '@/components/layout';
import { useSidebarContext } from '@/contexts/sidebar';
import clsx from 'clsx';
import { ReactNode } from 'react';
import Style from './layout.module.scss';

export default function DashboardLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const { showSidebar } = useSidebarContext();
  return (
    <>
      <Sidebar />
      <main
        className={clsx(
          'transition duration-1000 px-[50px] py-[20px]',
          Style.dashboard__layout
        )}
        style={{
          transition: 'margin .4s ease'
        }}
        data-show={showSidebar}
      >
        <LayoutHeader />
        <br />
        <br />
        <h5 className="text-muted text-md">Hello Ayomide! 👋🏼</h5>
        <div className="mt-[39px] px-[4vw] mx-auto">{children}</div>
      </main>
    </>
  );
}
