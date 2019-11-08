import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Menu 1',
    icon: 'layout-outline',
    children: [
      {
        title: 'Submenu 1',
        link: '/pages/layout/submenu1',
      },
      {
        title: 'Submenu 2',
        link: '/pages/layout/submenu2',
      }
    ],
  },
  {
    title: 'Menu 2',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Submenu 1',
        link: '/pages/layout/submenu1',
      },
      {
        title: 'Submenu 2',
        link: '/pages/layout/submenu2',
      }
    ],
  },
  {
    title: 'Menu 3',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
