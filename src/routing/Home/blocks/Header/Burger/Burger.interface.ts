import { Dispatch, SetStateAction } from 'react';

export interface IBurgerProps {
	menuIsActive: boolean;
	setMenuIsActive: Dispatch<SetStateAction<boolean>>;
}
