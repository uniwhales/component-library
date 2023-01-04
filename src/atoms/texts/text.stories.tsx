import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
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
  'L-Regular',
  'L-Bold',
  'M-Regular',
  'M-Bold',
  'Button-Regular',
  'Button-Bold',
  'S-Regular',
  'S-Bold',
  'Caption-Regular',
  'Caption-Bold',
  'Tiny-Regular',
  'Tiny-Bold',
  'Overline-Regular',
  'Overline-Bold',
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
  console.debug(list);
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
