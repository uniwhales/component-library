import React, {
  useRef, useState,
} from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { SwapStandard } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import {
  NavigationTab,
} from '../../atoms/navigationTab/navigationTab';
import { useClickOutside } from '../../utils/useClickOutside';
import { SidebarFooter } from './sidebarComponents/footer';
import { SidebarHeader } from './sidebarComponents/header';
import { RedirectButtons } from './sidebarComponents/redirectButtons';
import {
  SidebarBottom, SidebarBottomButtons, SidebarContainer, SidebarItems, SidebarThemeAndShareButtons,
} from './styles';
import { SidebarComp } from './types';
import { pickTag } from './utils';

enum SidebarWidth {
  Expanded = '200px',
  Collapsed = '88px',
}

export const Sidebar: SidebarComp = ({
  account,
  items,
  version,
  defaultSelectedTab,
  hasAccessGuard,
  onGetUwlClick,
  telegramLink,
  twitterLink,
  webappLink,
  onLogoClick,
  onClick,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedTab, setSelectedTab] = useState(defaultSelectedTab);
  const clickRef = useRef(null);

  useClickOutside(clickRef, () => setExpanded(false));

  const width = expanded ? SidebarWidth.Expanded : SidebarWidth.Collapsed;
  return (
    <SidebarContainer
      ref={clickRef}
      onClick={() => { if (!expanded) setExpanded(true); }}
      width={width}
      isExpanded={expanded}
    >
      <SidebarHeader
        onLogoClick={() => onLogoClick()}
        expanded={expanded}
        setExpanded={setExpanded}
      />
      <SidebarItems>
        {items.map((item) => (
          <NavigationTab
            /* Marcin: react doesn't recognize that enum can be a key so i need to cast to string */
            key={item.id as string}
            hasAccessGuard={hasAccessGuard}
            account={account}
            setExpanded={setExpanded}
            width={width}
            id={item.id}
            icon={item.icon}
            onClick={({
              path, pro, whale, subitems,
            }) => {
              if (!expanded && !subitems && path) {
                setExpanded(true);
              } else if (onClick) {
                onClick({ path, pro, whale });
              }
            }}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            name={item.name}
            path={item.path}
            tag={pickTag(item, hasAccessGuard, account)}
            expanded={expanded}
            subitems={item.subitems}
            disabled={(item.isDisabled || !!account) && !hasAccessGuard(item)}
            pro={item.pro}
            whale={item.whale}
          />
        ))}
      </SidebarItems>
      <SidebarBottom>
        <SidebarBottomButtons>
          {expanded && (
            <ButtonAtom
              buttonVariant="primary"
              onClick={() => {
                onGetUwlClick();
              }}
            >
              <>
                <IconWrapper icon={<SwapStandard />} />
                Get UWL
              </>
            </ButtonAtom>
          )}
          <SidebarThemeAndShareButtons>
            {expanded && (
              <RedirectButtons
                telegramLink={telegramLink}
                twitterLink={twitterLink}
                webappLink={webappLink}
              />
            )}
          </SidebarThemeAndShareButtons>
        </SidebarBottomButtons>
        <SidebarFooter version={version} />
      </SidebarBottom>
    </SidebarContainer>
  );
};
