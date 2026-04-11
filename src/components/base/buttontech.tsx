import React from 'react';

interface ButtonTechProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    backgroundColor?: string;
    disabled?: boolean;
    className?: string;
}

export const ButtonTech: React.FC<ButtonTechProps> = ({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    backgroundColor,
    disabled = false,
    className = '',
}) => {
    const baseStyles = 'font-semibold transition-all duration-200 rounded-lg';
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
        custom: 'bg-custom text-white hover:bg-custom-hover',
    };
    const sizes = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${backgroundColor || ''} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        >
            {children}
        </button>
    );
};

export default ButtonTech;