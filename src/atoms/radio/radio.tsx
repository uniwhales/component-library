import React from 'react';
import { Styled } from '../../theme';
import { RadioProps } from './types';
import { Text } from '../texts/text';

const Wrapper = Styled.div`
  gap: 10px;
  cursor: pointer;
`;

const Item = Styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  position: relative;
    cursor: pointer;
`;

const RadioButtonLabel = Styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: transparent;
    cursor: pointer;
  border: ${(props) => `2px solid ${props.theme.colors.system.WHITE}`};
`;
const RadioButton = Styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
  &:hover ~ ${RadioButtonLabel} {
    background: transparent;
    border: ${(props) => `2px solid ${props.theme.colors.primary.UWL_BLUE}`};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 5px;
      background: ${(props) => props.theme.gradients.primary.BLURPLE}
    }
  }
  ${(props) => props.checked
    && `
    &:checked + ${RadioButtonLabel} {
      background: transparent;
      border: 2px solid ${props.theme.colors.system.WHITE};
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        margin: 5px;
        background: ${props.theme.colors.primary.UWL_BLUE}
      }
    }
  `}
`;

export const Radio = ({
  disabled, checked, onChange, value, label,
}: RadioProps) => (
  <Wrapper>
    <Item>
      <RadioButton
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <RadioButtonLabel />
      {label && (<Text size="S-Regular">{label}</Text>)}
    </Item>
  </Wrapper>

);
