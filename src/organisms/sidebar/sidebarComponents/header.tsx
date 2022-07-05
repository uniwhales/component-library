import React, { Dispatch, FC } from 'react';
import { ButtonAtom } from '../../../atoms/buttons/button';
import { ArrowLeftSquareIcon } from '../../../atoms/icons';
import { IconWrapper } from '../../../atoms/icons/iconWrapper';
import { UniWhalesLogo } from '../../../atoms/uniwhalesLogo/uniwhalesLogo';
import { Styled } from '../../../theme';

const Container = Styled.div`
  display: flex;
  
  grid-area: header;
  justify-items: center;
  padding: 24px 14px;
  height: 50px;
  svg {
    cursor: pointer;
  }
`;

export type SidebarHeaderProps = {
  expanded: boolean
  setExpanded: Dispatch<boolean>
  onLogoClick: () => void
};

export const SidebarHeader: FC<SidebarHeaderProps> = ({ expanded, setExpanded, onLogoClick }) => (
  <Container>
    <UniWhalesLogo onClick={onLogoClick} showText={expanded} />
    {expanded && (
      <ButtonAtom buttonVariant="secondary_action" onClick={() => setExpanded(!expanded)}>
        <IconWrapper icon={<ArrowLeftSquareIcon />} />
      </ButtonAtom>
    )}
  </Container>
);
