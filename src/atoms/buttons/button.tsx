import React from 'react';
import { css } from 'styled-components';
import { Styled } from '../../theme';
import { IconWrapper } from '../icons/iconWrapper';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactChild;
  buttonVariant: ButtonVariant;
  disabled?: boolean
  icon?: 'star'
  onClick: () => void;
}

export enum ButtonVariant {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
  PRIMARY_ACTION = 'PRIMARY_ACTION',
  SECONDARY_ACTION = 'SECONDARY_ACTION',
  TINY_ACTION = 'TINY_ACTION',
  SECONDARY_ACTION_INVERSE = 'SECONDARY_ACTION_INVERSE',
}

const Button = Styled.button`
  font-size: 14px;
  line-height: 24px;
  padding: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.system.WHITE};
  border-radius: 12px;
  cursor: pointer;
  .button__group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  svg {
    cursor: pointer;
    fill: ${(props) => props.theme.colors.system.WHITE};
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
      background: ${props.theme.colors.primary.UWL_BLUE};
    };
    &:active {
      background: ${props.theme.colors.primary.UWL_BLUE};
    };
  `}
`;
const ButtonTertiary = Styled(Button)`
  // disabled state
  ${(props) => props.disabled && css`
     background: ${props.theme.colors.system.DISABLED};
     opacity: 0.2;
     border: none;
  `};
  // active state
  ${(props) => !props.disabled && css`
    background-color: transparent;
    border: 1px solid ${props.theme.colors.system.WHITE};
    &:hover {
       border: 1px solid ${props.theme.colors.primary.UWL_BLUE};
    };
    &:active {
      background: ${props.theme.colors.primary.UWL_BLUE};
    };
  `};
`;
const ButtonPrimaryAction = Styled(ButtonPrimary)``;
const ButtonSecondaryAction = Styled(Button)`
  svg {
    fill: ${(props) => props.theme.colors.system.WHITE};
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
        fill: ${props.theme.colors.primary.UWL_BLUE};
      }
    };
    &:active {
      svg {
        fill: ${props.theme.colors.primary.UWL_BLUE};
      }
    };
  `}
`;
const ButtonTinyAction = Styled(ButtonSecondaryAction)``;
const ButtonSecondaryActionInverse = Styled(Button)`
  svg {
    fill: ${(props) => props.theme.colors.primary.UWL_BLUE};
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
        fill: ${props.theme.colors.system.WHITE};
      }
    };
    &:active {
      svg {
        fill: ${props.theme.colors.system.WHITE};
      }
    };
  `}
`;

export const ButtonAtom = ({
  children,
  buttonVariant,
  disabled = false,
  icon,
  onClick,
}:ButtonProps) => {
  switch (ButtonVariant[buttonVariant]) {
    case ButtonVariant.SECONDARY:
      return (
        <ButtonSecondary onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          {icon ? (
            <div className="button__group">
              {icon && <IconWrapper width="21px" height="21px" icon={icon} />}
              {children}
            </div>
          ) : children}
        </ButtonSecondary>
      );
    case ButtonVariant.TERTIARY:
      return (
        <ButtonTertiary onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          {icon ? (
            <div className="button__group">
              {icon && <IconWrapper width="21px" height="21px" icon={icon} />}
              {children}
            </div>
          ) : children}
        </ButtonTertiary>
      );
    case ButtonVariant.PRIMARY_ACTION:
      return (
        <ButtonPrimaryAction onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          <IconWrapper width="21px" height="21px" icon={icon} />
        </ButtonPrimaryAction>
      );
    case ButtonVariant.SECONDARY_ACTION:
      return (
        <ButtonSecondaryAction onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          <IconWrapper width="21px" height="21px" icon={icon} />
        </ButtonSecondaryAction>
      );
    case ButtonVariant.TINY_ACTION:
      return (
        <ButtonTinyAction onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          <IconWrapper width="17px" height="17px" icon={icon} />
        </ButtonTinyAction>
      );
    case ButtonVariant.SECONDARY_ACTION_INVERSE:
      return (
        <ButtonSecondaryActionInverse onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          <IconWrapper width="21px" height="21px" icon={icon} />
        </ButtonSecondaryActionInverse>
      );
    default:
      return (
        <ButtonPrimary onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          {icon ? (
            <div className="button__group">
              {icon && <IconWrapper width="21px" height="21px" icon={icon} />}
              {children}
            </div>
          ) : children}
        </ButtonPrimary>
      );
  }
};
