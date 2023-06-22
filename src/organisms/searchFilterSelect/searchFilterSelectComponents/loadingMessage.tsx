import React, { } from 'react';
import {
  components,
} from 'react-select';
import { styled } from 'styled-components';
import { Rotate } from '../../../atoms/animations/rotate';
import { RefreshIcon } from '../../../atoms/icons';
import { IconWrapper } from '../../../atoms/icons/iconWrapper';
import { Text } from '../../../atoms/texts/text';

const LoadingMessageContainer = styled(components.LoadingMessage)`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height:48px;
  color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
`;

export const LoadingMessage = (props: any) => {
  const { theme } = props;
  return (
    <LoadingMessageContainer {...props}>
      <Rotate>
        <IconWrapper fill={theme.textShades.SHADE_MINUS_2} icon={<RefreshIcon />} />
      </Rotate>
      <Text size="14-Regular">Loading Data</Text>
    </LoadingMessageContainer>
  );
};
