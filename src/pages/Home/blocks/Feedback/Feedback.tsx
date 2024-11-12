import img from '@/assets/images/bg-feedback.png';
import Typography from '@/components/shared/Typography/Typography';
import Image from 'next/image';
import styles from './Feedback.module.css';

const Feedback = () => {
	return (
		<div className={styles.feedback}>
			<div className="container">
				<div className={styles.card}>
					<div className={styles.card__content}>
						<Typography
							TypeElement="h2"
							family="exo"
							size="3xl"
							transform="uppercase"
							weight="bold"
							className={styles.card__title}
						>
							Обратная связь
						</Typography>
						<Typography size="lg" className={styles.card__text}>
							Напишите нам на почту или телеграм для получения бесплатной
							консультации и коммерческого предложения
						</Typography>
					</div>
					<Image
						src={img}
						alt=""
						width={undefined}
						height={undefined}
						className={styles.card__img}
					/>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
