import { Styled } from '../../theme';
import { IdenticonProps } from './types';

export const Container = Styled.div<Pick<IdenticonProps, 'hasInteraction' | 'size'>>`
  height: ${({ size }) => (size === 'big' ? '36px' : size === 'small' ? '24px' : '18px')};
  width: ${({ size }) => (size === 'big' ? '36px' : size === 'small' ? '24px' : '18px')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: ${({ hasInteraction }) => hasInteraction && 'pointer'};
  background: ${({ theme, size }) => (size === 'small' ? null : theme.containerAndCardShades.SHADE_PLUS_3)};
  border: 1px solid transparent;
  &:hover {
    border: ${({ hasInteraction, theme }) => hasInteraction && `2px solid ${theme.colors.primary.MAIN_BLUE}`};
  };
`;

export const SelectableIdenticonWrapper = Styled.div`
  gap: 8px;
  align-items: center;
  display: contents;
`;
