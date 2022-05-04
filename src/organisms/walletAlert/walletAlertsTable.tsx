import React from 'react';
import { Styled } from '../../theme';
import { CopyToClipBoard } from '../../molecules/copyToClipBoard/copyToClipBoard';
import { Select } from '../../atoms/inputs/select';
import { Text } from '../../atoms/texts/text';
import { ButtonVariant, ButtonAtom } from '../../atoms/buttons/button';
import { ToggleAtom } from '../../atoms/toggles/toggle__standart';

export interface WalletAlertsTableProps {
  label?: string;
  wallet: string;
  isActive: boolean;
  setIsActive: () => {};
  chains: any;
  editWallet: () => {};
  removeWallet: () => {};
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
  label, wallet, chains, isActive, setIsActive, editWallet, removeWallet,
}:WalletAlertsTableProps) => (
  <Wrapper>
    <Section>
      {label && <Text size="S-Regular">{label}</Text>}
      <CopyToClipBoard text={wallet} />
    </Section>
    <Section>
      <Group>
        <ToggleAtom label={isActive ? 'On' : 'Off'} isOn={isActive} onClick={setIsActive} />
      </Group>
    </Section>
    <Section>
      <Group>
        <Select readOnly options={chains} />
      </Group>
    </Section>
    <Section>
      <ButtonGroup>
        <ButtonAtom icon="edit" onClick={editWallet} buttonVariant={ButtonVariant.SECONDARY}>Edit</ButtonAtom>
        <ButtonAtom icon="remove" onClick={removeWallet} buttonVariant={ButtonVariant.TERTIARY}>Remove</ButtonAtom>
      </ButtonGroup>
    </Section>
  </Wrapper>
);
