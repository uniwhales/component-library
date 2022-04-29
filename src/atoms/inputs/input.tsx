import React, { useState } from 'react';
import { css } from 'styled-components';
import { Styled } from '../../theme';

export interface Props {
  type: 'text' | 'number';
  placeholder?: string;
}
const InputWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
const BorderWrapper = Styled.div`
  border-radius: 12px;
  padding: 1px;
  box-sizing: border-box;
  ${({ focus }) => focus && css`
    background: ${(props) => props.theme.gradients.primary.BLURPLE};
  `}
`;
const InputLabel = Styled.label``;
const InputUserMessage = Styled.p``;
const InputStyled = Styled.input`
  outline: none;
  width: 398px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.neutral.SHADE_4};
  height: 48px;
  border-radius: 12px;
  padding: 12px 24px;
  z-index: 1;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.neutral.SHADE_INPUT};
  background: ${(props) => props.theme.colors.neutral.SHADE_INPUT};
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.colors.neutral.SHADE_INPUT_2};
  }
  :hover {
    ${({ focus }) => !focus && css`
      border: 1px solid ${(props) => props.theme.colors.primary.UWL_BLUE};
  `}
  }
`;
export const Input = ({ type, placeholder }:Props) => {
  const [focus, setFocus] = useState(false);
  return (
    <InputWrapper>
      <InputLabel />
      <BorderWrapper focus={focus}>
        <InputStyled focus={focus} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} placeholder={placeholder || 'Placeholder'} type={type} />
      </BorderWrapper>
      <InputUserMessage />
    </InputWrapper>
  );
};
