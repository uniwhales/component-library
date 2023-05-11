import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Styled, Theme } from '../../theme';
import { SimpleTooltip } from './TooltipComponent';
import { Text } from '../../atoms/texts/text';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 128px;
`;
export default {
  title: 'Molecules/SimpleTooltip',
  component: SimpleTooltip,
  argTypes: {},
} as ComponentMeta<typeof SimpleTooltip>;

const Template: ComponentStory<typeof SimpleTooltip> = () => (
  <Wrapper>
    <SimpleTooltip
      position="bottom"
      zIndex={Theme.zIndex.OVERLAY}
      label="content bottom"
      allowPointerEvents
    >
      <div>
        <Text>target bottom</Text>
      </div>
    </SimpleTooltip>
    <SimpleTooltip
      position="top"
      zIndex={Theme.zIndex.OVERLAY}
      label="content top"
      allowPointerEvents
    >
      <div>
        <Text>target top</Text>
      </div>
    </SimpleTooltip>
    <SimpleTooltip
      position="left"
      zIndex={Theme.zIndex.OVERLAY}
      label="content left"
      allowPointerEvents
    >
      <div>
        <Text>target left</Text>
      </div>
    </SimpleTooltip>
    <SimpleTooltip
      position="right"
      zIndex={Theme.zIndex.OVERLAY}
      label="content right"
      allowPointerEvents
    >
      <div>
        <Text>target right</Text>
      </div>
    </SimpleTooltip>
  </Wrapper>

);

export const SimpleTooltipComponent = Template.bind({});
