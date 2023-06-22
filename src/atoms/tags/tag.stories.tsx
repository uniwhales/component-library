import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';
import { Wrapper } from './tag.styles';
import { BodySizes, HeaderSizes } from '../texts/types';

const meta: Meta<typeof Tag> = {
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

const mockData = ['NFT', 'privacy', 'defi', 'metaverse', 'Aurora', 'L2'];

const Template = (args: React.JSX.IntrinsicAttributes & { children: React.ReactChild; isOn: boolean; tabIndex: number; onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void; fontSize?: BodySizes | HeaderSizes | undefined; } & Pick<React.CSSProperties, 'width'>) => (
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
export const ContentTags: Story = {
  render: (args) => <Template {...args} />,
};
export const ContentTagsCustomWidth: Story = {
  render: (args) => <Template {...args} />,
};

export const CustomFontSize: Story = {
  render: (args) => <Template {...args} />,
};

ContentTags.parameters = {
  backgrounds: { default: 'dark' },
};
ContentTagsCustomWidth.args = {
  width: '400px',
};

CustomFontSize.args = {
  fontSize: 'H4-Bold',
};
