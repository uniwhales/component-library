import React, { Dispatch, FC } from 'react';
import { ArrowLeftSquareIcon } from '../../../atoms/icons';
import { IconWrapper } from '../../../atoms/icons/iconWrapper';
import { UniWhalesLogo } from '../../../atoms/uniwhalesLogo/uniwhalesLogo';
import { Styled } from '../../../theme';

const Container = Styled.div`
  display: flex;
  column-gap: 10px;
  
  grid-area: header;
  justify-items: center;
  padding: 24px 14px;

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
  <Container onClick={onLogoClick}>
    <UniWhalesLogo showText={expanded} />
    {expanded && (
      <IconWrapper
        onClick={() => setExpanded(!expanded)}
        icon={<ArrowLeftSquareIcon />}
      />
    )}
  </Container>
);
