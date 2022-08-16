import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  colourOptions, groupExample, Placeholder, Select, SelectGroupOption, SelectOption, SelectProps,
} from './select';
import { IconWrapper } from '../icons/iconWrapper';
import { SettingsBars } from '../icons';
import { Text } from '../texts/text';

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
const TemplateGroup: ComponentStory<typeof Select<'multi'>> = (args) => {
  const [value, setValue] = useState<SelectGroupOption>();
  return <Select<'multi'> {...args} onSelectChange={(v) => setValue(v)} selectValue={value} />;
};
export const Primary = TemplateSingle.bind({});
export const SearchableSelect = TemplateGroup.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark theme' },
};
Primary.args = {
  selectOptions: colourOptions,
  isMulti: false,
  readOnly: false,
  placeholder: 'DEX filters',
  isXL: false,
  showValue: true,
};

SearchableSelect.parameters = {
  backgrounds: { default: 'dark theme' },
};
SearchableSelect.args = {
  selectOptions: groupExample,
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
