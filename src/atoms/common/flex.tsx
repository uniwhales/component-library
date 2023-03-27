import { CSSProperties } from 'styled-components';
import { Styled } from '../../theme';

export type FlexProps = Pick<CSSProperties, 'justifyContent' | 'alignItems' | 'justifyItems' | 'gap' >;

export const Column = Styled.div<FlexProps>`
    display: flex;
    flex-direction: column;
    gap: ${({ gap }) => gap || '0px'}
`;

export const Row = Styled.div<FlexProps>`
    display: flex;
    gap: ${({ gap }) => gap || '0px'}
`;
