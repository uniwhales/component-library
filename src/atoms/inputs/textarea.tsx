import React, { ChangeEvent, useState } from 'react';
import { css } from 'styled-components';
import { Styled } from '../../theme';

type TextAreaTypes = {
  disabled: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
};
export const TextAreaComponent = Styled.textarea<{ focus: boolean, disabled?: boolean }>`
  resize: none;
  width: 100%;
  height: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.2' : 1)};
  line-height:24px;
  border-radius: 12px;
  padding: 8px 24px;
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.containerAndCardShades.BG_SHADE_PLUS_4};
  background: ${(props) => props.theme.containerAndCardShades.BG_SHADE_PLUS_4};
  ::placeholder {
    color: ${(props) => !props.disabled && props.theme.textShades.SHADE_MINUS_1};
  }
  :focus  {
    color: ${(props) => !props.disabled && props.theme.textShades.SHADE_MINUS_3};
  }
  :hover {
    ::placeholder {
      color: ${(props) => !props.disabled && props.theme.contrastColor.HIGH_CONTRAST};
    }
    color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
    ${({ focus, disabled }) => !focus && !disabled && css`
      border: 1px solid ${(props) => props.theme.colors.primary.MANGO};
  `}
  }
`;
export const TextArea = ({ disabled, value, onChange }:TextAreaTypes) => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <TextAreaComponent
      value={value}
      onChange={(e) => onChange(e)}
      focus={focus}
      disabled={disabled}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  );
};
