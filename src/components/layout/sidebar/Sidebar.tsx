'use client';
import { Icon } from '@/components/icons';
import { MainMenuNavigation, MenuIconVariantEnum } from './sidebar.helper';
import Link from 'next/link';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import Style from './Sidebar.module.scss';
import { useSidebarContext } from '@/contexts/sidebar';

export const Sidebar = () => {
  const { showSidebar, handleToggleSidebar } = useSidebarContext();

  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        'fixed flex flex-col max-h-screen min-h-screen h-full z-[8] bg-white px-[50px] pr-[18px] py-[32px] shadow-md',
        Style.sidebar
      )}
      data-show={showSidebar}
    >
      {/* Logo */}
      <div className="flex justify-between items-center  h-[70px]">
        <div className={clsx('flex items-center justify-between  w-full', {})}>
          <div>
            <Link href="/dashboard/analytics">
              <span className="flex flex-col gap-[9px">
                <span className={Style.sidebar__logo}>
                  <Icon.AppLogo />
                </span>
                <span className="text-sm text-others-200">App Name</span>
              </span>
            </Link>
          </div>

          <button
            className="flex w-[42px] h-[42px] justify-center items-center bg-others-100 rounded-full"
            onClick={handleToggleSidebar}
          >
            <Icon.ContractUpDown />
          </button>
        </div>
      </div>

      <div className="overflow-y-auto w-full h-full">
        {/* Menu */}
        <div className="mt-[42px] flex flex-col gap-[40px]">
          {MainMenuNavigation.map(({ title, route, icon, variant }) => {
            const isActivePath = pathname === route;

            let iconColor = 'fill-muted';
            let textColor = 'text-muted';

            if (variant === MenuIconVariantEnum.FILL) {
              iconColor = 'fill-muted';
            } else {
              iconColor = 'stroke-muted';
            }

            if (isActivePath && variant === MenuIconVariantEnum.FILL) {
              iconColor = 'fill-highlight';
            } else if (isActivePath && variant === MenuIconVariantEnum.STROKE) {
              iconColor = 'stroke-highlight';
            }

            if (isActivePath) {
              textColor = 'text-highlight';
            }

            return (
              <div key={title}>
                <Link href={route}>
                  <span
                    className={clsx(
                      'flex gap-[16px] items-center transition duration-200 ease-in-out hover:text-accent',
                      iconColor,
                      textColor
                    )}
                  >
                    <span>{icon}</span>
                    <span
                      className={clsx(
                        'text-md text-inherit',
                        Style.sidebar__menu__item
                      )}
                    >
                      {title}
                    </span>
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <hr className="flex w-full mt-[51px] border-others-300" />

        {/* Collapse */}
        <button
          className={clsx(
            'flex gap-[16px] items-center mt-[25px] text-muted w-full'
          )}
          onClick={handleToggleSidebar}
        >
          <span>{<Icon.Collapse />}</span>
          <span
            className={clsx(
              'text-md transition duration-200 ease-in-out hover:text-accent',
              Style.sidebar__menu__item
            )}
          >
            Collapse
          </span>
        </button>

        {/* Feedback */}
        <div className="mt-[50px] lg:mt-[130px] pb-[40px]">
          <Link href="/feedback">
            <span
              className={clsx(
                'flex gap-[16px] items-center text-muted  stroke-muted'
              )}
            >
              <span>{<Icon.Bubble2 />}</span>
              <span
                className={clsx(
                  'text-md transition duration-200 ease-in-out hover:text-accent',
                  Style.sidebar__menu__item
                )}
              >
                Give Feedback
              </span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
