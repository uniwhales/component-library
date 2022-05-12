import React, { } from 'react';
import {
  components,
} from 'react-select';
import { Text } from '../../../atoms/texts/text';
import { SwitcherAtom } from '../../../atoms/toggles/switcher';
import { Styled } from '../../../theme';

const ControlHeaderContainer = Styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 280px;
  height: 30px;
`;

export const Control = (props: any) => {
  const {
    selectProps, isDisabled, theme,
  } = props;
  const { onSwitch, isContractSearch, label } = selectProps;

  return (
    <>
      <ControlHeaderContainer>
        <Text color={theme.textShades.SHADE_MINUS_1} size="S-Bold">
          {`${label}  |`}
        </Text>
        <Text size={!isContractSearch ? 'S-Regular' : 'S-Bold'}>Token</Text>
        <SwitcherAtom
          disabled={isDisabled}
          isOn={!isContractSearch}
          onClick={() => onSwitch && onSwitch()}
        />
        <Text size={isContractSearch ? 'S-Regular' : 'S-Bold'}>Contract Address</Text>
      </ControlHeaderContainer>
      <components.Control {...props} />
    </>
  );
};
