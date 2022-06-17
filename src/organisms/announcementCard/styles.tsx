import { Styled } from '../../theme';
import { AnnouncementCardProps } from './types';

export const AnnouncementCardContainer = Styled.div<Pick<AnnouncementCardProps, 'width'>>`
    background: ${({ theme }) => theme.containerAndCardShades.BG_SHADE_PLUS_4};
    box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
    width: ${({ width }) => width};
    border-radius: 12px;
    padding: 32px;
`;

export const Cover = Styled.div<Pick<AnnouncementCardProps, 'coverUrl'>>`
    background: ${({ coverUrl }) => `url(${coverUrl})`};
    height: 250px;
    margin-bottom: 20px;
    flex: 0 0 150px;
    border-radius: 8px;
    margin-right: 16px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const Content = Styled.div`
    display: flex;
    flex-direction: column;
`;

export const AnnouncementText = Styled.div`
    color: ${({ theme }) => theme.textShades.SHADE_MINUS_2};
    font-size: 14px;
`;
