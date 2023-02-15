import { Styled } from '../../theme';

export const Column = Styled.div<{ gap?: string }>`
    display: flex;
    flex-direction: column;
    gap: ${({ gap }) => gap || '0px'}
`;

export const Row = Styled.div<{ gap?: string }>`
    display: flex;
    gap: ${({ gap }) => gap || '0px'}
`;
