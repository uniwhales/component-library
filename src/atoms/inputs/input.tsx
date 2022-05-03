import React, { useState } from 'react';
import { css } from 'styled-components';
import { Styled } from '../../theme';

export interface InputsProps {
  type: 'text' | 'number';
  placeholder?: string;
  value?:string;
  onChange: any;
  label?:string;
}
const InputWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
const BorderWrapper = Styled.div<{ focus: boolean }>`
  border-radius: 12px;
  padding: 1px;
  box-sizing: border-box;
  ${({ focus }) => focus && css`
    background: ${(props) => props.theme.gradients.primary.BLURPLE};
  `}
`;
const InputUserMessage = Styled.p``;
const InputStyled = Styled.input<{ focus: boolean }>`
  outline: none;
  width: 398px;
  cursor: pointer;
  color: ${(props) => props.theme.textShades.SHADE_2};
  height: 48px;
  border-radius: 12px;
  padding: 12px 24px;
  z-index: 1;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.containerAndCardShades.BG_SHADE_4};
  background: ${(props) => props.theme.containerAndCardShades.BG_SHADE_4};
  ::placeholder {
    color: ${(props) => props.theme.textShades.SHADE_1};
  }
  :focus  {
    color: ${(props) => props.theme.textShades.SHADE_3};
  }
  :hover {
    ::placeholder {
      color: ${(props) => props.theme.contrastColor.HIGH_CONTRAST};
    }
    color: ${(props) => props.theme.textShades.SHADE_3};
    ${({ focus }) => !focus && css`
      border: 1px solid ${(props) => props.theme.colors.primary.UWL_BLUE};
  `}
  }
`;
const InputLabel = Styled.label<{ focus: boolean, hover:boolean }>`
  font-size: 12px;
  color: ${(props) => props.theme.textShades.SHADE_1};
  font-weight: 700;
  line-height: 16px;
  ${({ hover }) => hover && css`
    color: ${(props) => props.theme.textShades.SHADE_3};
  `}
  ${({ focus }) => focus && css`
    color: ${(props) => props.theme.textShades.SHADE_3};
  `}
`;

export const Input = ({
  type, placeholder, value, onChange, label,
}:InputsProps) => {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <InputWrapper>
      {label && <InputLabel focus={focus} hover={hover}>{label}</InputLabel>}
      <BorderWrapper
        focus={focus}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <InputStyled focus={focus} value={value} onChange={(e) => onChange(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} placeholder={placeholder || 'Placeholder'} type={type} />
      </BorderWrapper>
      <InputUserMessage />
    </InputWrapper>
  );
};
