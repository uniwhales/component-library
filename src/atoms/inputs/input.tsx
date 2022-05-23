import React, { useState } from 'react';
import { css } from 'styled-components';
import { Styled } from '../../theme';
import { Text } from '../texts/text';

export interface InputsProps {
  type: 'text' | 'number';
  placeholder?: string;
  value?:string;
  onChange: any;
  label?:string;
  disabled?:boolean;
  isError?:string;
  min?:string;
}
const InputWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 5px;
  p{
    margin: 0;
  }
`;
const BorderWrapper = Styled.div<{ focus: boolean, disabled?: boolean, isError?: string }>`
  border-radius: 12px;
  padding: 1px;
  box-sizing: border-box;
  background: ${(props) => props.isError && props.theme.colors.system.RED};
  ${({ focus, disabled, isError }) => focus && !disabled && !isError && css`
    background: ${(props) => props.theme.gradients.primary.BLURPLE};
  `}
`;
const InputUserMessage = Styled.div`
  p{
    color: ${(props) => props.theme.colors.system.RED};
  }
`;
const InputStyled = Styled.input<{ focus: boolean, disabled?: boolean, isError?:string }>`
  outline: none;
  width: 100%;
  cursor: ${(disabled) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(disabled) => (disabled ? '0.2' : 1)};
  color: ${(props) => props.theme.textShades.SHADE_MINUS_2};
  height: 48px;
  border-radius: 12px;
  padding: 12px 24px;
  z-index: 1;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.containerAndCardShades.BG_SHADE_PLUS_4};
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
    ${({ focus, disabled, isError }) => !focus && !disabled && !isError && css`
      border: 1px solid ${(props) => props.theme.colors.primary.UWL_BLUE};
  `}
  }
`;
const InputLabel = Styled.label<{ focus: boolean, hover:boolean, disabled?: boolean
}>`
  font-size: 12px;
  color: ${(props) => props.theme.textShades.SHADE_MINUS_1};
  font-weight: 700;
  line-height: 16px;
  ${({ hover, disabled }) => hover && !disabled && css`
    color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  `}
  ${({ focus, disabled }) => focus && !disabled && css`
    color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  `}
`;

export const Input = ({
  type, placeholder, value, onChange, label, disabled, isError, min,
}:InputsProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  return (
    <InputWrapper>
      {label && <InputLabel disabled={disabled} focus={focus} hover={hover}>{label}</InputLabel>}
      <BorderWrapper
        isError={isError}
        disabled={disabled}
        focus={focus}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <InputStyled
          min={min}
          isError={isError}
          disabled={disabled}
          focus={focus}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder || 'Placeholder'}
          type={type}
        />
      </BorderWrapper>
      {isError && (
      <InputUserMessage>
        <Text size="S-Regular">{isError}</Text>
      </InputUserMessage>
      )}
    </InputWrapper>
  );
};
