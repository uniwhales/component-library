import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { TextArea } from './textarea';
import { Styled } from '../../theme';

const Wrapper = Styled.div`
  height: 200px;
`;
export default {
  title: 'Atoms/TextArea',
  component: TextArea,
  argTypes: {
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = () => {
  const [value, setValue] = useState<string>('');
  return (
    <Wrapper>
      <TextArea value={value} onChange={(e) => setValue(e.target.value)} disabled={false} />
    </Wrapper>

  );
};

export const Primary = Template.bind({});
