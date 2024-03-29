import React, { ChangeEvent, Ref, useState } from 'react';
import { localTheme, Styled, Theme } from '../../theme';
import { RedCross, SelectedCheck } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { Text } from '../texts/text';
import { Required } from './select';

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
  required?: boolean;
  inputRef?: Ref<HTMLInputElement>;
  tabIndex?: number;
  maxLength?: number;
}
export const InputWrapper = Styled.div<{ width?: string, disabled: boolean, inputState: InputState }>`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4px;
  p{
    margin: 0;
  }
  :hover {
    input, textarea {
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
    help: theme.colors.secondary.FUSCIA,
  };
  if (status === 'error' || status === 'invalid' || status === 'exception' || status === 'help') {
    return lookup[status];
  }
  return theme.textShades.SHADE_MINUS_1;
};
const InputStyled = Styled.input<{ disabled?: boolean, withIcon: boolean, inputState: InputState }>`
  outline: none;
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ theme, disabled }) => (disabled ? theme.containerAndCardShades.SHADE_PLUS_1 : theme.textShades.SHADE_MINUS_2)};
  height: 40px;
  line-height:24px;
  padding: ${({ withIcon, inputState }) => (withIcon || inputState.status === 'invalid' ? '8px 24px 8px 38px' : '8px 24px')};
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  box-sizing: border-box;
  border-radius: 12px;
  border: none;
  background: ${({ theme, disabled }) => (disabled ? theme.containerAndCardShades.SHADE_PLUS_3 : theme.containerAndCardShades.BG_SHADE_PLUS_4)};
  ::placeholder {
    color: ${(props) => !props.disabled && props.theme.textShades.SHADE_MINUS_1};
  }
  :focus  {
    color: ${(props) => !props.disabled && props.theme.textShades.SHADE_MINUS_3};
  }
`;
export const InputLabel = Styled.label<{ disabled?: boolean }>`
  display: flex;
  gap: 5px;
  font-size: 12px;
  color: ${({ theme, disabled }) => (disabled ? theme.textShades.SHADE_MINUS_1 : theme.textShades.SHADE_MINUS_2)};
  font-weight: 400;
  line-height: 16px;
`;

export const InputContainer = Styled.div<{ inputState: InputState, focus: boolean, disabled?: boolean }>`
  position: relative;
  border-radius: 12px;
  box-sizing: border-box;
  &:hover {
    outline: 1.5px solid ${({ theme, disabled, inputState }) => (disabled ? theme.containerAndCardShades.BG_SHADE_PLUS_4 : !disabled && inputState.status === 'default' ? theme.textShades.SHADE_MINUS_2 : getBorderColor(theme, inputState.status))};
  }
  outline: 1.5px solid ${({ theme, inputState, disabled }) => (disabled ? theme.containerAndCardShades.BG_SHADE_PLUS_4 : getBorderColor(theme, inputState.status))};
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

export const MoreDetailContainer = Styled.div`
  position: absolute;
  right: 0;
  margin: 8px;
`;

export const Wrapper = Styled.div<{ mt?: string }>`
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  padding: 20px;
  margin-top: ${({ mt }) => mt && mt};
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
  inputRef,
  tabIndex,
  maxLength,
}: InputsProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const theme = localTheme();
  const error = inputState.status === 'error';
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

  const showMaxLength = !error && maxLength;
  const showMoreDetails = (!error && maxLength) || (inputState.status === 'valid' || inputState.status === 'invalid' || inputState.status === 'help' || inputState.status === 'exception' || inputState.status === 'error');

  const moreDetailsContainer = (showMoreDetails || showMaxLength) && (
    <MoreDetailContainer>
      {(inputState.status === 'valid' || inputState.status === 'invalid' || inputState.status === 'help' || inputState.status === 'exception' || inputState.status === 'error') && (
      <Text
        color={getMoreDetailsTextColor(inputState.status)}
        size="12-Regular"
      >
        {inputState.message}
      </Text>
      )}
      {!error && maxLength && (
        <Text size="11-Regular" color={disabled ? theme.textShades.SHADE_MINUS_1 : theme.textShades.SHADE_MINUS_2}>{`${value?.length.toString()}/${maxLength.toString()}`}</Text>
      )}
    </MoreDetailContainer>
  );

  return (
    <InputWrapper inputState={inputState} width={width} disabled={!!disabled}>
      {label && (
      <InputLabel disabled={!!disabled}>
        {label}
        {required && (<Required disabled={!!disabled}>*</Required>)}
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
          {!!icon && inputState.status !== 'invalid' && (<IconWrapper height="20px" width="20px" fill={!disabled && hover ? theme.textShades.SHADE_MINUS_3 : theme.textShades.SHADE_MINUS_1} icon={icon} />)}
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
          ref={inputRef}
          maxLength={maxLength}
        />
        {inputState.status === 'valid' && <RightSideIcon><IconWrapper height="20px" width="20px" icon={<SelectedCheck />} /></RightSideIcon>}
        {moreDetailsContainer}
      </InputContainer>
    </InputWrapper>
  );
};
