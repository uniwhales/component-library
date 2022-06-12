import React, {
  useEffect, useState,
} from 'react';
import { pickTag, shouldHighlight } from '../../organisms/sidebar/utils';
import { Chip } from '../chips/chip';
import { ChevronDownIcon, ChevronUpIcon } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { Text } from '../texts/text';
import {
  ChipWrapper,
  HighlightMark, IconContainer, NavigationLi, NavigationTabName, NavigationUl,
} from './styles';
import { NavigationTabComp } from './types';

export const NavigationTab: NavigationTabComp = ({
  icon,
  onClick,
  name,
  lvl = 0,
  expanded,
  tag,
  disabled,
  subitems,
  selectedTab,
  setSelectedTab,
  setExpanded,
  account,
  hasAccessGuard,
  id, path, width,
  pro, whale,
}) => {
  const [itemsExpanded, setItemsExpanded] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    if (!expanded) setItemsExpanded(false);
  }, [expanded]);

  /*
    Item should be highlighted when user enters the dashboard through direct link
    When item is collapsed but the child is selected the item should be highlighted

    On expansion/collapse of the sidebar or
    collapsing/expanding the item we need to recalculate which item needs to be highlighted
  */
  useEffect(() => {
    setIsHighlighted(shouldHighlight({ path, subitems, id }, selectedTab) && !itemsExpanded);
  }, [expanded, itemsExpanded]);

  return (
    <>
      <NavigationLi
        width={width}
        isHighlighted={isHighlighted}
        isDisabled={!!disabled}
        lvl={lvl}
        onClick={(e) => {
          e.stopPropagation();
          if (subitems) setItemsExpanded(!itemsExpanded);
          if (!subitems && onClick) onClick({ path, pro, whale });
          if (!expanded) setExpanded(true);
          if (!disabled) setSelectedTab(id);
        }}
      >
        <HighlightMark isActive={isHighlighted} />
        <IconContainer
          isHighlighted={isHighlighted}
          isDisabled={!!disabled}
          isExpanded={expanded}
        >
          {icon && (
            <IconWrapper width={expanded ? '17px' : '26px'} icon={icon} />
          )}
        </IconContainer>
        {expanded && <NavigationTabName tag={tag}><Text size="S-Regular">{name}</Text></NavigationTabName>}
        {expanded && tag && (
          <ChipWrapper className="nav-tab__chip">
            <Chip type="secondary">{tag}</Chip>
          </ChipWrapper>
        )}
        {subitems && expanded && <IconWrapper width="18px" icon={itemsExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />} />}
      </NavigationLi>
      <NavigationUl style={{ padding: 0 }}>
        {itemsExpanded
            && subitems
            && subitems.map((si) => (
              <NavigationTab
                {...si}
                hasAccessGuard={hasAccessGuard}
                account={account}
                setExpanded={setExpanded}
                disabled={!!(account && !hasAccessGuard(si))}
                expanded={expanded}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                width={width}
                icon={si.icon}
                lvl={lvl + 1}
                onClick={onClick}
                tag={pickTag(si, hasAccessGuard, account)}
                pro={si.pro}
                whale={si.whale}
              />
            ))}
      </NavigationUl>
    </>
  );
};
