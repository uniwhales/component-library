import { styled } from 'styled-components';

export const CardDateContainer = styled.div<{ size?: 'S' | 'L' }>`
    background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
    border-radius: 12px;
    width: fit-content;
    height: ${({ size }) => (size === 'S' ? '34px' : '48px')};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 0 8px;
`;
