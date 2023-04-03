import React, { ChangeEvent, Ref, useState } from 'react';
import {
  InputWrapper, InputLabel, InputContainer, Required, InputState,
} from './input';
import { Styled } from '../../theme';

type TextAreaTypes = {
  disabled: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  label?: string;
  inputState?: InputState;
  placeholder?: string;
  maxLength?: number;
  required?: boolean;
  ref?: Ref<HTMLInputElement>;
};

const TextAreaStyled = Styled.textarea<{ disabled?: boolean, inputState: InputState }>`
  resize: none;
  outline: none;
  height: 100%;
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ theme, disabled }) => (disabled ? theme.containerAndCardShades.SHADE_PLUS_1 : theme.textShades.SHADE_MINUS_3)};
  padding: 8px 24px;
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  box-sizing: border-box;
  border-radius: 12px;
  border: none;
  background: ${({ theme, disabled }) => (disabled ? theme.containerAndCardShades.SHADE_PLUS_3 : theme.containerAndCardShades.BG_SHADE_PLUS_4)};
  line-height:24px;
  ::placeholder {
    color: ${(props) => !props.disabled && props.theme.textShades.SHADE_MINUS_1};
  }
  :focus  {
    color: ${(props) => !props.disabled && props.theme.textShades.SHADE_MINUS_3};
  }
`;

const TextAreaWrapper = Styled(InputWrapper)`
  height: 100%;
`;

const TextAreaContainer = Styled(InputContainer)`
  height: 100%;
`;

export const TextArea = ({
  placeholder,
  value,
  onChange,
  label,
  disabled,
  inputState = { message: '', status: 'default' },
  required,
  ref,
  maxLength,
}: TextAreaTypes) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <TextAreaWrapper inputState={inputState} ref={ref} disabled={!!disabled}>
      {label && (
      <InputLabel disabled={!!disabled}>
        {label}
        {required && (<Required>*</Required>)}
      </InputLabel>
      )}
      <TextAreaContainer
        inputState={inputState}
        disabled={disabled}
        focus={focus}
      >
        <TextAreaStyled
          inputState={inputState}
          maxLength={maxLength}
          disabled={disabled}
          value={value}
          onChange={(e) => onChange(e)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder || 'Placeholder'}
        />
      </TextAreaContainer>
    </TextAreaWrapper>
  );
};
