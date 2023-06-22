import { CSSProperties } from 'react';
import { styled } from 'styled-components';

export type FlexProps = Pick<CSSProperties, 'justifyContent' | 'alignItems' | 'justifyItems' | 'gap' | 'flex' >;

export const Column = styled.div<FlexProps>`
    display: flex;
    flex-direction: column;
    ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent}` : '')};
    ${({ alignItems }) => (alignItems ? `align-items: ${alignItems}` : '')};
    ${({ justifyItems }) => (justifyItems ? `justify-items: ${justifyItems}` : '')};
    gap: ${({ gap }) => gap || '0px'};
    flex: ${({ flex }) => flex && flex};
`;

export const Row = styled.div<FlexProps>`
    display: flex;
    ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent}` : '')};
    ${({ alignItems }) => (alignItems ? `align-items: ${alignItems}` : '')};
    ${({ justifyItems }) => (justifyItems ? `justify-items: ${justifyItems}` : '')};
    gap: ${({ gap }) => gap || '0px'};
    flex: ${({ flex }) => flex && flex};
`;
