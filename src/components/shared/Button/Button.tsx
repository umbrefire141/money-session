import clsx from 'clsx';
import { IButtonProps } from './Button.interface';
import styles from './Button.module.css';

const Button = ({
	color = 'green',
	variant = 'bg',
	size = 'sm',
	className,
	children,
	...rest
}: IButtonProps) => {
	return (
		<button
			className={clsx(styles.btn, className, {
				[styles.outline]: variant === 'outline',
				[styles.bg]: variant === 'bg',
				[styles.green]: color === 'green',
				[styles.sm]: size === 'sm',
				[styles.lg]: size === 'lg',
			})}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
