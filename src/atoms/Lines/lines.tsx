import { styled } from 'styled-components';

export const Line = styled.div<{ vertical?: boolean, length?: string }>`
    width: ${({ vertical, length }) => (vertical ? '1px' : (length ?? '100%'))};
    height: ${({ vertical, length }) => (vertical ? (length ?? '100%') : '1px')};
    background-color: ${({ theme }) => theme.colors.SHADE_MINUS_1};
`;
