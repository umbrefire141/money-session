import clsx from 'clsx';
import { TextareaHTMLAttributes } from 'react';
import styles from './Textarea.module.css';

const Textarea = ({
	className,
	placeholder,
	...rest
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
	return (
		<textarea
			className={clsx(styles.textarea, className)}
			placeholder={placeholder}
			{...rest}
		/>
	);
};

export default Textarea;
