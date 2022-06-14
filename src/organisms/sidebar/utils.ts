import { HasAccessGuard, NavigationTabProps, SidebarElement } from '../../atoms/navigationTab/types';

export const pickTag = <ID>(
  item: SidebarElement<ID>, hasAccessGuard: HasAccessGuard, account: string,
) => {
  if (item.tag) return item.tag;

  if (account && !hasAccessGuard(item)) {
    if (item.pro) return 'PRO';
    return 'WHL';
  }

  return undefined;
};

export const shouldHighlight = <ID>(item: Pick<SidebarElement<ID>, 'subitems' | 'path' | 'id'>, selectedTab: NavigationTabProps<ID>['id']): boolean => {
  if (item.subitems) {
    return item.subitems
      .some((si: SidebarElement<ID>) => shouldHighlight<ID>(si, selectedTab));
  }
  if (item.path) {
    return window.location.href.includes(item.path) || item.id === selectedTab;
  }

  return false;
};
