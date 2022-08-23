import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { UniWhalesLogo } from './uniwhalesLogo';

export default {
  title: 'Atoms/UniwhalesLogo',
  component: UniWhalesLogo,
  argTypes: {},
} as ComponentMeta<typeof UniWhalesLogo>;

const Template: ComponentStory<typeof UniWhalesLogo> = (args) => {
  const [showText, setShowText] = useState(true);
  return <UniWhalesLogo {...args} showText={showText} containerWidth="max-content" onClick={() => setShowText(!showText)} />;
};
export const Standard = Template.bind({});
