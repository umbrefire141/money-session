import Typography from '@/components/shared/Typography/Typography';
import Image from 'next/image';
import { ICardProps } from './Card.interface';
import styles from './Card.module.css';

const Card = ({ id, img, title, text }: ICardProps) => {
	return (
		<div className={styles.card}>
			<Image
				src={img}
				alt=""
				width={undefined}
				height={undefined}
				className={styles.img}
			/>
			<Typography weight="bold" size="lg" transform="uppercase" family="exo">
				{id} этап
			</Typography>
			<div>
				<Typography
					TypeElement="h3"
					family="exo"
					size="2xl"
					transform="uppercase"
					weight="bold"
					className={styles.title}
				>
					{title}
				</Typography>
				<Typography>{text}</Typography>
			</div>
		</div>
	);
};

export default Card;
