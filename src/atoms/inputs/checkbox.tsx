import React, { FC, useState } from 'react';
import { localTheme, Styled } from '../../theme';
import { CheckboxSize, getCheckboxSvgSize, getCheckboxSize } from '../../utils/getSize';
import { Check } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';

type CheckboxStyledProps = {
  focus: boolean;
  hover: boolean;
  selected: boolean;
  disabled: boolean;
  size: CheckboxSize;
  rounded?: boolean;
};

const CheckboxStyled = Styled.div<CheckboxStyledProps>`
  transition: background-color 0.45s ease, border 0.45s ease; 
  svg {
    height: ${(props) => (getCheckboxSvgSize(props.size))};
    width: ${(props) => (getCheckboxSvgSize(props.size))};
    cursor: pointer;
  }
  width: ${(props) => (getCheckboxSize(props.size))};
  height: ${(props) => (getCheckboxSize(props.size))};
  border: 2px solid ${(props) => {
    if (props.hover && !props.selected && !props.disabled) {
      return props.theme.colors.secondary.TEAL;
    }

    if (
      ((props.hover || props.selected) && !props.disabled)
      || (props.selected && props.disabled)
    ) {
      return 'transparent';
    }
    if (props.disabled) {
      return props.theme.textShades.SHADE_MINUS_1;
    }

    return props.theme.colors.primary.MANGO;
  }};
  border-radius: ${({ rounded }) => (rounded ? '50%' : '4px')};
  background-color: ${(props) => {
    if (!props.selected) return props.theme.containerAndCardShades.SHADE_PLUS_1;
    if (props.disabled && props.selected) {
      return props.theme.colors.system.GREEN;
    }

    return props.theme.colors.primary.MANGO;
  }};
  opacity: ${(props) => props.disabled && !props.selected && '0.7'};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface CheckboxProps {
  disabled: boolean;
  selected: boolean;
  size: CheckboxSize;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  rounded?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
  disabled,
  selected,
  size,
  onClick,
  rounded = false,
}) => {
  const theme = localTheme();
  const [focus, setFocus] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  return (
    <CheckboxStyled
      rounded={rounded}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={hover}
      focus={focus}
      disabled={disabled}
      selected={selected}
      size={size}
      onClick={(e) => {
        e.stopPropagation();

        if (!disabled) onClick(e);
      }}
    >
      {((hover && !disabled) || selected) && (
        <IconWrapper
          stroke={
            disabled ? theme.colors.system.WHITE
              : selected
                ? theme.colors.primary.DARK_BLUE
                : theme.colors.primary.MANGO
          }
          fill="none"
          icon={<Check />}
        />
      )}
    </CheckboxStyled>
  );
};
