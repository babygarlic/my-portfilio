import React from 'react';

interface ButtonTechProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    backgroundColor?: string;
    disabled?: boolean;
    className?: string;
    borderColor?: string;
}

export const ButtonTech: React.FC<ButtonTechProps> = ({
    children,
    onClick,
    variant = 'outline',
    size = 'md',
    backgroundColor = '#1F1F1F',
    disabled = false,
    className = '',
    borderColor = 'blue-600',
}) => {
    const baseStyles = 'font-normal transition-all duration-200 rounded-sm px-4 py-2 text-center al text-[9.6px] uppercase';
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700',
        outline: `border-${borderColor || 'blue-600'} text-${borderColor || 'blue-600'} hover:bg-${borderColor || 'blue-50'}`,
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
            className={`${baseStyles} ${backgroundColor || ''} ${variants[variant]} ${sizes[size]} ${disabled 
            ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        >
            {children}
        </button>
    );
};

export default ButtonTech;