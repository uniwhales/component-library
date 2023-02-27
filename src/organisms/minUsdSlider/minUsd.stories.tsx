import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { CoinStandard } from '../../atoms/icons';
import { Text } from '../../atoms/texts/text';
import { MinUsdSlider } from './minUsdSlider';
import { TextRow } from './styles';

export default {
  title: 'Organisms/MinUsdSlider',
  component: MinUsdSlider,
  argTypes: {},
} as ComponentMeta<typeof MinUsdSlider>;

const Template: ComponentStory<typeof MinUsdSlider> = (args, { globals }) => {
  // localtheme is undefined in stories, so just using this
  // to get light/dark to work properly
  const isDark = globals.backgrounds?.value === '#191B20';

  return (
    <MinUsdSlider
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

export const MinUsdSliderComponent = Template.bind({});

MinUsdSliderComponent.parameters = {
  backgrounds: { default: 'dark' },
};
