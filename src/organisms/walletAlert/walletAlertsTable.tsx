import React, { useState } from 'react';
import { Styled } from '../../theme';
import { Text } from '../../atoms/texts/text';
import { CopyToClipBoard } from '../../molecules/copyToClipBoard/copyToClipBoard';
import { ToggleAtom } from '../../atoms/toggles/toggle__standart';
import { colourOptions, Select } from '../../atoms/inputs/select';
import { ButtonAtom, ButtonVariant } from '../../atoms/buttons/button';

export interface Props {

}
const Wrapper = Styled.div`
  background: ${(props) => props.theme.colors.neutral.SHADE_3};
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  height: 80px;
  width: 1205px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
`;
const Section = Styled.div`
  //border: 1px solid yellow;
  flex: 1;
`;
const Group = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height:100%;
`;
const ButtonGroup = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;
export const WalletAlertsTable = ({}:Props) => {
  const editAction = () => {
    console.log('edit');
  };
  const removeAction = () => {
    console.log('remove');
  };
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <Wrapper>
      <Section>
        <Text size="M-Regular">Name of address User made (Label)</Text>
        <CopyToClipBoard text="0x999....dddeb55f27" />
      </Section>
      <Section>
        <Group>
          <ToggleAtom label={toggle ? 'On' : 'Off'} isOn={toggle} onClick={() => setToggle(!toggle)} />
        </Group>
      </Section>
      <Section>
        <Group>
          <Select options={colourOptions} />
        </Group>
      </Section>
      <Section>
        <ButtonGroup>
          <ButtonAtom icon="edit" onClick={editAction} buttonVariant={ButtonVariant.SECONDARY}>Edit</ButtonAtom>
          {/* eslint-disable-next-line max-len */}
          <ButtonAtom icon="remove" onClick={removeAction} buttonVariant={ButtonVariant.TERTIARY}>Remove</ButtonAtom>
        </ButtonGroup>
      </Section>
    </Wrapper>
  );
};
