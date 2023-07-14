import { css, styled } from 'styled-components';
import { CardProps } from './types';
import Box from '../box/box';
import { Theme } from '../../theme';

const Card = styled(Box)<CardProps>`
  ${(props) => {
    const { noHover } = props;
    return !noHover && css`
      cursor: pointer;
      &:hover {
        filter: brightness(1.2);
      }
  `;
  }}
`;

Card.displayName = 'Card';
Card.defaultProps = {
  background: Theme.colors.SHADE_PLUS_3,
  padding: '24px',
  borderRadius: '12px',
};

export { Card };
