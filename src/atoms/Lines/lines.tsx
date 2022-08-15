import { Styled } from '../../theme';

export const Line = Styled.div<{ vertical?: boolean, length?: string }>`
    width: ${({ vertical, length }) => (vertical ? '1px' : (length ?? '100%'))};
    height: ${({ vertical, length }) => (vertical ? (length ?? '100%') : '1px')};
    background-color: ${({ theme }) => theme.textShades.SHADE_MINUS_1};
`;
