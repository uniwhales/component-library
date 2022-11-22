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
  font-weight: 700;
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
const ButtonPrimary = Styled(Button)<Pick<ButtonProps, 'width'>>`
  width: ${({ width }) => width};
  // disabled state
  ${(props) => props.disabled && css`
      background: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
      color: ${props.theme.textShades.SHADE_MINUS_1};
      border: none;

      svg {
        fill: ${props.theme.textShades.SHADE_MINUS_1}!important;
      }
  `}
  // active state
  ${(props) => !props.disabled && css`
    position: relative;
    border: none;
    opacity: 0.9;
    background-image: ${props.theme.gradients.primary.MAIN_BLUE_GRADIENT};
    z-index: ${props.theme.zIndex.BACKDROP};
    &:before {
      border-radius: 12px;
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      left: 0;
      background-image: ${props.theme.gradients.primary.MAIN_HIGHLIGHT_GRADIENT};
      transition: opacity 0.25s linear;
      opacity: 0;
    }
    &:hover {
      opacity: 1;
      &:before {
        opacity: 1;
      }
    }
    &:active {
      opacity: 1;
      &:before {
        opacity: 1;
      }
    }
  `}
`;
const ButtonSecondary = Styled(Button)<Pick<ButtonProps, 'width'>>`
  color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  width: ${({ width }) => width};
  svg {
    fill: ${(props) => props.theme.textShades.SHADE_MINUS_3}!important;
  }
  // disabled state
  ${(props) => props.disabled && css`
    transition: background 0.45s ease;
    background: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
    color: ${props.theme.textShades.SHADE_MINUS_1};
    border: none;
    svg {
      fill: ${props.theme.textShades.SHADE_MINUS_1}!important;
    }
  `}

  // active state
  ${({ theme, disabled }) => !disabled && css`
    background-color: transparent;
    border: 1px solid ${theme.colors.primary.MANGO};
    &:hover {
      color: ${theme.colors.primary.DARK_BLUE};
      background: ${theme.colors.primary.MANGO};
      svg {
        fill: ${theme.colors.primary.DARK_BLUE}!important;
      }
    };
    &:active {
      color: ${theme.colors.primary.DARK_BLUE};
      background: ${theme.colors.primary.MANGO};
      svg {
        fill: ${theme.colors.primary.DARK_BLUE}!important;
      }
    };
  `}
`;
const ButtonTertiary = Styled(Button)<Pick<ButtonProps, 'width'>>`
  width: ${({ width }) => width};
  svg {
    path {transition: fill 0.45s ease;}
    fill: ${(props) => props.theme.contrastColor.LOW_CONTRAST}!important;
  }
  // disabled state
  ${(props) => props.disabled && css`
      background: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
      color: ${props.theme.textShades.SHADE_MINUS_1};
      border: none;
  `};
  // active state
  ${(props) => !props.disabled && css`
    color: ${props.theme.contrastColor.LOW_CONTRAST};
    background-color: transparent;
    border: none;
    &:hover {
       border: 1px solid ${props.theme.colors.primary.MAIN_BLUE};
       color: ${props.theme.contrastColor.HIGH_CONTRAST};
      svg {
        fill: ${props.theme.contrastColor.HIGH_CONTRAST}!important;
      }
    };
    &:active {
      color: ${props.theme.colors.system.WHITE};
      background: ${props.theme.colors.primary.MAIN_BLUE};
      svg {
        fill: ${props.theme.colors.system.WHITE}!important;
      }
    };
  `};
`;
const ButtonPrimaryAction = Styled(ButtonPrimary)<Pick<ButtonProps, 'width'>>`
  width: ${({ width }) => width ?? '40px'};
  height: 40px;
  padding: 10px;
`;
const ButtonSecondaryAction = Styled(Button)<Pick<ButtonProps, 'width'>>`
  width: ${({ width }) => width ?? 'max-content'};
  height: 40px;
  path {transition: fill 0.45s ease;}
  svg {
    fill: ${(props) => props.theme.textShades.SHADE_MINUS_3}!important;
  }
  border: none;
  // disabled state
  ${(props) => props.disabled && css`
    background: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
    color: ${props.theme.textShades.SHADE_MINUS_1};
    border: none;
  `}
  // active state
  ${(props) => !props.disabled && css`
    background-color: transparent;
    &:hover {
      svg {
        fill: ${props.theme.colors.primary.MAIN_BLUE}!important;
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
const ButtonSecondaryActionInverse = Styled(Button)<Pick<ButtonProps, 'width'>>`
  width: ${({ width }) => width};
  svg {
    fill: ${(props) => props.theme.colors.primary.MAIN_BLUE}!important;
  }
  border: none;
  // disabled state
  ${(props) => props.disabled && css`
    background: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
    color: ${props.theme.textShades.SHADE_MINUS_1};
    border: none;
  `}
      // active state
  ${(props) => !props.disabled && css`
    background-color: transparent;
    &:hover {
      svg {
        fill: ${props.theme.colors.system.WHITE}!important;
      }
    };
    &:active {
      svg {
        fill: ${props.theme.colors.system.WHITE}!important;
      }
    };
  `}
`;

const ButtonSpecialSmallNormal = Styled(Button)<Pick<ButtonProps, 'width'>>`
  width: ${({ width }) => width};
  border-radius: 12px;
  border: none;
  padding: 4px 12px;
  height: auto;
  line-height: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.textShades.SHADE_MINUS_3};
  svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.textShades.SHADE_MINUS_3}!important;
  };
  // disabled
  ${(props) => props.disabled && css`
    background: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
    color: ${props.theme.textShades.SHADE_MINUS_1};
    border: none;
    svg {
      fill: ${props.theme.textShades.SHADE_MINUS_1}!important;
    }
  `}

  // active state
  ${(props) => !props.disabled && css`
    background: ${props.theme.containerAndCardShades.NEUTRAL_SHADE_0};

   &:hover {
      background: ${props.theme.colors.primary.MANGO};
      color: ${props.theme.colors.primary.DARK_BLUE};
      //font-weight: 700; it this implementation does not work
      svg {
        fill: ${props.theme.colors.primary.DARK_BLUE}!important;
      }
    };
    &:active {
      background: ${props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
      color: ${props.theme.colors.primary.MAIN_BLUE};

      svg {
        fill: ${props.theme.colors.primary.MAIN_BLUE}!important;
      }
    };
  `}
`;
const ButtonSpecialSmallRound = Styled(ButtonSpecialSmallNormal)<{ buttonVariant: ButtonProps['buttonVariant'] }>`
  border-radius: 32px;
  width: ${({ buttonVariant }) => (buttonVariant === 'special_extra_tiny_round' ? '16px' : buttonVariant === 'special_tiny_round' ? '20px' : '36px')};
  height: ${({ buttonVariant }) => (buttonVariant === 'special_extra_tiny_round' ? '16px' : buttonVariant === 'special_tiny_round' ? '20px' : '36px')};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  svg {
    width: ${({ buttonVariant }) => (buttonVariant === 'special_extra_tiny_round' ? '10px' : buttonVariant === 'special_tiny_round' ? '17px' : '21px')};
    height: ${({ buttonVariant }) => (buttonVariant === 'special_extra_tiny_round' ? '10px' : buttonVariant === 'special_tiny_round' ? '17px' : '21px')};
  }
`;

const ButtonSpecialSmallSubtle = Styled(Button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.textShades.SHADE_MINUS_1};
  svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.textShades.SHADE_MINUS_1}!important;
  };
  // disabled
  ${(props) => props.disabled && css`
    color: ${({ theme }) => theme.textShades.SHADE_MINUS_1};
    svg {
      fill: ${({ theme }) => theme.textShades.SHADE_MINUS_1}!important;
    };
  `}
  ${({ disabled }) => !disabled && css`
    &:hover, &:active {
    color: ${({ theme }) => theme.colors.primary.MAIN_BLUE};
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
export const ButtonAtom:FC<ButtonProps> = ({
  children,
  buttonVariant,
  disabled = false,
  onClick,
  borderRadius,
  onMouseEnter,
  onMouseLeave,
  width,
}) => {
  switch (buttonVariant) {
    case 'secondary':
      return (
        <ButtonSecondary
          width={width}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          borderRadius={borderRadius}
          onClick={!disabled ? onClick : () => {}}
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
          onClick={!disabled ? onClick : () => {}}
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
          onClick={!disabled ? onClick : () => {}}
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
          onClick={!disabled ? onClick : () => {}}
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
          onClick={!disabled ? onClick : () => {}}
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
          onClick={!disabled ? onClick : () => {}}
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
          onClick={!disabled ? onClick : () => {}}
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
          onClick={!disabled ? onClick : () => {}}
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
          onClick={!disabled ? onClick : () => {}}
          type="button"
        >
          {children}
        </ButtonSpecialSmallSubtle>
      );
    case 'icon_only':
      return (
        <ButtonIconOnly
          disabled={disabled}
          onClick={!disabled ? onClick : () => {}}
          type="button"
        >
          {children}
        </ButtonIconOnly>
      );
    default:
      return (
        <ButtonPrimary
          width={width}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          borderRadius={borderRadius}
          onClick={!disabled ? onClick : () => {}}
          disabled={disabled}
          type="button"
        >
          {children}
        </ButtonPrimary>
      );
  }
};
