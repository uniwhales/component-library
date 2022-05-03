import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { BodySizes, HeaderSizes, Text } from './text';
import { Primary } from '../../molecules/copyToClipBoard/copyToClipBoard.stories';

const headerSizes: HeaderSizes[] = ['H1-Regular',
  'H1-Semibold',
  'H1-Bold',
  'H2-Regular',
  'H2-Semibold',
  'H2-Bold',
  'H3-Regular',
  'H3-Semibold',
  'H3-Bold',
  'H4-Regular',
  'H4-Semibold',
  'H4-Bold',
  'H5-Regular',
  'H5-Semibold',
  'H5-Bold',
  'H6-Regular',
  'H6-Semibold',
  'H6-Bold'];

const bodySizes: BodySizes[] = [
  'L-Regular',
  'L-Semibold',
  'L-Bold',
  'M-Regular',
  'M-Semibold',
  'M-Bold',
  'S-Regular',
  'S-Semibold',
  'S-Bold',
  'XS-Regular',
  'XS-Semibold',
  'XS-Bold',
];

interface TemplateSizes {
  list: | HeaderSizes[] | BodySizes[],
}

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    size: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: Story<TemplateSizes> = (args) => {
  const { list } = args;
  return (
    <>
      {list.map((item) => <Text key={item} size={item}>{item}</Text>)}
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

HeadingsAndTitles.parameters = {
  backgrounds: { default: 'dark' },
};
BodyText.parameters = {
  backgrounds: { default: 'dark' },
};
