import React from 'react';
import { Styled } from '../../theme';
import { CopyToClipBoard } from '../../molecules/copyToClipBoard/copyToClipBoard';
import { Select } from '../../atoms/inputs/select';
import { Text } from '../../atoms/texts/text';
import { ButtonAtom, ButtonVariant } from '../../atoms/buttons/button';
import { ToggleAtom } from '../../atoms/toggles/toggle__standart';

export interface WalletAlertsTableProps {
  label?: string;
  wallet: string;
  isActive: boolean;
  setIsActive: (wallet:number, status:boolean) => any;
  chains: any;
  editWallet: () => {};
  removeWallet: () => {};
  id: number;
  isLoading: boolean;
}
const Wrapper = Styled.div<{ isLoading: boolean }>`
  position: relative;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_3};
  border-radius: 12px;
  opacity: ${(props) => (props.isLoading ? '0.5' : 1)};
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
const Overlay = Styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
`;

export const WalletAlertsTable = ({
  id, label, wallet, chains, isActive, setIsActive, editWallet, removeWallet, isLoading,
}:WalletAlertsTableProps) => (
  <Wrapper isLoading={isLoading}>
    {isLoading && <Overlay />}
    <Section>
      {label && <Text size="S-Regular">{label}</Text>}
      <CopyToClipBoard text={wallet} />
    </Section>
    <Section>
      <Group>
        <ToggleAtom
          label={isActive ? 'On' : 'Off'}
          isOn={isActive}
          onClick={() => setIsActive(id, isActive)}
        />
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
        <ButtonAtom
          icon="remove"
          onClick={removeWallet}
          buttonVariant={ButtonVariant.TERTIARY}
        >
          Remove
        </ButtonAtom>
      </ButtonGroup>
    </Section>
  </Wrapper>
);
