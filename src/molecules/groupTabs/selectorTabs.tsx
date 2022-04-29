import React, { useState } from 'react';
import { SelectorTabAtom } from '../../atoms/tabs/selectorTab';
import { Styled } from '../../theme';

export interface Tab {
  id: string;
  name: string;
  icon: boolean;
}
export interface Props {
  tabs: Tab[];
  isActive?: boolean
  setActiveTab: (e:any) => void;
  activeTab?: Tab;
}
const Wrapper = Styled.div`
  display: flex;
`;

export const SelectorTabsMolecules = ({ tabs, activeTab, setActiveTab }:Props) => {
  const menu = tabs.map((item, i) => (
    <SelectorTabAtom
        // @ts-ignore
      icon={item.icon ? item.name.toLowerCase() : undefined}
      setActiveTab={() => setActiveTab(item)}
      key={item.id}
      isHighlighted={activeTab && activeTab.id === item.id}
      tabIndex={i}
      title={item.name}
    />
  ));
  return (
    <Wrapper>
      {menu}
    </Wrapper>
  );
};
