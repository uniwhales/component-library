import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useRef } from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { Column } from '../../atoms/common/flex';
import { CoinStandard } from '../../atoms/icons';
import { Text } from '../../atoms/texts/text';
import { DropdownSlider, SliderRef } from './minUsdSlider';
import { Bar, TextRow } from './styles';

export default {
  title: 'Organisms/DropdownSlider',
  component: DropdownSlider,
  argTypes: {},
} as ComponentMeta<typeof DropdownSlider>;

const Template: ComponentStory<typeof DropdownSlider> = (args, { globals }) => {
  const sliderEl = useRef<SliderRef>(null);
  const isDark = globals.backgrounds?.value === '#191B20';

  const onApply = (val: string) => {
    console.log(`apply clicked ${val}`);
  };

  return (
    <Column>
      <Bar>
        <ButtonAtom buttonVariant="primary" onClick={() => { }}>test</ButtonAtom>
        <ButtonAtom buttonVariant="primary" onClick={() => { }}>test</ButtonAtom>
        <DropdownSlider
          ref={sliderEl}
          min={0}
          max={1000000}
          buttonText="Min.USD"
          buttonIcon={<CoinStandard />}
          buttonWidth="140px"
          description={(
            <TextRow>
              <Text color={isDark ? '#B4B5C6' : '#70717C'} size="12-Regular">
                Set a
                {' '}
              </Text>
              <Text size="12-Bold" color={isDark ? '#B4B5C6' : '#70717C'}>
                min. value (USD)
                {' '}
              </Text>
              <Text size="12-Regular" color={isDark ? '#B4B5C6' : '#70717C'}>for transactions</Text>
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

export const DropdownSliderComponent = Template.bind({});

DropdownSliderComponent.parameters = {
  backgrounds: { default: 'dark' },
};
