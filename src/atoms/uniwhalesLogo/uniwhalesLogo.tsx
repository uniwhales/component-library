import React from 'react';
import { Styled } from '../../theme';
import { IconWrapper } from '../icons/iconWrapper';
import { UniWhalesColor, UniwhalesColor, UniwhalesStandard } from '../icons';

const Container = Styled.div<{ showText?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: ${({ showText }) => (showText ? 'flex-start' : 'center')};
  cursor: pointer;
`;

type Props = {
  showText?: boolean
  onClick?: () => void,
  night?: boolean
};

export const UniWhalesLogo = ({
  showText, onClick, night,
}: Props) => {
  const logoSize = showText ? '33px' : '44px';

  return (
    <Container showText={showText} onClick={onClick}>
      <IconWrapper height={logoSize} width={logoSize} icon={<UniWhalesColor />} />
      {showText && <IconWrapper width="92px" icon={night ? <UniwhalesStandard /> : <UniwhalesColor />} />}
    </Container>
  );
};
