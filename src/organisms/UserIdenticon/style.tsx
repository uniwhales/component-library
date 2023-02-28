import { Styled } from '../../theme';

export const UserIdenticonWrapper = Styled.div`
    position: fixed;
    top: 43px;
    right: 45px;
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: ${({ theme }) => theme.zIndex.USER_MENU};
`;
