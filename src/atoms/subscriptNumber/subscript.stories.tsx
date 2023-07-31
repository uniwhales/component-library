import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { BodySizes } from '../texts/types';
import { Subscript } from './subscript';
import { Text } from '../texts/text';
import { Row } from '../common/flex';

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
  list: BodySizes[],
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
      {list.map((item) => (
        <Row gap="4px" alignItems="center">
          <Text size={item}>Some text:</Text>
          <Subscript
            key={item}
            size={item}
            beforeSubscript="0.0"
            subscript="6"
            afterSubscript="452"
          />
        </Row>
      ))}
    </>
  );
};

export const BodyText = Template.bind({});

BodyText.args = {
  list: bodySizes,
};

BodyText.parameters = {
  backgrounds: { default: 'dark' },
};
