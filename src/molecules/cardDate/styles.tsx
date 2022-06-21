import { Styled } from '../../theme';

export const CardDateContainer = Styled.div`
    background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
    border-radius: 12px 12px 0px 0px;
    width: 252px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;
