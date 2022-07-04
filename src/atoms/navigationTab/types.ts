import { Dispatch, ReactElement } from 'react';

export type HasAccessGuard = <ID>(item: SidebarElement<ID>) => boolean;

export type SidebarElement<ID> = {
  id: ID
  name: string
  to?: string
  icon?: ReactElement
  pro?: boolean
  whale?: boolean
  path?: string
  tag?: string
  isDisabled?: boolean
  subitems?: SidebarElement<ID>[]
};

export type NavigationTabProps<ID> = {
  setExpanded: Dispatch<boolean>
  id: ID
  icon?: ReactElement
  name: string
  path?: string
  lvl?: number
  onClick?: (props: { path?: string, pro?: boolean, whale?: boolean }) => void
  expanded: boolean
  tag?: string
  disabled?: boolean
  subitems?: SidebarElement<ID>[]
  selected?: boolean
  selectedTab: ID
  setSelectedTab: Dispatch<ID>
  pro?: boolean
  whale?: boolean
  account: string
  width: string
  hasAccessGuard: HasAccessGuard
};

export type NavigationTabComp = <ID>(props: NavigationTabProps<ID>) => ReactElement;
