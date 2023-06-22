import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { styled } from 'styled-components';
import { SimpleTooltip } from './TooltipComponent';
import { Text } from '../../atoms/texts/text';
import { localTheme } from '../../theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 128px;
`;
const meta: Meta<typeof SimpleTooltip> = {
  component: SimpleTooltip,
};

export default meta;
type Story = StoryObj<typeof SimpleTooltip>;

const Template = () => {
  const theme = localTheme();
  return (
    <Wrapper>
      <SimpleTooltip
        position="bottom"
        zIndex={theme.zIndex.OVERLAY}
        label="content bottom"
        allowPointerEvents
      >
        <div>
          <Text>target bottom</Text>
        </div>
      </SimpleTooltip>
      <SimpleTooltip
        position="top"
        zIndex={theme.zIndex.OVERLAY}
        label="content top"
        allowPointerEvents
      >
        <div>
          <Text>target top</Text>
        </div>
      </SimpleTooltip>
      <SimpleTooltip
        position="left"
        zIndex={theme.zIndex.OVERLAY}
        label="content left"
        allowPointerEvents
      >
        <div>
          <Text>target left</Text>
        </div>
      </SimpleTooltip>
      <SimpleTooltip
        position="right"
        zIndex={theme.zIndex.OVERLAY}
        label="content right"
        allowPointerEvents
      >
        <div>
          <Text>target right</Text>
        </div>
      </SimpleTooltip>
    </Wrapper>

  );
};

const MultiLineTemplate = () => (
  <SimpleTooltip
    position="top"
    zIndex={theme.zIndex.OVERLAY}
    label="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    allowPointerEvents
    multiline
  >
    <div>
      <Text>target bottom</Text>
    </div>
  </SimpleTooltip>
);

export const SimpleTooltipComponent: Story = {
  render: () => <Template />,
};
export const MultiLine: Story = {
  render: () => <MultiLineTemplate />,
};
