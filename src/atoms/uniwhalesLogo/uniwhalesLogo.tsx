import React, { CSSProperties, MouseEventHandler } from 'react';
import { Styled } from '../../theme';
import { IconWrapper } from '../icons/iconWrapper';
import { UniWhalesColor, UniwhalesColor, UniwhalesStandard } from '../icons';

const Container = Styled.div<{ showText?: boolean, width: CSSProperties['width'] }>`
  width: ${({ width }) => width ?? '100%'};
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: ${({ showText }) => (showText ? 'flex-start' : 'center')};
  cursor: pointer;
`;

type Props = {
  showText?: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
  night?: boolean
  width?: string
  containerWidth?: CSSProperties['width']
};

export const UniWhalesLogo = ({
  showText, onClick, night, width, containerWidth,
}: Props) => {
  const logoSize = showText ? '33px' : '44px';

  return (
    <Container width={containerWidth} showText={showText} onClick={onClick}>
      <IconWrapper height={logoSize} width={logoSize} icon={<UniWhalesColor />} />
      {showText && <IconWrapper width={width ?? '92px'} icon={night ? <UniwhalesStandard /> : <UniwhalesColor />} />}
    </Container>
  );
};
