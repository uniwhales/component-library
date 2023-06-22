import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';
import { IdenticonComponent } from './Identicon';
import { Theme } from '../../theme';
import { Text } from '../texts/text';
import { SelectableIdenticon } from './SelectIdenticon';
import { IdenticonProps, SelectableIdenticonProps } from './types';

const meta: Meta<typeof IdenticonComponent> = {
  component: IdenticonComponent,
};

export default meta;
type Story = StoryObj<typeof IdenticonComponent>;

const WalletWrapper = styled.div<{ $isMintersTab?: boolean }>`
  padding: 8px 16px;
  display: flex;
  cursor: pointer;
  border-radius: 12px;
  align-items: center;
  gap: 8px;
  width: ${({ $isMintersTab }) => ($isMintersTab ? '840px' : '100%')};
  box-sizing: border-box;
  :hover {
    p {
      color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
    }
    background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_1};
  }
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  :nth-child(2n) {
    :hover {
      background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_1};
    }
    background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_2};
  }
`;
const Template = (args: React.JSX.IntrinsicAttributes & IdenticonProps) => (
  <IdenticonComponent {...args} />
);

const SelectableTemplate = (props: React.JSX.IntrinsicAttributes & SelectableIdenticonProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <WalletWrapper>

      <SelectableIdenticon
        {...props}
        checkbox={{
          // eslint-disable-next-line
          ...props.checkbox,
          selected: checked,
          onClick: () => setChecked(!checked),
        }}
      />
    </WalletWrapper>
  );
};
export const Primary: Story = {
  render: (args) => <Template {...args} />,
};
export const NoInteraction: Story = {
  render: (args) => <Template {...args} />,
};
export const WithSelectableTemplate: Story = {
  render: () => (
    <SelectableTemplate
      text={(
        <Text size="14-Regular" color={Theme.textShades.SHADE_MINUS_2}>Label of a wallet</Text>
      )}
      checkbox={{
        disabled: false,
        selected: false,
        onClick: () => { console.debug('click select'); },
      }}
      identicon={{
        size: 'big',
        id: 'someRandomString',
        hasInteraction: true,
        href: 'https://staging.app.cielo.finance/',
        target: 'blank',
        onClick: () => {
          console.debug('click');
        },
      }}
    />
  ),
};

Primary.args = {
  id: 'someRandomString',
  size: 'big',
  hasInteraction: true,
  onClick: () => console.log('Clicked'),
};

NoInteraction.args = {
  id: 'someRandomString',
  hasInteraction: false,
  size: 'big',
  isLink: false,
};
