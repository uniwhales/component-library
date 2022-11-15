import React, { ChangeEvent, useState } from 'react';
import { css } from 'styled-components';
import { localTheme, Styled, Theme } from '../../theme';
import { RedCross, SelectedCheck } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { Text } from '../texts/text';

const InputPatterns = {
  number: /^-?\d*\.?\d*$/,
  int: /^[0-9]*$/,
  nan: /^([^0-9]*)$/,
};

export interface InputState {
  status: 'default' | 'disabled' | 'error' | 'invalid' | 'valid' | 'exception' | 'help'
  message: string;
}

export interface InputsProps {
  type: 'text' | 'number' | 'tel';
  placeholder?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  min?: string;
  icon?: JSX.Element;
  pattern?: keyof typeof InputPatterns
  inputState: InputState;
}
const InputWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2px;
  p{
    margin: 0;
  }
`;

const getBackgroundColor = (theme: typeof Theme, status:string) => {
  const lookup = {
    error: theme.colors.system.RED,
    invalid: theme.colors.system.RED,
    exception: theme.colors.system.AMBER,
  };
  if (status === 'error' || status === 'invalid' || status === 'exception') {
    return lookup[status];
  }
  return theme.containerAndCardShades.BG_SHADE_PLUS_4;
};
const BorderWrapper = Styled.div<{ focus: boolean, disabled?: boolean, inputState:InputState }>`
  border-radius: 12px;
  padding: 1px;
  box-sizing: border-box;
  background: ${({ theme, inputState }) => getBackgroundColor(theme, inputState.status)};
  ${({ focus, disabled }) => focus && !disabled && css`
    background: ${(props) => props.theme.gradients.primary.MAIN_BLUE_GRADIENT};
  `}
`;
const InputStyled = Styled.input<{ focus: boolean, disabled?: boolean, withIcon: boolean, inputState:InputState }>`
  outline: none;
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.2' : 1)};
  color: ${(props) => props.theme.textShades.SHADE_MINUS_2};
  height: 40px;
  line-height:24px;
  border-radius: 12px;
  padding: ${({ withIcon, inputState }) => (withIcon || inputState.status === 'invalid' ? '8px 24px 8px 38px' : '8px 24px')};
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  box-sizing: border-box;
  border: 1px solid ${({ theme, inputState }) => (inputState.status === 'help' ? theme.colors.primary.MAIN_BLUE : theme.containerAndCardShades.BG_SHADE_PLUS_4)};
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
const InputLabel = Styled.label<{
  focus: boolean, hover: boolean, disabled?: boolean
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

export const InputContainer = Styled.div`
  position: relative;
`;

const LeftSideIcon = Styled.div`
  position:absolute;
  left: 0;
  top:0;
   svg {
      padding:9px 9px;
      fill: ${({ theme }) => theme.contrastColor.LOW_CONTRAST};
      height: 20px;
      width: 20px;
  }
  &:hover {
    svg {
      fill: ${({ theme }) => theme.contrastColor.HIGH_CONTRAST};
    }
  }
 `;
const RightSideIcon = Styled.div`
  position: absolute;
  right: 0;
  top:0;
   svg {
      padding:9px 9px;
      fill: ${({ theme }) => theme.contrastColor.LOW_CONTRAST};
      height: 20px;
      width: 20px;
  }
  &:hover {
    svg {
      fill: ${({ theme }) => theme.contrastColor.HIGH_CONTRAST};
    }
  }
 `;

const MoreDetailContainer = Styled.div<{ inputState:InputState }>`
  position: absolute;
  left: ${({ inputState }) => inputState.status === 'invalid' && 0};
  right: ${({ inputState }) => inputState.status !== 'invalid' && 0};
  margin: 8px;
`;

export /**
 * @Don't use number patterns with number type, use tel + any number pattern
 * @date 10/10/2022 - 9:52:23 AM
 *
 * @param {InputsProps} {
  type,
  placeholder,
  value,
  onChange,
  label,
  disabled,
  min,
  icon,
  pattern,
  inputState,
}
 * @returns {*}
 */
const Input = ({
  type,
  placeholder,
  value,
  onChange,
  label,
  disabled,
  min,
  icon,
  pattern,
  inputState,
}: InputsProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const theme = localTheme();
  return (
    <InputWrapper>
      {label && <InputLabel disabled={disabled} focus={focus} hover={hover}>{label}</InputLabel>}
      <BorderWrapper
        inputState={inputState}
        disabled={disabled}
        focus={focus}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <InputContainer>
          <LeftSideIcon>
            {!!icon && inputState.status !== 'invalid' && (<IconWrapper icon={icon} />)}
            {inputState.status === 'invalid' && !focus && (<IconWrapper icon={<RedCross />} />)}
          </LeftSideIcon>
          <InputStyled
            inputState={inputState}
            min={min}
            disabled={disabled}
            focus={focus}
            value={value}
            onChange={(e) => {
              if (pattern && !InputPatterns[pattern].test(e.target.value)) return;
              onChange(e);
            }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={placeholder || 'Placeholder'}
            type={type}
            withIcon={!!icon}
          />
          {inputState.status === 'valid' && <RightSideIcon><IconWrapper icon={<SelectedCheck />} /></RightSideIcon>}
          {!focus && (inputState.status === 'valid' || inputState.status === 'invalid' || inputState.status === 'help' || inputState.status === 'exception' || inputState.status === 'error') && (
          <MoreDetailContainer
            inputState={inputState}
          >
            <Text
              color={inputState.status === 'exception' ? theme.colors.system.AMBER
                : inputState.status === 'help' ? theme.colors.primary.MAIN_BLUE
                  : inputState.status === 'valid' ? theme.colors.system.GREEN
                    : theme.colors.system.RED}
              size="XS-Regular"
            >
              {inputState.message}
            </Text>
          </MoreDetailContainer>
          )}
        </InputContainer>
      </BorderWrapper>
    </InputWrapper>
  );
};
