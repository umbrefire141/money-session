import Typography from '@/components/shared/Typography/Typography';
import clsx from 'clsx';
import Image from 'next/image';
import { ICardProps } from './Card.interface';
import styles from './Card.module.css';

const Card = ({ img, title, text }: ICardProps) => {
	return (
		<div className={styles.card}>
			<div
				className={clsx(styles.content, {
					[styles.end]: !text,
				})}
			>
				<Typography
					className={styles.title}
					TypeElement="h3"
					family="exo"
					transform="uppercase"
					size="xl"
					weight="bold"
				>
					{title}
				</Typography>
				{text ? (
					<Typography color="gray">{text}</Typography>
				) : (
					<svg
						width="47"
						height="46"
						viewBox="0 0 47 46"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M23.988 42.1668C34.5734 42.1668 43.1546 33.5856 43.1546 23.0002C43.1546 12.4147 34.5734 3.8335 23.988 3.8335C13.4025 3.8335 4.82129 12.4147 4.82129 23.0002C4.82129 33.5856 13.4025 42.1668 23.988 42.1668Z"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M23.9878 30.6668L31.6545 23.0002L23.9878 15.3335"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M16.3213 23H31.6546"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				)}
			</div>
			<Image
				src={img}
				alt=""
				width={undefined}
				height={undefined}
				className={styles.img}
			/>
		</div>
	);
};

export default Card;
