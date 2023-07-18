import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    width?: string;
    height?: string;
    variant: 'primary' | 'secondary'
    size?: string
    color?: string
}


const Btn = `flex px-8 py-12 gap-4 items-center justify-center rounded-xl`;
const ButtonPrimary = `bg-tangy`;
const ButtonSecondary = `bg-tangy`;

const ButtonVariants = {
    primary: ButtonPrimary,
    secondary: ButtonSecondary
}

export const ButtonAtom = ({ onClick, children, variant, disabled, width = "160px", height = "40px" }: ButtonProps) => {
    const disabledClass = disabled ? `cursor-not-allowed` : `cursor-pointer`
    return (
        <div onClick={onClick} className={`${Btn} w-${width} h-${height} ${ButtonVariants[variant]} ${disabledClass}`}>
            {children}
        </div>
    )
}