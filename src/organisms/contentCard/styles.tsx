import { Styled } from '../../theme';
import { ContentCardProps, ContentType } from './types';

export const Card = Styled.div<{ size: ContentCardProps['size'], width?: string }>`
    border-radius: 12px;
    box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
    background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
    width: ${({ width }) => width ?? '100%'};
    height: ${({ size }) => (size === 'S' ? 321 : 420)}px;
    padding: 32px;
    cursor: pointer;

    :hover {
        background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_2};
    }
`;

export const CardHeader = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
`;

export const CardTitle = Styled.div`
    height: 48px;
`;

export const CardHeaderLeftSide = Styled.div`
    display: flex;
    gap: 8px;
`;

export const Spacer = Styled.div`
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.textShades.SHADE_MINUS_1};
    margin-bottom: 12px;
`;

export const ArticleCover = Styled.div<{ url: string, size: ContentCardProps['size'] }>`
    background: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
    height: ${({ size }) => (size === 'S' ? 176 : 197)}px;
    width: 100%;
    border-radius: 12px;
    margin: 12px auto;
`;

export const AboutSection = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const AboutSectionLeftSide = Styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;
export const MediaTypeIcon = Styled.div<{ contentType: ContentType, size: ContentCardProps['size'] }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    height: ${({ size }) => (size === 'S' ? 24 : 36)}px;
    width: ${({ size }) => (size === 'S' ? 24 : 36)}px;
    background-color: ${({ contentType, theme }) => {
    if (contentType === ContentType.Article) return theme.colors.secondary.TANGY;
    if (contentType === ContentType.Video) return theme.colors.secondary.PURPLE;
    return theme.colors.secondary.FUSCHIA;
  }};
`;

export const TagSection = Styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    gap: 10px;
`;
