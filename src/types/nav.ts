// types.ts
export interface NavItem {
    title: string;
    href: string;
    icon?: string;
    items?: NavItem[];
  }
  
  export type MainNavItem = NavItem;
  
  export interface SidebarNavItem {
    title: string;
    disabled?: boolean;
    external?: boolean;
    label?: string;
    icon?: string;
    href?: string;
    items?: NavItem[];
  }