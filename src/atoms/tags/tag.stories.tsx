import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tag } from './tag';
import { Wrapper } from './tag.styles';

export default {
  title: 'Atoms/Tags',
  component: Tag,
  argTypes: {
    type: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof Tag>;

const mockData = ['NFT', 'privacy', 'defi', 'metaverse', 'Aurora', 'L2'];

const Template: ComponentStory<typeof Tag> = (args) => (
  <Wrapper>
    {mockData.map((item, index) => {
      const [isActive, setIsActive] = useState<boolean>(false);

      return (
        <Tag
          {...args}
          key={item}
          isOn={isActive}
          onClick={() => {
            setIsActive(!isActive);
          }}
          tabIndex={index}
        >
          {item}
        </Tag>
      );
    })}
  </Wrapper>
);
export const ContentTags = Template.bind({});
export const ContentTagsCustomWidth = Template.bind({});
export const CustomFontSize = Template.bind({});

ContentTags.parameters = {
  backgrounds: { default: 'dark' },
};
ContentTagsCustomWidth.args = {
  width: '400px',
};

CustomFontSize.args = {
  fontSize: 'H4-Bold',
};
