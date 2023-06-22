import { styled } from 'styled-components';

export const UserIdenticonWrapper = styled.div`
    position: fixed;
    top: 43px;
    right: 45px;
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
`;
