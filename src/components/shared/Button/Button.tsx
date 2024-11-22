import clsx from 'clsx';
import Image from 'next/image';
import { IButtonProps } from './Button.interface';
import styles from './Button.module.css';

const Button = ({
	color = 'green',
	variant = 'bg',
	size = 'sm',
	className,
	children,
	icon,
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
			<span className={styles.info}>
				{icon && (
					<Image
						src={icon}
						className={styles.icon}
						alt=""
						width={undefined}
						height={undefined}
					/>
				)}
				{children}
			</span>
		</button>
	);
};

export default Button;
