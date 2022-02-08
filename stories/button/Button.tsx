import React from 'react';
import classNames from 'classnames';
import './button.scss';

export interface IButton {
  children: React.ReactNode;
  disabled: boolean;
  backgroundColor: string;
  color: string;
  onClick: () => {};
  isLoading: boolean;
}

export const Button = ({
  children, disabled = false, backgroundColor, onClick, isLoading = false, color = 'fff',
}:IButton) => {
  const btnClass = classNames({
    button: true,
    'button--loading': isLoading,
    'butoon--disabled': disabled,
  });
  const btnOverlayClass = classNames({
    button__overlay: disabled,
  });
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={btnClass}
      style={{ backgroundColor, color }}
    >
      {children}
      <div className={btnOverlayClass} />
    </button>
  );
};
