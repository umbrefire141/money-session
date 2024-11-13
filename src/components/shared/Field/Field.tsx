'use client';

import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import styles from './Field.module.css';

const Field = ({
	className,
	placeholder,
	type,
	...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input
			className={clsx(styles.field, className)}
			type={type}
			placeholder={placeholder}
			{...rest}
		/>
	);
};

export default Field;
