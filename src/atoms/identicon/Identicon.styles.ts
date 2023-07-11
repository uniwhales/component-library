import styled from 'styled-components';
import { IdenticonProps } from './types';

export const IdenticonWrapper = styled.div<Pick<IdenticonProps, 'hasInteraction' | 'size'>>`
  display: flex;
  flex-wrap: wrap;
  height: ${({ size }) => (size === 'big' ? '36px' : '24px')};
  width: ${({ size }) => (size === 'big' ? '36px' : '24px')};
  box-sizing: border-box;
  cursor: ${({ hasInteraction }) => hasInteraction && 'pointer'};
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid transparent;
  &:hover {
    border: ${({ hasInteraction, theme }) => hasInteraction && `2px solid ${theme.colors.primary.MAIN_BLUE}`};
  };
`;

export const IdenticonBlock = styled.div<Pick<IdenticonProps, 'size'>>`
  width: ${({ size }) => (size === 'big' ? '8px' : '5px')};
  height: ${({ size }) => (size === 'big' ? '8px' : '5px')};
  background: linear-gradient(0deg, rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5)), ${(props) => props.color};
`;
