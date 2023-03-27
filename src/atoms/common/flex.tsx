import { CSSProperties } from 'styled-components';
import { Styled } from '../../theme';

export type FlexProps = Pick<CSSProperties, 'justifyContent' | 'alignItems' | 'justifyItems' | 'gap' >;

export const Column = Styled.div<FlexProps>`
    display: flex;
    flex-direction: column;
    ${({ justifyContent }) => justifyContent ?? `justify-content: ${justifyContent}`};
    ${({ alignItems }) => alignItems ?? `align-items: ${alignItems}`};
    ${({ justifyItems }) => justifyItems ?? `justify-items: ${justifyItems}`};
    gap: ${({ gap }) => gap || '0px'}
`;

export const Row = Styled.div<FlexProps>`
    display: flex;
    ${({ justifyContent }) => justifyContent ?? `justify-content: ${justifyContent}`};
    ${({ alignItems }) => alignItems ?? `align-items: ${alignItems}`};
    ${({ justifyItems }) => justifyItems ?? `justify-items: ${justifyItems}`};
    gap: ${({ gap }) => gap || '0px'}
`;
