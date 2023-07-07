import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';
import { BodySizes, HeaderSizes, HyperLinkVariation } from './types';

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
  '9-Regular',
  '9-Bold',
  '8-Regular',
  '8-Bold',
];
const hyperLinks: HyperLinkVariation[] = [
  HyperLinkVariation.Default,
  HyperLinkVariation.Canary,
  HyperLinkVariation.Sky,
  HyperLinkVariation.Tangy,
  HyperLinkVariation.Teal,
  HyperLinkVariation.Inverse,
  HyperLinkVariation.InverseNoLine,

];

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const BodyText: Story = {
  render: () => (
    <>
      {bodySizes.map((item) => <Text key={item} size={item}>{item}</Text>)}
    </>
  ),
};

export const HeadingsAndTitles: Story = {
  render: () => (
    <>
      {headerSizes.map((item) => <Text key={item} size={item}>{item}</Text>)}
    </>
  ),
};

export const LinkS: Story = {
  render: () => (
    <>
      {bodySizes.map((item) => (
        <div>
          {hyperLinks.map((h) => (
            <div>
              <Text key={item} $hyperLinkVariation={h} target="_blank" href="https://www.uniwhales.io" size={item}>
                <>
                  {item}
                  {' '}
                  {h}
                </>
              </Text>
            </div>
          ))}
        </div>
      ))}
    </>
  ),
};

LinkS.parameters = {
  backgrounds: { default: 'dark' },
};
HeadingsAndTitles.parameters = {
  backgrounds: { default: 'dark' },
};
BodyText.parameters = {
  backgrounds: { default: 'dark' },
};
