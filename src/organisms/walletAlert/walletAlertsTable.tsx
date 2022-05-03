import React from 'react';
import { Styled } from '../../theme';
import { CopyToClipBoard } from '../../molecules/copyToClipBoard/copyToClipBoard';
import { colourOptions, Select } from '../../atoms/inputs/select';
import { Text } from '../../atoms/texts/text';
import { ButtonVariant, ButtonAtom } from '../../atoms/buttons/button';
import { ToggleAtom } from '../../atoms/toggles/toggle__standart';

export interface WalletAlertsTableProps {
  editAction: () => void;
  removeAction: () => void;
  toggle: boolean;
  setToggle: (e:string | number | boolean) => void;
}
const Wrapper = Styled.div`
  background: ${(props) => props.theme.containerAndCardShades.SHADE_3};
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
export const WalletAlertsTable = ({
  editAction, removeAction, toggle, setToggle,
}:WalletAlertsTableProps) => (
  <Wrapper>
    <Section>
      <Text size="S-Regular">Name of address User made (Label)</Text>
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
        <ButtonAtom icon="remove" onClick={removeAction} buttonVariant={ButtonVariant.TERTIARY}>Remove</ButtonAtom>
      </ButtonGroup>
    </Section>
  </Wrapper>
);
