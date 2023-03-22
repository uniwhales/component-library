import React, { ChangeEvent, Ref, useState } from 'react';
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
  inputState?: InputState;
  width?: string;
  onEnterSubmit?: () => void;
  required?: boolean
  ref?: Ref<HTMLInputElement>
  tabIndex?: number
}
const InputWrapper = Styled.div<{ width?: string, disabled:boolean, inputState: InputState }>`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4px;
  p{
    margin: 0;
  }
  :hover {
    input {
      ::placeholder {
        color: ${({ theme, disabled, inputState }) => !disabled && inputState.status === 'default' && theme.textShades.SHADE_MINUS_3};
      }
      color: ${({ theme, disabled, inputState }) => !disabled && inputState.status === 'default' && theme.textShades.SHADE_MINUS_3};
      }
      svg {
      fill: ${({ theme, disabled, inputState }) => !disabled && inputState.status === 'default' && theme.textShades.SHADE_MINUS_3};
    }
    label {
      color: ${({ theme, disabled, inputState }) => !disabled && inputState.status === 'default' && theme.textShades.SHADE_MINUS_3};
    }
  }
`;

export const getBorderColor = (theme: typeof Theme, status: InputState['status']) => {
  const lookup = {
    error: theme.colors.system.RED,
    invalid: theme.colors.system.RED,
    exception: theme.colors.system.AMBER,
    disabled: theme.containerAndCardShades.SHADE_PLUS_3,
    help: theme.colors.secondary.FUSCIA,
  };
  if (status === 'error' || status === 'invalid' || status === 'exception' || status === 'disabled' || status === 'help') {
    return lookup[status];
  }
  return theme.textShades.SHADE_MINUS_1;
};
const InputStyled = Styled.input<{ disabled?: boolean, withIcon: boolean, inputState: InputState }>`
  outline: none;
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  height: 40px;
  line-height:24px;
  padding: ${({ withIcon, inputState }) => (withIcon || inputState.status === 'invalid' ? '8px 24px 8px 38px' : '8px 24px')};
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  box-sizing: border-box;
  border-radius: 12px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.containerAndCardShades.BG_SHADE_PLUS_4};
  ::placeholder {
    color: ${(props) => !props.disabled && props.theme.textShades.SHADE_MINUS_1};
  }
  :focus  {
    color: ${(props) => !props.disabled && props.theme.textShades.SHADE_MINUS_3};
  }
`;
export const InputLabel = Styled.label`
  font-size: 12px;
  color: ${(props) => props.theme.textShades.SHADE_MINUS_2};
  font-weight: 400;
  line-height: 16px;
`;

export const InputContainer = Styled.div<{ inputState: InputState, focus: boolean, disabled?: boolean }>`
  position: relative;
  border-radius: 12px;
  box-sizing: border-box;
  ${({ focus, disabled }) => focus && !disabled && css`
    outline: 1px solid ${({ theme }) => theme.colors.primary.MAIN_BLUE};
  `}
  &:hover {
    outline: 1px solid ${({ theme, disabled, inputState }) => (!disabled && inputState.status === 'default' ? theme.textShades.SHADE_MINUS_2 : getBorderColor(theme, inputState.status))};
  }
  outline: 1px solid ${({ theme, inputState }) => getBorderColor(theme, inputState.status)};
`;

const LeftSideIcon = Styled.div`
  position:absolute;
  left: 0;
  top:0;
  padding:9px 9px;
 `;
const RightSideIcon = Styled.div`
  position: absolute;
  right: 0;
  top:0;
  padding:9px 9px;
   svg {
      fill: ${({ theme }) => theme.textShades.SHADE_MINUS_1};
  }
 `;

const MoreDetailContainer = Styled.div<{ inputState: InputState }>`
  position: absolute;
  left: ${({ inputState }) => inputState.status === 'invalid' && 0};
  right: ${({ inputState }) => inputState.status !== 'invalid' && 0};
  margin: 8px;
`;

const Required = Styled.span`
  color: ${({ theme }) => theme.colors.system.RED};
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
  width,

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
  inputState = { message: '', status: 'default' },
  width,
  onEnterSubmit,
  required,
  ref,
  tabIndex,
}: InputsProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const theme = localTheme();

  const getMoreDetailsTextColor = (status: InputState['status']) => {
    const lookup = {
      valid: theme.colors.system.GREEN,
      exception: theme.colors.system.AMBER,
      help: theme.colors.secondary.FUSCIA,
    };
    if (status === 'exception' || status === 'help' || status === 'valid') {
      return lookup[status];
    }
    return theme.colors.system.RED;
  };

  const moreDetailsContainer = (inputState.status === 'valid' || inputState.status === 'invalid' || inputState.status === 'help' || inputState.status === 'exception' || inputState.status === 'error') && (
  <MoreDetailContainer
    inputState={inputState}
  >
    <Text
      color={getMoreDetailsTextColor(inputState.status)}
      size="Caption-Regular"
    >
      {inputState.message}
    </Text>
  </MoreDetailContainer>
  );
  return (
    <InputWrapper inputState={inputState} ref={ref} width={width} disabled={!!disabled}>
      {label && (
      <InputLabel>
        {label}
        {required && (<Required>*</Required>)}
      </InputLabel>
      )}
      <InputContainer
        inputState={inputState}
        disabled={disabled}
        focus={focus}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <LeftSideIcon>
          {!!icon && inputState.status !== 'invalid' && (<IconWrapper height="20px" width="20px" fill={hover ? theme.textShades.SHADE_MINUS_3 : theme.textShades.SHADE_MINUS_1} icon={icon} />)}
          {inputState.status === 'invalid' && !focus && (<IconWrapper height="20px" width="20px" icon={<RedCross />} />)}
        </LeftSideIcon>
        <InputStyled
          inputState={inputState}
          min={min}
          disabled={disabled}
          value={value}
          onChange={(e) => {
            if (pattern && !InputPatterns[pattern].test(e.target.value)) return;
            onChange(e);
          }}
          onKeyDown={(e) => {
            if (onEnterSubmit && e.key === 'Enter') {
              onEnterSubmit();
            }
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder || 'Placeholder'}
          type={type}
          withIcon={!!icon}
          tabIndex={tabIndex}
        />
        {inputState.status === 'valid' && <RightSideIcon><IconWrapper height="20px" width="20px" icon={<SelectedCheck />} /></RightSideIcon>}
        {!focus && moreDetailsContainer}
      </InputContainer>
    </InputWrapper>
  );
};
