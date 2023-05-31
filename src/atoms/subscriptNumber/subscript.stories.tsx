import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { BodySizes, HeaderSizes } from '../texts/types';
import { Subscript } from './subscript';

const headerSizes: HeaderSizes[] = ['H1-Regular',
  'H1-Bold',
  'H2-Regular',
  'H2-Bold',
  'H3-Regular',
  'H3-Bold',
  'H4-Regular',
  'H4-Bold',
  'H5-Regular',
  'H5-Bold',
  'H6-Regular',
  'H6-Bold'];

const bodySizes: BodySizes[] = [
  '16-Regular',
  '16-Bold',
  '14-Regular',
  '14-Bold',
  '12-Regular',
  '12-Bold',
  '11-Regular',
  '11-Bold',
  '10-Regular',
  '10-Bold',
  '8-Regular',
  '8-Bold',
];

interface TemplateSizes {
  list: BodySizes[] | HeaderSizes[],
}

export default {
  title: 'Atoms/Subscript',
  component: Subscript,
  argTypes: {
    size: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof Subscript>;

const Template: Story<TemplateSizes> = (args) => {
  const { list } = args;
  return (
    <>
      {list.map((item) => <Subscript key={item} size={item} beforeSubscript="0.0" subscript="6" afterSubscript="452" />)}
    </>
  );
};

export const HeadingsAndTitles = Template.bind({});
export const BodyText = Template.bind({});

BodyText.args = {
  list: bodySizes,
};
HeadingsAndTitles.args = {
  list: headerSizes,
};

BodyText.parameters = {
  backgrounds: { default: 'dark' },
};
HeadingsAndTitles.parameters = {
  backgrounds: { default: 'dark' },
};
