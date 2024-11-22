import { Dispatch, SetStateAction } from 'react';

export interface IMenuProps {
	menuIsActive: boolean;
	setMenuIsActive: Dispatch<SetStateAction<boolean>>;
}
