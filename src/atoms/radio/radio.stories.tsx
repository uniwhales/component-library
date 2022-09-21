import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Radio } from './radio';
import { RadioSize } from '../../utils/getSize';

export default {
  title: 'Atoms/Radio',
  component: Radio,
  argTypes: {
  },
} as ComponentMeta<typeof Radio>;

const dummyData = [{ label: 'Radio One', disabled: false }, { label: 'Radio Two', disabled: false }, { label: 'Radio Three', disabled: false }, { label: 'Disabled Radio', disabled: true }];

const Template: ComponentStory<typeof Radio> = () => {
  const [selected, setSelected] = useState<null | string>(null);

  return (
    <div>
      {dummyData.map((item) => (
        <Radio
          key={item.label}
          label={item.label}
          value={item.label}
          name={item.label}
          disabled={item.disabled}
          selected={selected === item.label}
          onClick={(e) => setSelected(e.target.value)}
          size={RadioSize.Small}
        />
      ))}
    </div>
  );
};

export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
