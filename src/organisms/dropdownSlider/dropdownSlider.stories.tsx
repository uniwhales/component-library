import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { Column } from '../../atoms/common/flex';
import { CoinStandard } from '../../atoms/icons';
import { Text } from '../../atoms/texts/text';
import { DropdownSlider, SliderRef } from './minUsdSlider';
import { Bar, TextRow } from './styles';
import { MinUsdProps } from './types';

const meta: Meta<typeof DropdownSlider> = {
  component: DropdownSlider,
};

export default meta;
type Story = StoryObj<typeof DropdownSlider>;

const Template = (
  args: React.JSX.IntrinsicAttributes & MinUsdProps
  & React.RefAttributes<SliderRef>,
) => {
  const sliderEl = useRef<SliderRef>(null);
  const onApply = (val: string) => {
    console.log(`apply clicked ${val}`);
  };

  return (
    <Column>
      <Bar>
        <ButtonAtom buttonVariant="primary" onClick={() => { }}>test</ButtonAtom>
        <ButtonAtom buttonVariant="primary" onClick={() => { }}>test</ButtonAtom>
        <DropdownSlider
          {...args}
          ref={sliderEl}
          buttonText="Min.USD"
          buttonIcon={<CoinStandard />}
          buttonWidth="140px"
          description={(
            <TextRow>
              <Text size={['12-Regular']}>
                Set a
                {' '}
              </Text>
              <Text size={['12-Bold']}>
                min. value (USD)
                {' '}
              </Text>
              <Text size={['12-Regular']}>for transactions</Text>
            </TextRow>
          )}
          onApply={onApply}
        />
        <ButtonAtom buttonVariant="primary" onClick={() => { }}>test</ButtonAtom>
        <ButtonAtom buttonVariant="primary" onClick={() => { }}>test</ButtonAtom>
      </Bar>
      <Bar>
        <ButtonAtom buttonVariant="primary" onClick={() => { }}>test</ButtonAtom>
        <ButtonAtom buttonVariant="primary" onClick={() => { }}>test</ButtonAtom>
        {' '}
        <ButtonAtom buttonVariant="primary" onClick={() => { }}>test</ButtonAtom>
        <ButtonAtom buttonVariant="primary" onClick={() => { }}>test</ButtonAtom>
        {' '}
        <ButtonAtom buttonVariant="primary" onClick={() => { }}>test</ButtonAtom>
        <ButtonAtom buttonVariant="primary" onClick={() => sliderEl.current?.resetSlider()}>Clear slider</ButtonAtom>
      </Bar>
    </Column>
  );
};

export const DropdownSliderComponent: Story = {
  render: (args) => Template(args),
};
export const DropdownSliderWithScaleComponent: Story = {
  render: (args) => Template(args),
};

DropdownSliderComponent.args = {
  min: 0,
  max: 2500000,
};

DropdownSliderWithScaleComponent.args = {
  min: 0,
  max: 250000,
  useLogarithmic: true,
};

DropdownSliderComponent.parameters = {
  backgrounds: { default: 'dark' },
};
