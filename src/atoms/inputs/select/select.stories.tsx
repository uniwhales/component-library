import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
} from './select';
import { IconWrapper } from '../../icons/iconWrapper';
import {
  BinanceColor, BobaColor, EthereumColor, FantomColor, SettingsBars, ZkEvmColor,
} from '../../icons';
import { Text } from '../../texts/text';
import { Wrapper } from '../input';
import { Placeholder } from './components';
import { SelectOption, SelectProps } from './types';

const ColourOptions = [
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

const WithIcon = [
  {
    id: 0, value: 'blue blue', label: 'Blue',
  },
  { id: 1, value: 'purple', label: 'Purple' },
];

const LongOptions = [
  { id: 0, value: 'testtttttttttttttttttttttt', label: 'testtttttttttttttttttttttttesttttttttttttttttttttttt' },
  { id: 1, value: 'TestTestTestTest TestTestTestTest', label: 'TestTestTestTest TestTestTestTest' },
  { id: 1, value: 'TABTABTABTABTAB TABTABTABTABTAB', label: 'TABTABTABTABTAB TABTABTABTABTAB' },
];
const TxOptions = [
  {
    id: 1, value: 'swap', label: 'Swaps', order: 1,
  },
  {
    id: 2, value: 'lp', label: 'LPs', order: 2,
  },
  {
    id: 3, value: 'nft_trade', label: 'NFT Trade', order: 3,
  },
  {
    id: 4, value: 'nft_transfer', label: 'NFT Transfer', order: 4,
  },
  {
    id: 5, value: 'nft_mint', label: 'NFT Mint', order: 5,
  },
  {
    id: 6, value: 'reward', label: 'Reward', order: 6,
  },
  {
    id: 7, value: 'option', label: 'Option', order: 7,
  },
  {
    id: 8, value: 'bridge', label: 'Bridge', order: 8,
  },
  {
    id: 9, value: 'flashloan', label: 'Flashloan', order: 9,
  },
].sort((a, b) => b.order! - a.order!);

const ChainOptions = [
  {
    id: 1, value: 'ethereum', label: 'Ethereum', icon: <IconWrapper height="16px" width="16px" icon={<EthereumColor />} />, order: 1,
  },
  {
    id: 2, value: 'fantom', label: 'Fantom', icon: <IconWrapper height="16px" width="16px" icon={<FantomColor />} />, order: 2,
  },
  {
    id: 3, value: 'bsc', label: 'Bsc', icon: <IconWrapper height="16px" width="16px" icon={<BinanceColor />} />, order: 3,
  },
  {
    id: 4, value: 'noicon', label: 'No Icon', order: 4,
  },
  {
    id: 5, value: 'bobo', label: 'Bobo', icon: <IconWrapper height="16px" width="16px" icon={<BobaColor />} />, order: 5,
  },
  {
    id: 6, value: 'noicon', label: 'No Icon', order: 6,
  },
  {
    id: 5, value: 'polygonzkevm', label: 'Polygon ZKevm', icon: <IconWrapper height="16px" width="16px" icon={<ZkEvmColor />} />, order: 7,
  },
];

const GroupExample = [
  {
    label: 'Chains',
    options: ChainOptions,
  },
  { label: 'Tx Types', options: TxOptions },
];

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

const TemplateSingle = (args: SelectProps<'single'>) => {
  const [value, setValue] = useState<SelectOption>();
  return (
    <Wrapper mt="200px">
      <Select<'single'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} />
    </Wrapper>
  );
};
const TemplateGroup = (args: SelectProps<'group'>) => {
  const [value, setValue] = useState<SelectOption>();
  return (
    <Wrapper>
      <Select<'group'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} />
    </Wrapper>
  );
};
const TemplateMulti = (args: SelectProps<'multi'>) => {
  const [value, setValue] = useState<SelectOption[]>();
  return (
    <Wrapper>
      <Select<'multi'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} />
    </Wrapper>
  );
};
const TemplateMultiGroup = (args: SelectProps<'multi-group'>) => {
  const [value, setValue] = useState<SelectOption[]>();
  return (
    <Wrapper>
      <Select<'multi-group'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} handleClearValue={() => setValue([])} />
    </Wrapper>
  );
};
export const Primary: Story = {
  render: (args: SelectProps<'single'>) => <TemplateSingle {...args} />,
};
export const PrimaryIcon: Story = {
  render: (args: SelectProps<'single'>) => <TemplateSingle {...args} />,
};
export const LongOption: Story = {
  render: (args: SelectProps<'single'>) => <TemplateSingle {...args} />,
};
export const SingleGroupSearchSelect: Story = {
  render: (args: SelectProps<'group'>) => <TemplateGroup {...args} />,
};
export const MultiSelect: Story = {
  render: (args: SelectProps<'multi'>) => <TemplateMulti {...args} />,
};
export const MultiGroupSelect: Story = {
  render: (args: SelectProps<'multi-group'>) => <TemplateMultiGroup {...args} />,
};
export const CustomMenuHeight: Story = {
  render: (args: SelectProps<'multi'>) => <TemplateMulti {...args} />,
};

Primary.parameters = {
  backgrounds: { default: 'dark theme' },
};
Primary.args = {
  width: '150px',
  selectOptions: ChainOptions,
  isMulti: false,
  readOnly: false,
  placeholder: 'DEX filters',
  isXL: false,
  showValue: true,
  smallText: true,
};

PrimaryIcon.args = {
  selectOptions: WithIcon,
  isMulti: false,
  readOnly: false,
  isXL: false,
  showValue: true,
  placeholder: 'Primary Icon',
};

LongOption.args = {
  selectOptions: LongOptions,
  isMulti: false,
  readOnly: false,
  placeholder: 'Long',
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
    <IconWrapper cursor="pointer" height="20px" width="20px" icon={<SettingsBars />} />
    <Text size="14-Regular">Filter Tx types and Chains</Text>
  </Placeholder>,
  isXL: true,
  isClearable: false,
  isSearchable: false,
};
CustomMenuHeight.args = {
  selectOptions: ColourOptions,
  isMulti: true,
  readOnly: false,
  showValue: true,
  placeholder:
  <Placeholder>
    <IconWrapper cursor="pointer" height="20px" width="20px" icon={<SettingsBars />} />
    <Text size="14-Regular">Filter Tx types and Chains</Text>
  </Placeholder>,
  isXL: true,
  isClearable: false,
  isSearchable: false,
  maxMenuHeight: 100,
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
    <IconWrapper cursor="pointer" height="20px" width="20px" icon={<SettingsBars />} />
    <Text size="14-Regular">Filter Tx types and Chains</Text>
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
    <IconWrapper cursor="pointer" height="20px" width="20px" icon={<SettingsBars />} />
    <Text size="14-Regular">Filter Tx types and Chains</Text>
  </Placeholder>,
  isXL: true,
  isClearable: true,
  isSearchable: true,
};
