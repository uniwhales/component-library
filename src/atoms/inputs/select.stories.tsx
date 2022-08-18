import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  Placeholder, Select, SelectGroupOption, SelectOption,
} from './select';
import { IconWrapper } from '../icons/iconWrapper';
import {
  AvalancheColor, BinanceColor, EthereumColor, FantomColor, SettingsBars,
} from '../icons';
import { Text } from '../texts/text';

export const ColourOptions = [
  { id: 0, value: 'blue blue', label: 'Blue' },
  { id: 1, value: 'purple', label: 'Purple' },
  { id: 2, value: 'red', label: 'Red' },
  { id: 3, value: 'orange', label: 'Orange' },
  { id: 4, value: 'yellow', label: 'Yellow' },
  { id: 5, value: 'green', label: 'Green' },
  { id: 6, value: 'forest', label: 'Forest' },
  { id: 7, value: 'slate', label: 'Slate' },
  { id: 8, value: 'silver', label: 'Silver' },
];

export const TxOptions = [
  { id: 1, value: 'swap', label: 'Swaps' },
  { id: 2, value: 'lp', label: 'LPs' },
  { id: 3, value: 'nft_trade', label: 'NFT Trade' },
  { id: 4, value: 'nft_transfer', label: 'NFT Transfer' },
  { id: 5, value: 'nft_mint', label: 'NFT Mint' },
  { id: 6, value: 'reward', label: 'Reward' },
  { id: 7, value: 'option', label: 'Option' },
  { id: 8, value: 'bridge', label: 'Bridge' },
  { id: 9, value: 'flashloan', label: 'Flashloan' },
];

export const ChainOptions = [
  {
    id: 1, value: 'ethereum', label: 'Ethereum', icon: <IconWrapper height="16px" width="16px" icon={<EthereumColor />} />,
  },
  {
    id: 2, value: 'fantom', label: 'Fantom', icon: <IconWrapper height="16px" width="16px" icon={<FantomColor />} />,
  },
  {
    id: 3, value: 'bsc', label: 'Bsc', icon: <IconWrapper height="16px" width="16px" icon={<BinanceColor />} />,
  },
  {
    id: 4, value: 'avalanche', label: 'Avalanche', icon: <IconWrapper height="16px" width="16px" icon={<AvalancheColor />} />,
  },
];

export const GroupExample = [
  {
    label: 'Chains',
    options: ChainOptions,
  },
  { label: 'Tx Types', options: TxOptions },
];

export default {
  title: 'Atoms/Select',
  component: Select,
  argTypes: {
  },
} as ComponentMeta<typeof Select>;

const TemplateSingle: ComponentStory<typeof Select<'single'>> = (args) => {
  const [value, setValue] = useState<SelectOption>();
  return <Select<'single'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} />;
};
const TemplateGroup: ComponentStory<typeof Select<'group'>> = (args) => {
  const [value, setValue] = useState<SelectGroupOption>();
  return <Select<'group'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} />;
};
const TemplateMulti: ComponentStory<typeof Select<'multi'>> = (args) => {
  const [value, setValue] = useState<SelectOption[]>();
  return <Select<'multi'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} />;
};
const TemplateMultiGroup: ComponentStory<typeof Select<'multi-group'>> = (args) => {
  const [value, setValue] = useState<SelectGroupOption[]>();
  return <Select<'multi-group'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} />;
};
export const Primary = TemplateSingle.bind({});
export const SingleGroupSearchSelect = TemplateGroup.bind({});
export const MultiSelect = TemplateMulti.bind({});
export const MultiGroupSelect = TemplateMultiGroup.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark theme' },
};
Primary.args = {
  selectOptions: ColourOptions,
  isMulti: false,
  readOnly: false,
  placeholder: 'DEX filters',
  isXL: false,
  showValue: true,
};

MultiSelect.parameters = {
  backgrounds: { default: 'dark theme' },
};
MultiSelect.args = {
  selectOptions: ColourOptions,
  isMulti: true,
  readOnly: false,
  showValue: true,
  placeholder:
  <Placeholder>
    <IconWrapper height="20px" width="20px" icon={<SettingsBars />} />
    <Text size="S-Regular">Filter Tx types and Chains</Text>
  </Placeholder>,
  isXL: true,
  isClearable: false,
  isSearchable: false,
};
SingleGroupSearchSelect.parameters = {
  backgrounds: { default: 'dark theme' },
};
SingleGroupSearchSelect.args = {
  selectOptions: GroupExample,
  isMulti: false,
  readOnly: false,
  showValue: true,
  placeholder:
  <Placeholder>
    <IconWrapper height="20px" width="20px" icon={<SettingsBars />} />
    <Text size="S-Regular">Filter Tx types and Chains</Text>
  </Placeholder>,
  isXL: true,
  isClearable: true,
  isSearchable: true,
};
MultiGroupSelect.args = {
  selectOptions: GroupExample,
  isMulti: true,
  readOnly: false,
  showValue: true,
  placeholder:
  <Placeholder>
    <IconWrapper height="20px" width="20px" icon={<SettingsBars />} />
    <Text size="S-Regular">Filter Tx types and Chains</Text>
  </Placeholder>,
  isXL: true,
  isClearable: true,
  isSearchable: true,
};
