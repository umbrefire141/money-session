import { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: 'green';
	variant?: 'outline' | 'bg';
	size?: 'sm' | 'lg';
	icon?: string;
}
