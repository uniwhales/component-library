import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  AvalancheColor, BinanceColor, EthereumColor, FantomColor, SettingsBars,
} from '../../../atoms/icons';
import { IconWrapper } from '../../../atoms/icons/iconWrapper';
import { LabeledSelect, LabeledSelectProps } from './labeledSelect';
import { ButtonAtom } from '../../../atoms/buttons/button';
import { Text } from '../../../atoms/texts/text';
import { SelectOption, SelectProps } from '../../../atoms/inputs/select/types';
import { Placeholder } from '../../../atoms/inputs/select/components';
import { Select } from '../../../atoms/inputs/select/select';

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
    id: 4, value: 'avalanche', label: 'Avalanche', icon: <IconWrapper height="16px" width="16px" icon={<AvalancheColor />} />, order: 4,
  },
];

const GroupExample = [
  {
    label: 'Chains',
    options: ChainOptions,
  },
  { label: 'Tx Types', options: TxOptions },
];

const meta: Meta<typeof LabeledSelect> = {
  component: LabeledSelect,
};

export default meta;
type Story = StoryObj<typeof Select>;

const TemplateSingle = (args: SelectProps<'single'> & LabeledSelectProps) => {
  const [value, setValue] = useState<SelectOption>();
  return (
    <>
      <LabeledSelect<'single'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} />
      <ButtonAtom buttonVariant="primary">Test</ButtonAtom>
    </>
  );
};
const TemplateGroup = (args: SelectProps<'group'> & LabeledSelectProps) => {
  const [value, setValue] = useState<SelectOption>();
  return <LabeledSelect<'group'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} />;
};
const TemplateMulti = (args: React.JSX.IntrinsicAttributes & SelectProps<'multi'> & LabeledSelectProps) => {
  const [value, setValue] = useState<SelectOption[]>();
  return <LabeledSelect<'multi'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} />;
};
export const LabeledPrimary: Story = {
  render: (args: SelectProps<'single'>) => <TemplateSingle {...args} label="Label" />,
};
export const LabeledSingleGroupSearchSelect: Story = {
  render: (args: SelectProps<'group'>) => <TemplateGroup {...args} label="Label" />,
};
export const LabeledMultiSelect: Story = {
  render: (args: SelectProps<'multi'>) => <TemplateMulti {...args} label="Label" />,
};

LabeledPrimary.parameters = {
  backgrounds: { default: 'dark theme' },
};
LabeledPrimary.args = {
  noOptionsMessage: 'Custom message',
  selectOptions: ColourOptions,
  isMulti: false,
  readOnly: false,
  placeholder: 'DEX filters',
  isXL: false,
  showValue: true,
  required: true,
};

LabeledMultiSelect.parameters = {
  backgrounds: { default: 'dark theme' },
};
LabeledMultiSelect.args = {
  selectOptions: ColourOptions,
  isMulti: true,
  readOnly: false,
  showValue: true,
  placeholder:
  <Placeholder>
    <IconWrapper height="20px" width="20px" icon={<SettingsBars />} />
    <Text size="14-Regular">Filter Tx types and Chains</Text>
  </Placeholder>,
  isXL: true,
  isClearable: false,
  isSearchable: false,
};

LabeledSingleGroupSearchSelect.parameters = {
  backgrounds: { default: 'dark theme' },
};
LabeledSingleGroupSearchSelect.args = {
  selectOptions: GroupExample,
  isMulti: false,
  readOnly: false,
  showValue: true,
  placeholder:
  <Placeholder>
    <IconWrapper height="20px" width="20px" icon={<SettingsBars />} />
    <Text size="14-Regular">Filter Tx types and Chains</Text>
  </Placeholder>,
  isXL: true,
  isClearable: true,
  isSearchable: true,
};
