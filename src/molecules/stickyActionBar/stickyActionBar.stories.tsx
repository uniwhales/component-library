import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NewsStandard, SettingsBars } from '../../atoms/icons';
import { Checkbox } from '../../atoms/inputs/checkbox';
import { Select } from '../../atoms/inputs/select';
import { Text } from '../../atoms/texts/text';
import { groupTagOptions } from '../../organisms/navbar/mockData';
import { Styled } from '../../theme';
import { CheckboxSize } from '../../utils/getSize';
import { StickyActionBar } from './stickyActionBar';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  height: 200vh;
  gap: 15px;
  background-color: ${({ theme }) => theme.containerAndCardShades.NEUTRAL_SHADE_0};
`;

const Dummy = Styled.div`
  width: 100%;
  height: 400px;
  background-color: rgb(0, 0 ,0, 0.5);
`;

const FeedLeftSideChildren = Styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  gap: 24px;
  margin-left: 24px;
`;

export default {
  title: 'Molecules/StickyActionBar',
  component: StickyActionBar,
} as ComponentMeta<typeof StickyActionBar & { multi?: boolean }>;

const Template: ComponentStory<typeof StickyActionBar> = (args) => (
  <Wrapper>
    <Dummy />
    <StickyActionBar
      {...args}
      icon={<SettingsBars />}
      left={(
        <FeedLeftSideChildren>
          <Select
            selectOptions={groupTagOptions}
            placeholder="Select Group Tags"
            onSelectChange={() => {}}
            selectValue={groupTagOptions[0]}
            isXL
            readOnly={false}
            isMulti={false}
          />
          <Text href="TODO-ADD-LINK" size="S-Regular">
            <>
              Following:
              {' '}
              {1000}
            </>
          </Text>
        </FeedLeftSideChildren>
      )}
      right={(
        <Checkbox
          disabled={false}
          onClick={() => {}}
          selected
          size={CheckboxSize.Small}
        />
      )}
      withTransform
    />
    <Dummy />
    <StickyActionBar {...args} icon={<NewsStandard />} index={2} withTransform />
    <Dummy />
    <Dummy />
    <Dummy />
    <Dummy />
  </Wrapper>
);

export const Primary = Template.bind({});
