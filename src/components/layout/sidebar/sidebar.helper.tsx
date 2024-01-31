import { Icon } from '@/components/icons';

export enum MenuIconVariantEnum {
  FILL = 'FILL',
  STROKE = 'STROKE'
}

export const MainMenuNavigation = [
  {
    icon: <Icon.Chip />,
    variant: MenuIconVariantEnum.FILL,
    title: 'Get Started',
    route: '/dashboard/get-started'
  },
  {
    icon: <Icon.BarChart />,
    variant: MenuIconVariantEnum.FILL,
    title: 'Analytics',
    route: '/dashboard/analytics'
  },
  {
    icon: <Icon.Bubble />,
    variant: MenuIconVariantEnum.FILL,
    title: 'Chat',
    route: '/dashboard/chat'
  },
  {
    icon: <Icon.Smiley />,
    variant: MenuIconVariantEnum.FILL,
    title: 'Moderation',
    route: '/dashboard/moderation'
  },
  {
    icon: <Icon.Bulb />,
    title: 'API & Auth Keys',
    variant: MenuIconVariantEnum.FILL,
    route: '/dashboard/api-and-keys'
  },
  {
    icon: <Icon.Bell />,
    title: 'Announcement',
    variant: MenuIconVariantEnum.STROKE,
    route: '/dashboard/announcement'
  },
  {
    icon: <Icon.Gear />,
    variant: MenuIconVariantEnum.FILL,
    title: 'Settings',
    route: '/dashboard/settings'
  }
];
