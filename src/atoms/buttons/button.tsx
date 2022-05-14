import React, { FC } from 'react';
import { css } from 'styled-components';
import { Styled } from '../../theme';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactChild;
  buttonVariant:
  'primary'
  | 'secondary'
  | 'tertiary'
  | 'primary_action'
  | 'secondary_action'
  | 'tiny_action'
  | 'secondary_action_inverse',
  borderRadius?: string,
  disabled?: boolean
  onClick: () => void;
}

type GenericStylingProps = Partial<Pick<ButtonProps, 'borderRadius'>>;

const Button = Styled.button<GenericStylingProps>`
  font-size: 14px;
  line-height: 24px;
  padding: 12px;
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
const ButtonPrimaryAction = Styled(ButtonPrimary)``;
const ButtonSecondaryAction = Styled(Button)`
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
    default:
      return (
        <ButtonPrimary borderRadius={borderRadius} onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          {children}
        </ButtonPrimary>
      );
  }
};
