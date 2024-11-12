import { PropsWithChildren } from 'react';

export interface ITypographyProps extends PropsWithChildren {
	className?: string;
	TypeElement?: Extract<
		keyof JSX.IntrinsicElements,
		'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div'
	>;
	size?: 'sm' | 'md' | 'lg' | '2xl' | '3xl' | '4xl';
	family?: 'inter' | 'exo' | 'manrope';
	weight?: 'bold' | 'regular';
	color?: 'white' | 'gray';
}
