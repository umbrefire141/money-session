import emailIcon from '@/assets/icons/email.svg';
import telegramIcon from '@/assets/icons/telegram.svg';
import Button from '@/components/shared/Button/Button';
import Typography from '@/components/shared/Typography/Typography';
import styles from './Contacts.module.css';

const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<Typography className={styles.title} weight="bold">
				Контактная информация
			</Typography>
			<div className={styles.row}>
				<Button
					icon={telegramIcon}
					className={styles.telegram}
					variant="outline"
				>
					@Moneysession
				</Button>
				<Button icon={emailIcon} className={styles.email} variant="outline">
					moneysession@mail.ru
				</Button>
			</div>
		</div>
	);
};

export default Contacts;
