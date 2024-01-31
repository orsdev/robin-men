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
      <main className="py-[20px] before:bg-others-700 before:fixed before:w-full before:h-full before:z-[-1] before:content-[''] before:left-0 before:top-0">
        <div
          className={clsx(
            'transition duration-1000 px-[20px] sm:px-[50px]',
            Style.dashboard__layout
          )}
          style={{
            transition: 'margin .4s ease'
          }}
          data-show={showSidebar}
        >
          <LayoutHeader />

          <h5 className="text-muted text-md mt-4">Hello Ayomide! 👋🏼</h5>
        </div>
        {/* Divider */}
        <hr className="flex w-full my-[25px] border-others-300" />
        <div
          className={clsx(
            'transition duration-1000 px-[20px] sm:px-[50px]',
            Style.dashboard__layout
          )}
          style={{
            transition: 'margin .4s ease'
          }}
          data-show={showSidebar}
        >
          <div className=" sm:px-[4vw] mx-auto">{children}</div>
        </div>
      </main>
    </>
  );
}
