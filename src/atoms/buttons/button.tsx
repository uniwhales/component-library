import React, { FC } from 'react';
import { css } from 'styled-components';
import { Styled } from '../../theme';
import { ButtonProps, GenericStylingProps } from './types';

const Button = Styled.button<GenericStylingProps>`
  transition: 0.3s;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 12px;
  height: 40px;
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-family: Poppins, sans-serif;
  color: ${(props) => props.theme.colors.system.WHITE};
  border-radius: ${(props) => props.borderRadius || '12px'};
  justify-content: center;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  .button__group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  svg {
    width: 20px;
    height: 20px;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')}!important;
    fill: ${(props) => props.theme.colors.system.WHITE}!important;
  }
`;
const ButtonPrimary = Styled(Button) <Pick<ButtonProps, 'width'>>`
  width: ${({ width }) => width};
  // disabled state
  ${(props) => props.disabled && css`
      background: ${props.theme.containerAndCardShades.SHADE_PLUS_3};
      color: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
      border: 2px solid transparent;

      svg {
        fill: ${props.theme.containerAndCardShades.SHADE_PLUS_1}!important;
      }
  `}
  // active state
  ${(props) => !props.disabled && css`
    position: relative;
    border: 2px solid transparent;
    opacity: 0.9;
    background: ${props.theme.colors.primary.MAIN_BLUE};
    z-index: ${props.theme.zIndex.BACKDROP};
    &:hover {
      background: ${props.theme.colors.secondary.SKY};
    }
    &:active {
      border: 2px solid ${props.theme.colors.primary.YELLOW};
    }
  `}
`;
const ButtonSecondary = Styled(Button) <Pick<ButtonProps, 'width'>>`
  color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  width: ${({ width }) => width};
  svg {
    fill: ${(props) => props.theme.textShades.SHADE_MINUS_3}!important;
  }
  // disabled state
  ${(props) => props.disabled && css`
    transition: background 0.45s ease;
      background: ${props.theme.containerAndCardShades.SHADE_PLUS_3};
      color: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
      border: 2px solid transparent;

      svg {
        fill: ${props.theme.containerAndCardShades.SHADE_PLUS_1}!important;
      }
  `}

  // active state
  ${({ theme, disabled }) => !disabled && css`
    background-color: transparent;
    border: 2px solid ${theme.colors.primary.MAIN_BLUE};
    &:hover {
      background: ${theme.colors.primary.MAIN_BLUE};
      color: ${theme.colors.system.WHITE};
            svg {
        fill: ${theme.colors.system.WHITE}!important;
      }
    };
    &:active {
      background: ${theme.colors.primary.MAIN_BLUE};
      border: 2px solid ${theme.colors.primary.YELLOW};
      color: ${theme.colors.system.WHITE};
            svg {
        fill: ${theme.colors.system.WHITE}!important;
      }
    };
  `}
`;
const ButtonTertiary = Styled(Button) <Pick<ButtonProps, 'width'>>`
  width: ${({ width }) => width};
  svg {
    path {transition: fill 0.45s ease;}
    fill: ${(props) => props.theme.textShades.SHADE_MINUS_2}!important;
  }
  // disabled state
  ${(props) => props.disabled && css`
      background: ${props.theme.containerAndCardShades.SHADE_PLUS_3};
      color: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
      border: 2px solid transparent;

      svg {
        fill: ${props.theme.containerAndCardShades.SHADE_PLUS_1}!important;
      }
  `};
  // active state
  ${(props) => !props.disabled && css`
    color: ${props.theme.textShades.SHADE_MINUS_2};
    background-color: transparent;
    border: 2px solid transparent;
    &:hover {
       color: ${props.theme.textShades.SHADE_MINUS_3};
       background: ${props.theme.textShades.SHADE_MINUS_1};
      svg {
        fill: ${props.theme.textShades.SHADE_MINUS_3}!important;
      }
    };
    &:active {
     color: ${props.theme.textShades.SHADE_MINUS_3};
     background: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
     border: 2px solid ${props.theme.colors.primary.YELLOW};
      svg {
        fill: ${props.theme.textShades.SHADE_MINUS_3}!important;
      }
    };
  `};
`;
const ButtonPrimaryAction = Styled(ButtonTertiary) <Pick<ButtonProps, 'width'>>`
  width: ${({ width }) => width ?? '40px'};
  height: 40px;
  padding: 10px;
    // active state
  ${(props) => !props.disabled && css`
    color: ${props.theme.textShades.SHADE_MINUS_1};
  `};
  // disabled state
  ${(props) => props.disabled && css`
      background: none;
      color: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
      border: none;

      svg {
        fill: ${props.theme.containerAndCardShades.SHADE_PLUS_1}!important;
      }
  `};
`;
const ButtonSecondaryAction = Styled(Button) <Pick<ButtonProps, 'width'>>`
  width: ${({ width }) => width ?? 'max-content'};
  height: 40px;
  path {transition: fill 0.45s ease;}
  svg {
    fill: ${(props) => props.theme.textShades.SHADE_MINUS_3}!important;
  }
  border: none;
  // disabled state
  ${(props) => props.disabled && css`
      background: none;
      color: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
      border: none;

      svg {
        fill: ${props.theme.containerAndCardShades.SHADE_PLUS_1}!important;
      }
  `};
  // active state
  ${(props) => !props.disabled && css`
    background-color: transparent;
    &:hover {
      svg {
        fill: ${props.theme.textShades.SHADE_MINUS_1}!important;
      }
    };
    &:active {
      svg {
        fill: ${props.theme.colors.primary.MAIN_BLUE}!important;
      }
    };
  `}
`;
const ButtonTinyAction = Styled(ButtonSecondaryAction)``;
const ButtonSecondaryActionInverse = Styled(Button) <Pick<ButtonProps, 'width'>>`
  width: ${({ width }) => width};
  svg {
    fill: ${(props) => props.theme.textShades.SHADE_MINUS_1}!important;
  }
  border: none;
  // disabled state
  ${(props) => props.disabled && css`
      background: none;
      color: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
      border: none;

      svg {
        fill: ${props.theme.containerAndCardShades.SHADE_PLUS_1}!important;
      }
  `};
  // active state
  ${(props) => !props.disabled && css`
    background-color: transparent;
    &:hover {
      svg {
        fill: ${props.theme.textShades.SHADE_MINUS_3}!important;
      }
    };
    &:active {
      svg {
        fill: ${props.theme.colors.primary.MAIN_BLUE}!important;
      }
    };
  `}
`;

const ButtonSpecialSmallNormal = Styled(Button) <Pick<ButtonProps, 'width'>>`
  width: ${({ width }) => width};
  border-radius: 12px;
  border: 2px solid transparent;
  padding: 4px 12px;
  height: auto;
  line-height: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.textShades.SHADE_MINUS_3};
  svg {
    width: 16px !important;
    height: 16px !important;
    fill: ${({ theme }) => theme.textShades.SHADE_MINUS_3}!important;
  };
  // disabled state
  ${(props) => props.disabled && css`
      background: ${props.theme.containerAndCardShades.SHADE_PLUS_3};
      color: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
      border: 2px solid transparent;

      svg {
        fill: ${props.theme.containerAndCardShades.SHADE_PLUS_1}!important;
      }
  `}
  // active state
  ${(props) => !props.disabled && css`
    background: ${props.theme.containerAndCardShades.SHADE_PLUS_1};

   &:hover {
      background: ${props.theme.textShades.SHADE_MINUS_1};
      color: ${props.theme.textShades.SHADE_MINUS_3}!important;
      svg {
        fill: ${props.theme.textShades.SHADE_MINUS_3}!important;
      }
    };
    &:active {
      background: ${props.theme.containerAndCardShades.SHADE_PLUS_1}!important;
      color: ${props.theme.textShades.SHADE_MINUS_3}!important;
      border: 2px solid ${props.theme.colors.primary.YELLOW};
      svg {
        fill: ${props.theme.textShades.SHADE_MINUS_3}!important;
      }
    };
  `}
`;
const ButtonSpecialSmallRound = Styled(ButtonSpecialSmallNormal) <{ buttonVariant: ButtonProps['buttonVariant'] }>`
  border-radius: 32px;
  width: ${({ buttonVariant }) => (buttonVariant === 'special_extra_tiny_round' ? '16px' : buttonVariant === 'special_tiny_round' ? '22px' : '36px')};
  height: ${({ buttonVariant }) => (buttonVariant === 'special_extra_tiny_round' ? '16px' : buttonVariant === 'special_tiny_round' ? '22px' : '36px')};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  svg {
    width: ${({ buttonVariant }) => (buttonVariant === 'special_extra_tiny_round' ? '12px' : buttonVariant === 'special_tiny_round' ? '12px' : '16px')}!important;
    height: ${({ buttonVariant }) => (buttonVariant === 'special_extra_tiny_round' ? '12px' : buttonVariant === 'special_tiny_round' ? '12px' : '16px')}!important;
  }
`;

const ButtonSpecialSmallSubtle = Styled(Button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.textShades.SHADE_MINUS_2};
  svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.textShades.SHADE_MINUS_2}!important;
  };
  // disabled
  ${(props) => props.disabled && css`
    color: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
    svg {
      fill: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_1}!important;
    };
  `}
  // active state
  ${({ disabled }) => !disabled && css`
    &:hover {
      color: ${({ theme }) => theme.textShades.SHADE_MINUS_3}!important;
      svg {
        fill: ${({ theme }) => theme.textShades.SHADE_MINUS_3}!important;
      };
    }
    &:active {
      color: ${({ theme }) => theme.colors.primary.MAIN_BLUE}!important;
      svg {
        fill: ${({ theme }) => theme.colors.primary.MAIN_BLUE}!important;
      };
    }
  `};
`;
const ButtonIconOnly = Styled(Button)`
  background: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.textShades.SHADE_MINUS_3}!important;
  };
  // disabled
  ${(props) => props.disabled && css`
    background: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
    svg {
      fill: ${props.theme.textShades.SHADE_MINUS_1}!important;
    }
  `}
  // active state
  ${(props) => !props.disabled && css`
    background: none;
   &:hover {
      background: ${props.theme.colors.primary.MANGO};
      svg {
        fill: ${props.theme.colors.primary.DARK_BLUE}!important;
      }
    };
    &:active {
      background:none;
      svg {
        fill: ${props.theme.colors.primary.MAIN_BLUE}!important;
      }
    };
  `}
`;
const SquareButton = Styled.button<Pick<ButtonProps, 'size'>>`
  height: ${({ size }) => size || '70px'};
  width: ${({ size }) => size || '70px'};
  border-radius: 10px;
  border: ${({ theme }) => `2px solid ${theme.colors.primary.MAIN_BLUE}`};
  color: ${({ theme }) => theme.textShades.SHADE_MINUS_2};
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_2};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')}!important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  svg {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')}!important;
    fill: ${({ theme }) => theme.textShades.SHADE_MINUS_2}!important;
  }
    // disabled state
  ${({ disabled, theme }) => disabled && css`
      background: ${theme.containerAndCardShades.SHADE_PLUS_3};
      color: ${theme.containerAndCardShades.SHADE_PLUS_1};
      border: 2px solid transparent;

      svg {
        fill: ${theme.containerAndCardShades.SHADE_PLUS_1}!important;
      }
  `}
  // active state
  ${({ theme, disabled }) => !disabled && css`
   &:hover {
      background: ${theme.colors.primary.MAIN_BLUE};
      color: ${theme.colors.system.WHITE}!important;
      svg {
        fill: ${theme.colors.system.WHITE}!important;
      };
    };
    &:active {
       border: ${`2px solid ${theme.colors.primary.YELLOW}`};
    };
  `}
`;

export const ButtonAtom: FC<ButtonProps> = ({
  children,
  buttonVariant,
  disabled = false,
  onClick,
  borderRadius,
  onMouseEnter,
  onMouseLeave,
  width,
  size = '70px',
}) => {
  switch (buttonVariant) {
    case 'secondary':
      return (
        <ButtonSecondary
          width={width}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          borderRadius={borderRadius}
          onClick={!disabled ? onClick : () => { }}
          disabled={disabled}
          type="button"
        >
          {children}
        </ButtonSecondary>
      );
    case 'tertiary':
      return (
        <ButtonTertiary
          width={width}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          borderRadius={borderRadius}
          onClick={!disabled ? onClick : () => { }}
          disabled={disabled}
          type="button"
        >
          {children}
        </ButtonTertiary>
      );
    case 'primary_action':
      return (
        <ButtonPrimaryAction
          width={width}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          borderRadius={borderRadius}
          onClick={!disabled ? onClick : () => { }}
          disabled={disabled}
          type="button"
        >
          {children}
        </ButtonPrimaryAction>
      );
    case 'secondary_action':
      return (
        <ButtonSecondaryAction
          width={width}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          borderRadius={borderRadius}
          onClick={!disabled ? onClick : () => { }}
          disabled={disabled}
          type="button"
        >
          {children}
        </ButtonSecondaryAction>
      );
    case 'tiny_action':
      return (
        <ButtonTinyAction
          width={width}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          borderRadius={borderRadius}
          onClick={!disabled ? onClick : () => { }}
          disabled={disabled}
          type="button"
        >
          {children}
        </ButtonTinyAction>
      );
    case 'secondary_action_inverse':
      return (
        <ButtonSecondaryActionInverse
          width={width}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          borderRadius={borderRadius}
          onClick={!disabled ? onClick : () => { }}
          disabled={disabled}
          type="button"
        >
          {children}
        </ButtonSecondaryActionInverse>
      );
    case 'special_small':
      return (
        <ButtonSpecialSmallNormal
          width={width}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={!disabled ? onClick : () => { }}
          disabled={disabled}
          type="button"
        >
          {children}
        </ButtonSpecialSmallNormal>
      );
    case 'special_small_round':
    case 'special_tiny_round':
    case 'special_extra_tiny_round':
      return (
        <ButtonSpecialSmallRound
          width={width}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          buttonVariant={buttonVariant}
          onClick={!disabled ? onClick : () => { }}
          disabled={disabled}
          type="button"
        >
          {children}
        </ButtonSpecialSmallRound>
      );
    case 'special_extra_tiny_subtle':
      return (
        <ButtonSpecialSmallSubtle
          disabled={disabled}
          onClick={!disabled ? onClick : () => { }}
          type="button"
        >
          {children}
        </ButtonSpecialSmallSubtle>
      );
    case 'icon_only':
      return (
        <ButtonIconOnly
          disabled={disabled}
          onClick={!disabled ? onClick : () => { }}
          type="button"
        >
          {children}
        </ButtonIconOnly>
      );
    case 'square':
      return (
        <SquareButton
          disabled={disabled}
          onClick={!disabled ? onClick : () => { }}
          type="button"
          size={size}
        >
          {children}
        </SquareButton>
      );
    default:
      return (
        <ButtonPrimary
          width={width}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          borderRadius={borderRadius}
          onClick={!disabled ? onClick : () => { }}
          disabled={disabled}
          type="button"
        >
          {children}
        </ButtonPrimary>
      );
  }
};
