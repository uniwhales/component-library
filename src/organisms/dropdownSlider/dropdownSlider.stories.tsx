import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { Column } from '../../atoms/common/flex';
import { CoinStandard } from '../../atoms/icons';
import { Text } from '../../atoms/texts/text';
import { DropdownSlider } from './minUsdSlider';
import { Bar, TextRow } from './styles';

export default {
  title: 'Organisms/DropdownSlider',
  component: DropdownSlider,
  argTypes: {},
} as ComponentMeta<typeof DropdownSlider>;

const Template: ComponentStory<typeof DropdownSlider> = (args, { globals }) => {
  const isDark = globals.backgrounds?.value === '#191B20';
  const [val, setVal] = useState('0');

  return (
    <Column>
      <Bar>
        <ButtonAtom buttonVariant="primary" onClick={() => { }}>test</ButtonAtom>
        <ButtonAtom buttonVariant="primary" onClick={() => { }}>test</ButtonAtom>
        <DropdownSlider
          min={0}
          max={1000000}
          buttonText="Min.USD"
          buttonIcon={<CoinStandard />}
          sliderValue={val}
          setSliderValue={setVal}
          description={(
            <TextRow>
              <Text color={isDark ? '#B4B5C6' : '#70717C'} size="Caption-Regular">
                Set a
                {' '}
              </Text>
              <Text size="Caption-Bold" color={isDark ? '#B4B5C6' : '#70717C'}>
                min. value (USD)
                {' '}
              </Text>
              <Text size="Caption-Regular" color={isDark ? '#B4B5C6' : '#70717C'}>for transactions</Text>
            </TextRow>
        )}
          onApply={(value) => console.debug('apply clicked', value)}
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
        <ButtonAtom buttonVariant="primary" onClick={() => setVal('0')}>Clear slider</ButtonAtom>
      </Bar>
    </Column>
  );
};

export const DropdownSliderComponent = Template.bind({});

DropdownSliderComponent.parameters = {
  backgrounds: { default: 'dark' },
};
