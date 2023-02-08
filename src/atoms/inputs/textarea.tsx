import React, { ChangeEvent, useState } from 'react';
import { css } from 'styled-components';
import { Styled } from '../../theme';
import {
  getBackgroundColor, InputLabel, InputState,
} from './input';

type TextAreaTypes = {
  disabled: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  label?: string;
  inputState?: InputState;
  placeholder?: string;
  maxLength?: number;
};
const BorderWrapper = Styled.div<{ focus: boolean, disabled?: boolean, inputState:InputState }>`
  border-radius: 12px;
  display: flex;
  padding: 1px;
  box-sizing: border-box;
  height: 100%;
  background: ${({ theme, inputState }) => getBackgroundColor(theme, inputState.status)};
  ${({ focus, disabled }) => focus && !disabled && css`
    background: ${(props) => props.theme.colors.primary.MAIN_BLUE};
  `}
`;
export const TextAreaComponent = Styled.textarea<{ focus: boolean, disabled?: boolean, inputState:InputState }>`
  font-family: Poppins,sans-serif;
  resize: none;
  outline: none;
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.2' : 1)};
  color: ${(props) => props.theme.textShades.SHADE_MINUS_2};
  border-radius: 12px;
  padding: ${({ inputState }) => (inputState.status === 'invalid' ? '8px 24px 8px 38px' : '8px 24px')};
  box-sizing: border-box;
  border: 1px solid ${({ theme, inputState }) => (inputState.status === 'help' ? theme.colors.primary.MAIN_BLUE : theme.textShades.SHADE_MINUS_1)};
  background: ${(props) => props.theme.containerAndCardShades.BG_SHADE_PLUS_4};
  ::placeholder {
    color: ${(props) => !props.disabled && props.theme.textShades.SHADE_MINUS_1};
  }
  :focus  {
    color: ${(props) => !props.disabled && props.theme.textShades.SHADE_MINUS_3};
  }
  :hover {
    ::placeholder {
      color: ${(props) => !props.disabled && props.theme.textShades.SHADE_MINUS_1};
    }
    color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
    ${({ focus, disabled }) => !focus && !disabled && css`
      border: 1px solid ${(props) => props.theme.textShades.SHADE_MINUS_1};
  `}
  }
`;
const TextAreaWrapper = Styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: stretch;
  gap: 2px;
  p{
    margin: 0;
  }
`;
export const TextArea = ({
  disabled, value, onChange, label = 'Label', inputState = { message: '', status: 'default' }, placeholder, maxLength,
}:TextAreaTypes) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  return (
    <TextAreaWrapper>
      {label && <InputLabel disabled={disabled} focus={focus} hover={hover}>{label}</InputLabel>}
      <BorderWrapper
        inputState={inputState}
        focus={focus}
        disabled={disabled}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <TextAreaComponent
          maxLength={maxLength}
          placeholder={placeholder}
          inputState={inputState}
          value={value}
          onChange={(e) => onChange(e)}
          focus={focus}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </BorderWrapper>
    </TextAreaWrapper>
  );
};
