import React, { FC, useState } from 'react';
import { styled } from 'styled-components';
import { localTheme } from '../../theme';
import { getCheckboxSvgSize, getCheckboxSize } from '../../utils/getSize';
import { Check } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';

type CheckboxStyledProps = {
  focus: boolean;
  hover: boolean;
  selected: boolean;
  disabled: boolean;
  size: 'small' | 'big';
  variant?: 'primary' | 'secondary'
};

const CheckboxStyled = styled.div<CheckboxStyledProps>`
  transition: background-color 0.45s ease, border 0.45s ease;
  box-sizing: border-box;
  svg {
    cursor: pointer;
  }
  width: ${(props) => (getCheckboxSize(props.size))};
  height: ${(props) => (getCheckboxSize(props.size))};
  border: 2px solid ${(props) => {
    if (props.hover && !props.selected && !props.disabled) {
      return props.variant === 'secondary' ? props.theme.colors.MAIN_BLUE : props.theme.colors.YELLOW;
    }

    if (
      ((props.hover || props.selected) && !props.disabled)
      || (props.selected && props.disabled)
    ) {
      return 'transparent';
    }
    if (props.disabled) {
      return props.theme.colors.SHADE_PLUS_1;
    }

    return props.theme.colors.SHADE_MINUS_1;
  }};
  border-radius: 50%;
  background-color: ${(props) => {
    if (!props.selected) return props.theme.colors.SHADE_PLUS_1;
    if (props.disabled && props.selected) {
      return props.theme.colors.CARRIBEAN_GREEN;
    }

    return props.variant === 'secondary' ? props.theme.colors.MAIN_BLUE : props.theme.colors.YELLOW;
  }};
  opacity: ${(props) => props.disabled && !props.selected && '0.7'};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export type CheckboxProps = {
  disabled: boolean;
  selected: boolean;
  size: 'small' | 'big';
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  selectCheck?:boolean
  variant?: 'primary' | 'secondary'
};

export const Checkbox: FC<CheckboxProps> = ({
  disabled,
  selected,
  size,
  onClick,
  selectCheck = false,
  variant = 'primary',
}) => {
  const theme = localTheme();
  const [focus, setFocus] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  return (
    <CheckboxStyled
      variant={variant}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={hover}
      focus={focus}
      disabled={disabled}
      selected={selected}
      size={size}
      onClick={selectCheck ? onClick : (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.stopPropagation();
        if (!disabled) onClick(e);
      }}
    >
      {((hover && !disabled) || selected) && (
        <IconWrapper
          height={getCheckboxSvgSize(size)}
          width={getCheckboxSvgSize(size)}
          stroke={
            disabled ? theme.colors.WHITE
              : selected
                ? variant === 'secondary' ? theme.colors.WHITE : theme.colors.DARK_BLUE
                : variant === 'secondary' ? theme.colors.MAIN_BLUE : theme.colors.YELLOW
          }
          fill="none"
          icon={<Check />}
        />
      )}
    </CheckboxStyled>
  );
};
