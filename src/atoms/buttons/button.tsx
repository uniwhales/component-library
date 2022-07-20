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
  color: ${(props) => props.theme.colors.system.WHITE};
  border-radius: ${(props) => props.borderRadius || '12px'};
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
    cursor: pointer;
    fill: ${(props) => props.theme.colors.system.WHITE}!important;
  }
`;
const ButtonPrimary = Styled(Button)`
  // disabled state
  ${(props) => props.disabled && css`
      opacity: 0.2;
      background: ${props.theme.colors.system.DISABLED};
      border: none;
  `}
  // active state
  ${(props) => !props.disabled && css`
      cursor: pointer;
      background: ${props.theme.gradients.primary.BLURPLE};
      border: none;
      &:hover {
        background: ${props.theme.gradients.primary.BLURPLE_HIGHLIGHTED};
      };
      &:active {
       background: ${props.theme.gradients.primary.BLURPLE};
      };
  `}
`;
const ButtonSecondary = Styled(Button)`
  color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  svg {
    fill: ${(props) => props.theme.contrastColor.HIGH_CONTRAST}!important;
  }
  // disabled state
  ${(props) => props.disabled && css`
     opacity: 0.2;
     background: ${props.theme.colors.system.DISABLED};
     border: none;
  `}

  // active state
  ${(props) => !props.disabled && css`
    background-color: transparent;
    border: 1px solid ${props.theme.colors.primary.UWL_BLUE};
    &:hover {
      color: ${props.theme.colors.system.WHITE};
      background: ${props.theme.colors.primary.UWL_BLUE};
      svg {
        fill: ${props.theme.colors.system.WHITE}!important;
      }
    };
    &:active {
      color: ${props.theme.colors.system.WHITE};
      background: ${props.theme.colors.primary.UWL_BLUE};
      svg {
        fill: ${props.theme.colors.system.WHITE}!important;
      }
    };
  `}
`;
const ButtonTertiary = Styled(Button)`
  svg {
    fill: ${(props) => props.theme.contrastColor.HIGH_CONTRAST}!important;
  }
  ${(props) => props.disabled && css`
     background: ${props.theme.colors.system.DISABLED};
     opacity: 0.2;
     border: none;
  `};
  // active state
  ${(props) => !props.disabled && css`
    color: ${props.theme.textShades.SHADE_MINUS_3};
    background-color: transparent;
    border: 1px solid ${props.theme.textShades.SHADE_MINUS_3};
    &:hover {
       border: 1px solid ${props.theme.colors.primary.UWL_BLUE};
       // color: ${props.theme.colors.primary.UWL_BLUE};
      svg {
        fill: ${props.theme.colors.primary.UWL_BLUE}!important;
      }
    };
    &:active {
      color: ${props.theme.colors.system.WHITE};
      background: ${props.theme.colors.primary.UWL_BLUE};
      svg {
        fill: ${props.theme.colors.system.WHITE}!important;
      }
    };
  `};
`;
const ButtonPrimaryAction = Styled(ButtonPrimary)`
  width: 40px;
  height: 40px;
  padding: 10px;
`;
const ButtonSecondaryAction = Styled(Button)`
  width: 40px;
  height: 40px;
  svg {
    fill: ${(props) => props.theme.contrastColor.HIGH_CONTRAST}!important;
  }
  border: none;
  // disabled state
  ${(props) => props.disabled && css`
     opacity: 0.2;
     background: transparent;
  `}
  // active state
  ${(props) => !props.disabled && css`
    background-color: transparent;
    &:hover {
      svg {
        fill: ${props.theme.colors.primary.UWL_BLUE}!important;
      }
    };
    &:active {
      svg {
        fill: ${props.theme.colors.primary.UWL_BLUE}!important;
      }
    };
  `}
`;
const ButtonTinyAction = Styled(ButtonSecondaryAction)``;
const ButtonSecondaryActionInverse = Styled(Button)`
  svg {
    fill: ${(props) => props.theme.colors.primary.UWL_BLUE}!important;
  }
  border: none;
  // disabled state
  ${(props) => props.disabled && css`
    opacity: 0.2;
    background: transparent;
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

const ButtonSpecialSmallNormal = Styled(Button)`
  border-radius: 12px;
  border: none;

  ${(props) => props.disabled && css`
    opacity: 0.2;
    background: ${props.theme.colors.system.DISABLED};
    border: none;
  `}

  // active state
  ${(props) => !props.disabled && css`
    cursor: pointer;
    background: ${props.theme.containerAndCardShades.NEUTRAL_SHADE_0};

    &:hover {
      background: ${props.theme.colors.primary.WATER_BLUE};
    };
    &:active {
      background: ${props.theme.contrastColor.HIGH_CONTRAST};
      
      svg {
        fill: ${props.theme.containerAndCardShades.SHADE_PLUS_3}!important;
      }
    };
  `}
`;
const ButtonSpecialSmallRound = Styled(ButtonSpecialSmallNormal)<{ buttonVariant: ButtonProps['buttonVariant'] }>`
  border-radius: 32px;
  cursor: pointer;

  width: ${({ buttonVariant }) => (buttonVariant === 'special_extra_tiny_round' ? '16px' : buttonVariant === 'special_tiny_round' ? '24px' : '36px')};
  height: ${({ buttonVariant }) => (buttonVariant === 'special_extra_tiny_round' ? '16px' : buttonVariant === 'special_tiny_round' ? '24px' : '36px')};
  
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
  cursor: pointer;

  &:hover, &:active {
    color: ${({ theme }) => theme.colors.primary.WATER_BLUE};
  }
`;
export const ButtonAtom:FC<ButtonProps> = ({
  children,
  buttonVariant,
  disabled = false,
  onClick,
  borderRadius,
}) => {
  switch (buttonVariant) {
    case 'secondary':
      return (
        <ButtonSecondary borderRadius={borderRadius} onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          {children}
        </ButtonSecondary>
      );
    case 'tertiary':
      return (
        <ButtonTertiary borderRadius={borderRadius} onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          {children}
        </ButtonTertiary>
      );
    case 'primary_action':
      return (
        <ButtonPrimaryAction borderRadius={borderRadius} onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          {children}
        </ButtonPrimaryAction>
      );
    case 'secondary_action':
      return (
        <ButtonSecondaryAction borderRadius={borderRadius} onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          {children}
        </ButtonSecondaryAction>
      );
    case 'tiny_action':
      return (
        <ButtonTinyAction borderRadius={borderRadius} onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          {children}
        </ButtonTinyAction>
      );
    case 'secondary_action_inverse':
      return (
        <ButtonSecondaryActionInverse borderRadius={borderRadius} onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          {children}
        </ButtonSecondaryActionInverse>
      );
    case 'special_small':
      return (
        <ButtonSpecialSmallNormal onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          {children}
        </ButtonSpecialSmallNormal>
      );
    case 'special_small_round':
    case 'special_tiny_round':
    case 'special_extra_tiny_round':
      return (
        <ButtonSpecialSmallRound buttonVariant={buttonVariant} onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          {children}
        </ButtonSpecialSmallRound>
      );
    case 'special_extra_tiny_subtle':
      return (
        <ButtonSpecialSmallSubtle>
          {children}
        </ButtonSpecialSmallSubtle>
      );
    default:
      return (
        <ButtonPrimary borderRadius={borderRadius} onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          {children}
        </ButtonPrimary>
      );
  }
};
