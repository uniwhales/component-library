import React from 'react';
import { Card } from '../../atoms/card/card';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Text } from '../../atoms/texts/text';
import { ContentWrapper } from './mobileRHSActionBar.styles';
import { MobileRHSActionBarProps } from './types';

type ChildProps = { elem: MobileRHSActionBarProps['left'], $noHover?: MobileRHSActionBarProps['$noHover'] };
const Child = ({ elem, $noHover }: ChildProps) => (
  typeof elem === 'string' ? <Text size="14-Regular">{elem}</Text> : <IconWrapper cursor={$noHover ? '' : 'pointer'} icon={elem} />);

export const MobileRHSActionBar = ({
  left, right, $noHover, $padding, height,
}: MobileRHSActionBarProps) => (
  <Card $noHover={$noHover} $padding={$padding} height={height}>
    <ContentWrapper>
      <Child elem={left} $noHover={$noHover} />
      <Child elem={right} $noHover={$noHover} />
    </ContentWrapper>
  </Card>
);
