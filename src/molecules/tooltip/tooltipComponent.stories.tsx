import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Styled, Theme } from '../../theme';
import { SimpleTooltip } from './TooltipComponent';
import { Text } from '../../atoms/texts/text';
import { ButtonAtom } from '../../atoms/buttons/button';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export default {
  title: 'Molecules/SimpleTooltip',
  component: SimpleTooltip,
  argTypes: {},
} as ComponentMeta<typeof SimpleTooltip>;

const Template: ComponentStory<typeof SimpleTooltip> = () => {
  const [text, setText] = useState('Not Clicked');
  return (
    <Wrapper>
      <SimpleTooltip
        position="bottom"
        opened
        zIndex={Theme.zIndex.OVERLAY}
        label={(
          <div>
            <Wrapper>
              <Text>{text}</Text>
              <ButtonAtom
                onClick={() => {
                  setText('Clicked');
                }}
                buttonVariant="primary"
              />
            </Wrapper>
          </div>
        )}
      >
        <ButtonAtom
          buttonVariant="primary"
        >
          Open
        </ButtonAtom>
      </SimpleTooltip>
    </Wrapper>

  );
};

export const SimpleTooltipComponent = Template.bind({});
