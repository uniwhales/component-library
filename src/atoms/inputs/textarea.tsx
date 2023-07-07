import React, { ChangeEvent, Ref, useState } from 'react';
import { styled } from 'styled-components';
import {
  InputWrapper, InputLabel, InputContainer, InputState, MoreDetailContainer,
} from './input';
import { localTheme } from '../../theme';
import { Text } from '../texts/text';
import { Required } from './select/components';

export type TextAreaTypes = {
  disabled: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  label?: string;
  $inputState?: InputState;
  placeholder?: string;
  $maxLength?: number;
  required?: boolean;
  $textareaRef?: Ref<HTMLTextAreaElement>;
  tabIndex?: number
};

const TextAreaStyled = styled.textarea<{ disabled?: boolean, $inputState: InputState, tabIndex?: number }>`
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
  font-family: Poppins, sans-serif;
  line-height:24px;
  ::placeholder {
    color: ${(props) => !props.disabled && props.theme.textShades.SHADE_MINUS_1};
    font-family: Poppins, sans-serif;
  }
  :focus  {
    color: ${(props) => !props.disabled && props.theme.textShades.SHADE_MINUS_3};
  }
`;

const TextAreaWrapper = styled(InputWrapper)`
  height: 100%;
`;

const TextAreaContainer = styled(InputContainer)`
  height: 100%;
`;

export const TextArea = ({
  placeholder,
  value,
  onChange,
  label,
  disabled,
  $inputState = { message: '', status: 'default' },
  required,
  $textareaRef,
  $maxLength,
  tabIndex,
}: TextAreaTypes) => {
  const [focus, setFocus] = useState<boolean>(false);
  const theme = localTheme();
  const error = $inputState.status === 'error';

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

  const showMaxLength = !error && $maxLength;
  const showMoreDetails = (!error && $maxLength) || ($inputState.status === 'valid' || $inputState.status === 'invalid' || $inputState.status === 'help' || $inputState.status === 'exception' || $inputState.status === 'error');

  const moreDetailsContainer = (showMoreDetails || showMaxLength) && (
    <MoreDetailContainer>
      {($inputState.status === 'valid' || $inputState.status === 'invalid' || $inputState.status === 'help' || $inputState.status === 'exception' || $inputState.status === 'error') && (
      <Text
        color={getMoreDetailsTextColor($inputState.status)}
        size="12-Regular"
      >
        {$inputState.message}
      </Text>
      )}
      {!error && $maxLength && (
        <Text size="11-Regular" color={disabled ? theme.textShades.SHADE_MINUS_1 : theme.textShades.SHADE_MINUS_2}>{`${value?.length.toString()}/${$maxLength.toString()}`}</Text>
      )}
    </MoreDetailContainer>
  );

  return (
    <TextAreaWrapper $inputState={$inputState} disabled={!!disabled}>
      {label && (
        <InputLabel disabled={!!disabled}>
          {label}
          {required && (<Required>*</Required>)}
        </InputLabel>
      )}
      <TextAreaContainer
        $inputState={$inputState}
        disabled={disabled}
        focus={focus}
      >
        <TextAreaStyled
          $inputState={$inputState}
          maxLength={$maxLength}
          disabled={disabled}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder || 'Placeholder'}
          tabIndex={tabIndex}
          ref={$textareaRef}
        />
        {moreDetailsContainer}
      </TextAreaContainer>
    </TextAreaWrapper>
  );
};
