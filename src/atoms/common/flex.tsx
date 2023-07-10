import { styled } from 'styled-components';
import { FlexProps, compose, flex } from 'styled-system';
import Box from '../box/box';

export const Column = styled(compose(Box, flex))<FlexProps>`
    display: flex;
    flex-direction: column;
`;

export const Row = styled(compose(Box, flex))<FlexProps>`
    display: flex;
`;
