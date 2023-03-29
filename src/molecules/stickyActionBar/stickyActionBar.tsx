import React, {
  FC, useRef,
} from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Text } from '../../atoms/texts/text';
import { MobileRHSActionBarProps } from '../../organisms/actionBar/types';
import { useScreenEdge } from '../../utils/useScreenEdge';
import { ButtonWrapper, StickyActionBarWrapper } from './styles';
import { StickyActionBarProps } from './types';

type ChildProps = { elem: MobileRHSActionBarProps['left'], noHover?: MobileRHSActionBarProps['noHover'] };
const Child = ({ elem, noHover }: ChildProps) => (
  typeof elem === 'string' ? <Text size="14-Regular">{elem}</Text> : <IconWrapper cursor={noHover ? '' : 'pointer'} icon={elem} />);

export const StickyActionBar: FC<StickyActionBarProps> = ({
  icon, left, right, withTransform, index, cardProps, rootMargin = 24, mt,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isOnEdge = useScreenEdge({ rect: 'top', ref, rootMargin });

  return (
    <StickyActionBarWrapper
      {...cardProps}
      /* When we are on the edge do and we want to transform we are on mobile chance no hover */
      noHover={(isOnEdge && withTransform) || cardProps?.noHover}
      withTransform={withTransform}
      isOnEdge={isOnEdge}
      ref={ref}
    >
      {(!isOnEdge || !withTransform) && (
        <>
          {left && <Child elem={left} noHover />}
          {right && <Child elem={right} noHover />}
        </>
      )}
      {icon && withTransform && isOnEdge && (
      <ButtonWrapper isOnEdge={isOnEdge} index={index} mt={mt}>
        <ButtonAtom buttonVariant="secondary_action"><IconWrapper icon={icon} cursor="pointer" /></ButtonAtom>
      </ButtonWrapper>
      )}
    </StickyActionBarWrapper>
  );
};
