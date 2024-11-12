import clsx from 'clsx';
import { ITypographyProps } from './Typography.interface';
import styles from './Typography.module.css';

const Typography = ({
	className,
	family = 'inter',
	size = 'md',
	weight,
	color = 'white',
	transform = 'capitalize',
	TypeElement = 'div',
	children,
}: ITypographyProps) => {
	return (
		<TypeElement
			className={clsx(styles.typography, className, {
				[styles.font_exo]: family === 'exo',
				[styles.font_manrope]: family === 'manrope',
				[styles.sm]: size === 'sm',
				[styles.md]: size === 'md',
				[styles.lg]: size === 'lg',
				[styles.xl]: size === 'xl',
				[styles['xl2']]: size === '2xl',
				[styles['xl3']]: size === '3xl',
				[styles['xl4']]: size === '4xl',
				[styles.gray]: color === 'gray',
				[styles.regular]: weight === 'regular',
				[styles.bold]: weight === 'bold',
				[styles.uppercase]: transform === 'uppercase',
				[styles.lowercase]: transform === 'lowercase',
			})}
		>
			{children}
		</TypeElement>
	);
};

export default Typography;
