'use client';

import { Icon } from '@/components/icons';
import { useSidebarContext } from '@/contexts/sidebar';
import { clsx } from 'clsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import Style from './Header.module.scss';

export const LayoutHeader = () => {
  const { showSidebar, handleToggleSidebar } = useSidebarContext();
  return (
    <div>
      <div
        className={clsx('flex gap-[12px]', Style.layout__header)}
        data-show={showSidebar}
      >
        <div>
          <div className={Style.layout__header__left}>
            {/* Menu button */}
            <button
              aria-label="menu-button"
              onClick={handleToggleSidebar}
              className="transition duration-300  transform active:scale-[.8]"
            >
              <Icon.HamburgerMenu />
            </button>

            {/* Logo */}
            <span>
              <Icon.AppLogoSM />
            </span>
          </div>
        </div>
        <div className="flex gap-[12px]">
          {/* Download button(Desktop) */}
          <button
            className="hidden sm:flex w-[40px] h-[40px] sm:h-auto sm:w-auto  items-center justify-center text-md font-medium bg-others-400 transition duration-300 hover:bg-blue-500 text-white rounded-full sm:rounded-[30px] py-[4px] sm:px-[35px] transform active:scale-[.95]"
            aria-label="report-download"
          >
            Download Report
          </button>

          {/* Download button(Mobile) */}
          <div className="flex sm:hidden w-[40px] h-[40px] sm:h-auto sm:w-auto  items-center justify-center text-md font-medium bg-others-400 transition duration-300 hover:bg-blue-500 text-white rounded-full sm:rounded-[30px] py-[4px] sm:px-[35px] transform active:scale-[.95]">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Icon.Download />
                </TooltipTrigger>
                <TooltipContent>
                  <span>Download Report</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className="focus:border-none focus-visible:border-none focus-visible:outline-none flex items-center gap-2"
              aria-label="profile-dropdown"
            >
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AO</AvatarFallback>
              </Avatar>
              <span>
                <Icon.CaretDown />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent aria-label="profile-menu">
              <DropdownMenuItem className="cursor-pointer">
                My Account
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
