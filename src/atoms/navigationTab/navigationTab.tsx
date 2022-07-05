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
  }, [expanded, itemsExpanded, selectedTab]);

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
          if (!subitems && onClick) {
            onClick({
              path, pro, whale, subitems,
            });
          }
          if (!expanded) setExpanded(true);
          if (expanded && isHighlighted && !subitems) setExpanded(false);
          if (!disabled && !subitems) setSelectedTab(id);
        }}
      >
        <HighlightMark lvl={lvl} isActive={isHighlighted} />
        <IconContainer
          isHighlighted={isHighlighted}
          isDisabled={!!disabled}
          isExpanded={expanded}
        >
          {icon && (
            <IconWrapper width={expanded ? '16px' : '24px'} icon={icon} />
          )}
        </IconContainer>
        {expanded && <NavigationTabName tag={tag}><Text size="S-Regular">{name}</Text></NavigationTabName>}
        {expanded && tag && (
          <ChipWrapper>
            <Chip type="secondary">{tag}</Chip>
          </ChipWrapper>
        )}
        {subitems && expanded && <IconWrapper width="18px" icon={itemsExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />} />}
      </NavigationLi>
      <NavigationUl>
        {itemsExpanded
            && subitems
            && subitems.map((si) => (
              <NavigationTab
                {...si}
                /* Marcin:
                  react doesn't recognize that enum can be a key so i need to cast to string
                */
                key={si.id as unknown as string}
                hasAccessGuard={hasAccessGuard}
                account={account}
                setExpanded={setExpanded}
                disabled={si.isDisabled || !!(account && !hasAccessGuard(si))}
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
                path={si.path}
              />
            ))}
      </NavigationUl>
    </>
  );
};
