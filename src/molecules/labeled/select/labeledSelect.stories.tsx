import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  AvalancheColor, BinanceColor, EthereumColor, FantomColor, SettingsBars,
} from '../../../atoms/icons';
import { IconWrapper } from '../../../atoms/icons/iconWrapper';
import { LabeledSelect } from './labeledSelect';
import { Placeholder, SelectOption } from '../../../atoms/inputs/select';
import { ButtonAtom } from '../../../atoms/buttons/button';
import { Text } from '../../../atoms/texts/text';

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

export default {
  title: 'Molecules/LabeledSelect',
  component: LabeledSelect,
  argTypes: {
  },
} as Meta<typeof LabeledSelect>;

const TemplateSingle: StoryFn<typeof LabeledSelect<'single'>> = (args) => {
  const [value, setValue] = useState<SelectOption>();
  return (
    <>
      <LabeledSelect<'single'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} />
      <ButtonAtom buttonVariant="primary">Test</ButtonAtom>
    </>
  );
};
const TemplateGroup: StoryFn<typeof LabeledSelect<'group'>> = (args) => {
  const [value, setValue] = useState<SelectOption>();
  return <LabeledSelect<'group'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} />;
};
const TemplateMulti: StoryFn<typeof LabeledSelect<'multi'>> = (args) => {
  const [value, setValue] = useState<SelectOption[]>();
  return <LabeledSelect<'multi'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} />;
};
const TemplateMultiGroup: StoryFn<typeof LabeledSelect<'multi-group'>> = (args) => {
  const [value, setValue] = useState<SelectOption[]>();
  return <LabeledSelect<'multi-group'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} />;
};
export const LabeledPrimary = TemplateSingle.bind({});
export const LabeledSingleGroupSearchSelect = TemplateGroup.bind({});
export const LabeledMultiSelect = TemplateMulti.bind({});
export const LabeledMultiGroupSelect = TemplateMultiGroup.bind({});

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
  showValue: 'every',
  label: 'Cielo',
  required: true,
};

LabeledMultiSelect.parameters = {
  backgrounds: { default: 'dark theme' },
};
LabeledMultiSelect.args = {
  selectOptions: ColourOptions,
  isMulti: true,
  readOnly: false,
  showValue: 'every',
  placeholder:
  <Placeholder>
    <IconWrapper height="20px" width="20px" icon={<SettingsBars />} />
    <Text size="14-Regular">Filter Tx types and Chains</Text>
  </Placeholder>,
  isXL: true,
  isClearable: false,
  isSearchable: false,
  label: 'Labeled Multi Select',
};

LabeledSingleGroupSearchSelect.parameters = {
  backgrounds: { default: 'dark theme' },
};
LabeledSingleGroupSearchSelect.args = {
  selectOptions: GroupExample,
  isMulti: false,
  readOnly: false,
  showValue: 'every',
  placeholder:
  <Placeholder>
    <IconWrapper height="20px" width="20px" icon={<SettingsBars />} />
    <Text size="14-Regular">Filter Tx types and Chains</Text>
  </Placeholder>,
  isXL: true,
  isClearable: true,
  isSearchable: true,
  label: 'Labeled Single Group Search Select',
};
LabeledMultiGroupSelect.args = {
  selectOptions: GroupExample,
  isMulti: true,
  readOnly: false,
  showValue: 'every',
  placeholder:
  <Placeholder>
    <IconWrapper height="20px" width="20px" icon={<SettingsBars />} />
    <Text size="14-Regular">Filter Tx types and Chains</Text>
  </Placeholder>,
  isXL: true,
  isClearable: true,
  isSearchable: true,
  label: 'Labeled Multi Group Select',
};
