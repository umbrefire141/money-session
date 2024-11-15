export interface ICardProps {
	img: {
		bottom?: number;
		right?: number;
		url: string;
		mobileUrl: string;
	};
	title: string;
	text?: string;
}
