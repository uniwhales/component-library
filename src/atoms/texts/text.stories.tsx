import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Text } from './text';
import { BodySizes, HeaderSizes, HyperLinkVariation } from './types';

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
  'XXS-Regular',
  'XXS-Semibold',
  'XXS-Bold',
];
const hyperLinks: HyperLinkVariation[] = [
  HyperLinkVariation.Default,
  HyperLinkVariation.Fuschia,
  HyperLinkVariation.Purple,
  HyperLinkVariation.Tangy,
  HyperLinkVariation.Turquoise,
  HyperLinkVariation.Inverse,
  HyperLinkVariation.InverseNoLine,

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

const LinkTemplate: Story<TemplateSizes> = (args) => {
  const { list } = args;
  return (
    <>
      {list.map((item) => (
        <div>
          {hyperLinks.map((h) => (
            <div>
              <Text key={item} hyperLinkVariation={h} target="_blank" href="https://www.uniwhales.io" size={item}>
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
  );
};
export const HeadingsAndTitles = Template.bind({});
export const BodyText = Template.bind({});
export const LinkS = LinkTemplate.bind({});

BodyText.args = {
  list: bodySizes,
};
HeadingsAndTitles.args = {
  list: headerSizes,
};
LinkS.args = {
  list: bodySizes,
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
