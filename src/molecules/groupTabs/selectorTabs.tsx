import React from 'react';
import { SelectorTabAtom } from '../../atoms/tabs/selectorTab';
import { Styled } from '../../theme';

export interface Tab {
  id: string;
  value: string;
  icon?: boolean;
  label: string;
}
export interface SelectorTabsProps {
  tabs: Tab[];
  // isActive?: boolean
  setActiveTab: (e:any) => void;
  activeTab?: Tab;
}
const Wrapper = Styled.div`
  display: flex;
`;

export const SelectorTabsMolecules = ({ tabs, activeTab, setActiveTab }:SelectorTabsProps) => {
  const menu = tabs.map((item, i) => (
    <SelectorTabAtom
      setActiveTab={() => setActiveTab(item)}
      key={item.id}
      isHighlighted={activeTab && activeTab.id === item.id}
      tabIndex={i}
    >
      {item.label}
    </SelectorTabAtom>
  ));
  return (
    <Wrapper>
      {menu}
    </Wrapper>
  );
};
