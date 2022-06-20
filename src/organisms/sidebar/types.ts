import { NavigationTabProps, SidebarElement } from '../../atoms/navigationTab/types';
import { SidebarFooterProps } from './sidebarComponents/footer';
import { SidebarHeaderProps } from './sidebarComponents/header';
import { RedirectButtonsProps } from './sidebarComponents/redirectButtons';

export type SidebarProps<ID> = {
  items: SidebarElement<ID>[];
  defaultSelectedTab: ID;
  onGetUwlClick: () => void
} & SidebarHeaderProps & Omit<NavigationTabProps<ID>, 'width' | 'name'> & SidebarFooterProps & RedirectButtonsProps;

export type SidebarComp = <ID>(props: SidebarProps<ID>) => JSX.Element;
