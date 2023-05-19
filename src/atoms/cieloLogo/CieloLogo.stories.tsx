import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { CieloLogo } from './CieloLogo';

export default {
  title: 'Atoms/CieloLogo',
  component: CieloLogo,
  argTypes: {},
} as ComponentMeta<typeof CieloLogo>;

const Template: ComponentStory<typeof CieloLogo> = (args, { globals }) => {
  const isDark = globals.backgrounds?.value === '#191B20';
  const [text, setText] = useState(true);
  return (
    <>
      <CieloLogo {...args} noText={text} night={isDark} />
      <button type="button" onClick={() => setText(!text)}>{text ? 'Full logo' : 'Symbol only logo'}</button>
    </>

  );
};

export const Standard = Template.bind({});
export const Beta = Template.bind({});
Beta.args = {
  isBeta: true,
};
