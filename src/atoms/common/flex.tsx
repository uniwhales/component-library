import { styled } from 'styled-components';
import { FlexProps } from 'styled-system';
import Box from '../box/box';

export const Column = styled(Box)<FlexProps>`
    display: flex;
    flex-direction: column;
`;

export const Row = styled(Box)<FlexProps>`
    display: flex;
`;
