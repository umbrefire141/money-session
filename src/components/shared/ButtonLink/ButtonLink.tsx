import clsx from 'clsx';
import Link from 'next/link';
import styles from './Button.module.css';
import { IButtonLinkProps } from './ButtonLink.interface';

const ButtonLink = ({
	color = 'green',
	variant = 'bg',
	size = 'sm',
	href,
	className,
	style,
	children,
}: IButtonLinkProps) => {
	return (
		<Link
			href={href}
			className={clsx(styles.btn, className, {
				[styles.outline]: variant === 'outline',
				[styles.bg]: variant === 'bg',
				[styles.green]: color === 'green',
				[styles.sm]: size === 'sm',
				[styles.lg]: size === 'lg',
			})}
			style={style}
		>
			{children}
		</Link>
	);
};

export default ButtonLink;
