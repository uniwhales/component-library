import React, { FC } from 'react';
import { css } from 'styled-components';
import { Styled } from '../../theme';
import { IconWrapper } from '../icons/iconWrapper';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactChild;
  buttonVariant:
  'primary'
  | 'secondary'
  | 'tertiary'
  | 'primary_action'
  | 'secondary_action'
  | 'tiny_action'
  | 'secondary_action_inverse'
  disabled?: boolean
  icon?: 'star' | 'ethereum' | 'bsc' | 'polygon' | 'avalanche' | 'fantom' | 'arbitrum' | 'boba' | 'metis' | 'aurora' | 'optimism' | 'copy' | 'edit' | 'remove' | 'alertBotColor' | 'copyColor';
  onClick: () => void;
}

const Button = Styled.button`
  font-size: 14px;
  line-height: 24px;
  padding: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.system.WHITE};
  border-radius: 12px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  .button__group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  svg {
    cursor: pointer;
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
  color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
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
        fill: ${props.theme.colors.system.WHITE};
      }
    };
    &:active {
      color: ${props.theme.colors.system.WHITE};
      background: ${props.theme.colors.primary.UWL_BLUE};
      svg {
        fill: ${props.theme.colors.system.WHITE};
      }
    };
  `}
`;
const ButtonTertiary = Styled(Button)`
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
        fill: ${props.theme.colors.primary.UWL_BLUE};
      }
    };
    &:active {
      color: ${props.theme.colors.system.WHITE};
      background: ${props.theme.colors.primary.UWL_BLUE};
      svg {
        fill: ${props.theme.colors.system.WHITE};
      }
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

export const ButtonAtom:FC<ButtonProps> = ({
  children,
  buttonVariant,
  disabled = false,
  icon,
  onClick,
}) => {
  switch (buttonVariant) {
    case 'secondary':
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
    case 'tertiary':
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
    case 'primary_action':
      return (
        <ButtonPrimaryAction onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          <IconWrapper width="21px" height="21px" icon={icon} />
        </ButtonPrimaryAction>
      );
    case 'secondary_action':
      return (
        <ButtonSecondaryAction onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          <IconWrapper width="21px" height="21px" icon={icon} />
        </ButtonSecondaryAction>
      );
    case 'tiny_action':
      return (
        <ButtonTinyAction onClick={!disabled ? onClick : () => {}} disabled={disabled} type="button">
          <IconWrapper width="17px" height="17px" icon={icon} />
        </ButtonTinyAction>
      );
    case 'secondary_action_inverse':
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
