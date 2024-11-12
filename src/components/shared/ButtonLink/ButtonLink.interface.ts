import { LinkHTMLAttributes } from 'react';

export interface IButtonLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
	href: string;
	color?: 'green';
	variant?: 'outline' | 'bg';
	size?: 'sm' | 'lg';
}
