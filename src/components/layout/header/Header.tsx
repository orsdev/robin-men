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
            <button onClick={handleToggleSidebar}>
              <Icon.HamburgerMenu />
            </button>

            {/* Logo */}
            <span>
              <Icon.AppLogoSM />
            </span>
          </div>
        </div>
        <div className="flex gap-[12px]">
          {/* Download button */}
          <button className="hidden sm:flex items-center justify-center text-md font-medium bg-others-400 text-white rounded-[30px] py-[4px] px-[35px]">
            Download Report
          </button>

          {/* Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:border-none focus-visible:border-none focus-visible:outline-none flex items-center gap-2">
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AO</AvatarFallback>
              </Avatar>
              <span>
                <Icon.CaretDown />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
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
