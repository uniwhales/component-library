import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { CoinStandard } from '../../atoms/icons';
import { Text } from '../../atoms/texts/text';
import { DropdownSlider } from './minUsdSlider';
import { TextRow } from './styles';

export default {
  title: 'Organisms/DropdownSlider',
  component: DropdownSlider,
  argTypes: {},
} as ComponentMeta<typeof DropdownSlider>;

const Template: ComponentStory<typeof DropdownSlider> = (args, { globals }) => {
  const isDark = globals.backgrounds?.value === '#191B20';

  return (
    <DropdownSlider
      min={0}
      max={1000000}
      buttonText="Min.USD"
      buttonIcon={<CoinStandard />}
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
  );
};

export const DropdownSliderComponent = Template.bind({});

DropdownSliderComponent.parameters = {
  backgrounds: { default: 'dark' },
};