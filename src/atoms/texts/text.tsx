import React, { FC } from 'react';
import { StyledA, StyledHeading, StyledP } from './text.styles';
import { TextProps } from './types';

export const Text: FC<TextProps> = ({
  children, size = '14-Regular', color, textDecoration, href, target, hyperLinkVariation, disabled,
}) => {
  const [textType, textWeight] = size.split('-');
  if (href) {
    return (
      <StyledA
        hyperLinkVariation={hyperLinkVariation}
        textType={textType}
        textWeight={textWeight}
        href={href}
        target={target}
        textDecoration={textDecoration}
        color={color}
        disabled={disabled}
      >
        {children}
      </StyledA>
    );
  }
  if ((['8', '9', '10', '11', '12', '14', '16'].includes(textType))) {
    return (
      <StyledP
        textDecoration={textDecoration}
        textType={textType}
        color={color}
        textWeight={textWeight}
      >
        {children}
      </StyledP>
    );
  }
  if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(textType)) {
    return (
      <StyledHeading
        textDecoration={textDecoration}
        color={color}
        as={textType.toLowerCase() as never}
        textType={textType}
        textWeight={textWeight}
      >
        {children}
      </StyledHeading>
    );
  }
  return null;
};
