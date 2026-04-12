export interface ButtonProps {
    buttonName: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    backgroundColor?: string;
    disabled?: boolean;
    className?: string;
}