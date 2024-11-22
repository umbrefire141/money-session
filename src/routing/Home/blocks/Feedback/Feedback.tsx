import emailIcon from '@/assets/icons/email.svg';
import telegramIcon from '@/assets/icons/telegram.svg';
import img from '@/assets/images/bg-feedback.png';
import icon from '@/assets/images/money-fly.svg';
import Button from '@/components/shared/Button/Button';
import Field from '@/components/shared/Field/Field';
import Textarea from '@/components/shared/Textarea/Textarea';
import Typography from '@/components/shared/Typography/Typography';
import Image from 'next/image';
import styles from './Feedback.module.css';

const Feedback = () => {
	return (
		<div className={styles.feedback} id="feedback">
			<div className="container">
				<div className={styles.card}>
					<div className={styles.content}>
						<Typography
							TypeElement="h2"
							family="exo"
							size="3xl"
							transform="uppercase"
							weight="bold"
							className={styles.title}
						>
							Обратная связь
						</Typography>
						<Typography size="lg" className={styles.text}>
							Напишите нам на почту или телеграм для получения бесплатной
							консультации и коммерческого предложения
						</Typography>
						<div className={styles.row}>
							<Button
								icon={telegramIcon}
								className={styles.email}
								variant="outline"
							>
								@Moneysession
							</Button>
							<Button
								icon={emailIcon}
								className={styles.name}
								variant="outline"
							>
								moneysession@mail.ru
							</Button>
						</div>
						<form className={styles.form}>
							<div className={styles.form_row}>
								<Field placeholder="Имя" />
								<Field placeholder="Телефон или email" />
							</div>
							<Textarea
								placeholder="Сообщение(не обязательно к заполнению)"
								className={styles.textarea}
							/>
							<Button className={styles.form_btn}>отправить</Button>
						</form>
					</div>
					<Image
						src={img}
						alt=""
						width={undefined}
						height={undefined}
						className={styles.img}
					/>
					<Image
						src={icon}
						alt=""
						width={undefined}
						height={undefined}
						className={styles.icon}
					/>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
