import { SidebarMenuItems } from "./@theme/model/sidebar-menu-items";

export const SIDEBAR_MENU_ITEM: SidebarMenuItems[] = [
    {
        title: 'All Movies',
        icon: 'fa fa-file-video-o',
        link: '/'
    },
    {
      title: 'Movies Control',
      id: 'movies-control',
      icon: 'fa fa-tachometer',
      children: [
        {
          title: 'Movies Table',
          link: '/all'
        },      
        {
          title: 'Categories',
          link: '/categories'
        },
        {
          title: 'New Movie',
          link: '/add'
        }
      ]
    },
];
