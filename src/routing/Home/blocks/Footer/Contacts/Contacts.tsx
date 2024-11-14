import emailIcon from '@/assets/icons/email.svg';
import telegramIcon from '@/assets/icons/telegram.svg';
import Button from '@/components/shared/Button/Button';
import Typography from '@/components/shared/Typography/Typography';
import Image from 'next/image';
import styles from './Contacts.module.css';

const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<Typography className={styles.title} weight="bold">
				Контактная информация
			</Typography>
			<div className={styles.row}>
				<Button className={styles.telegram} variant="outline">
					<Image src={telegramIcon} alt="" width={28} height={23} />
					<span>@Moneysession</span>
				</Button>
				<Button className={styles.email} variant="outline">
					<Image src={emailIcon} alt="" width={24} height={24} />
					<span>moneysession@mail.ru</span>
				</Button>
			</div>
		</div>
	);
};

export default Contacts;
