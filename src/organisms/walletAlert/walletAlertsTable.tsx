import React from 'react';
import { useTheme } from 'styled-components';
import { Styled } from '../../theme';
import { CopyToClipBoard } from '../../molecules/copyToClipBoard/copyToClipBoard';
import { Select } from '../../atoms/inputs/select';
import { Text } from '../../atoms/texts/text';
import { ButtonAtom } from '../../atoms/buttons/button';
import { ToggleAtom } from '../../atoms/toggles/toggle__standart';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { CrossIcon, EditStandard } from '../../atoms/icons';

export interface WalletAlertsTableProps {
  label?: string;
  wallet: string;
  isActive: boolean;
  setIsActive: (wallet: number, status: boolean) => any;
  chains: any;
  editWallet: (id: number) => void;
  removeWallet: (id: number) => void;
  id: number;
  isLoading: boolean;
}
const Wrapper = Styled.div<{ isLoading: boolean }>`
  position: relative;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  border-radius: 12px;
  opacity: ${(props) => (props.isLoading ? '0.5' : 1)};
  box-sizing: border-box;
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
`;
const Section = Styled.div<{ flex?: number }>`
  flex: ${(props) => props.flex || 1};
`;
const Group = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height:100%;
`;
const ButtonGroup = Styled.div`
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
  display: none;
  @media (min-width: 1920px) {
    display: flex;
  }
`;
const ButtonGroupMobile = Styled.div`
  display: none;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  @media (max-width: 1919px) {
    display: flex;
  }
  @media (max-width: 1024px) {
    display: flex;
    gap: 5px;
  }
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
  id,
  label,
  wallet,
  chains,
  isActive,
  setIsActive,
  editWallet,
  removeWallet,
  isLoading,
}: WalletAlertsTableProps) => {
  const theme: any = useTheme();
  return (
    <Wrapper isLoading={isLoading}>
      {isLoading && <Overlay />}
      <Section>
        {label && (
          <Text size="M-Bold" color={theme.textShades.SHADE_MINUS_2}>
            {label}
          </Text>
        )}
        <CopyToClipBoard walletCut id={id.toString()} text={wallet} />
      </Section>
      <Section>
        <Group>
          <ToggleAtom
            size="small"
            label={isActive ? 'On' : 'Off'}
            isOn={isActive}
            onClick={() => setIsActive(id, isActive)}
          />
        </Group>
      </Section>
      <Section flex={1}>
        <Group>
          <Select readOnly placeholder="Alert Filters" options={chains} />
        </Group>
      </Section>
      <Section flex={1}>
        <ButtonGroup>
          <ButtonAtom onClick={() => editWallet(id)} buttonVariant="secondary">
            <>
              <IconWrapper icon={<EditStandard />} />
              Edit
            </>
          </ButtonAtom>
          <ButtonAtom onClick={() => removeWallet(id)} buttonVariant="tertiary">
            <>
              <IconWrapper icon={<CrossIcon />} />
              Remove
            </>
          </ButtonAtom>
        </ButtonGroup>
        <ButtonGroupMobile>
          <ButtonAtom onClick={() => editWallet(id)} buttonVariant="secondary">
            <>
              <IconWrapper icon={<EditStandard />} />
              Edit
            </>
          </ButtonAtom>
          <ButtonAtom
            onClick={() => removeWallet(id)}
            buttonVariant="secondary_action"
          >
            <IconWrapper icon={<CrossIcon />} />
          </ButtonAtom>
        </ButtonGroupMobile>
      </Section>
    </Wrapper>
  );
};
