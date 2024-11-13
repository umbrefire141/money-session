import emailIcon from '@/assets/icons/email.svg';
import telegramIcon from '@/assets/icons/telegram.svg';
import Button from '@/components/shared/Button/Button';
import Image from 'next/image';
import styles from './Contacts.module.css';

const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<div className={styles.title}>Контактная информация</div>
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
		</div>
	);
};

export default Contacts;
