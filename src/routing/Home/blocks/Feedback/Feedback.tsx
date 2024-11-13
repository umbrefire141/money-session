import emailIcon from '@/assets/icons/email.svg';
import telegramIcon from '@/assets/icons/telegram.svg';
import img from '@/assets/images/bg-feedback.png';
import Button from '@/components/shared/Button/Button';
import Field from '@/components/shared/Field/Field';
import Textarea from '@/components/shared/Textarea/Textarea';
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
						<div className={styles.row}>
							<Button className={styles.btn} variant="outline">
								<Image src={telegramIcon} alt="" width={28} height={23} />
								<span>Контактная информация</span>
							</Button>
							<Button className={styles.btn} variant="outline">
								<Image src={emailIcon} alt="" width={24} height={24} />
								<span>moneysession@mail.ru</span>
							</Button>
						</div>
						<form>
							<div className={styles.form_row}>
								<Field placeholder="Имя" />
								<Field placeholder="Телефон или email" />
							</div>
							<Textarea placeholder="Сообщение(не обязательно к заполнению)" />
							<Button className={styles.form_btn}>отправить</Button>
						</form>
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
