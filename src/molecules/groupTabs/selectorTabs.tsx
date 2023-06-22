import React from 'react';
import { styled } from 'styled-components';
import { SelectorTabAtom } from '../../atoms/tabs/selectorTab';

export interface Tab {
  id: string;
  value: string;
  icon?: boolean;
  label: string;
}
export interface SelectorTabsProps {
  tabs: Tab[];
  setActiveTab: (e:any) => void;
  activeTab?: Tab;
}
const Wrapper = styled.div`
  display: flex;
`;

export const SelectorTabsMolecules = ({ tabs, activeTab, setActiveTab }: SelectorTabsProps) => {
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
