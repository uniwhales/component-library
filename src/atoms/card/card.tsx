import { css } from 'styled-components';
import { Styled } from '../../theme';
import { CardProps } from './types';

export const Card = Styled.div<CardProps>`
  padding: ${({ padding }) => padding ?? '24px'};
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  border-radius: 12px;
  height: ${({ height }) => height};
  ${(props) => {
    const { noHover } = props;
    return !noHover && css`
      cursor: pointer;
      :hover {
        filter: brightness(1.2);
      }
  `;
  }}
`;
