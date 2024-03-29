import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface Item {
  key: string;
  content: ReactNode;
}

export interface MeatballMenuProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  items: Item[];
  width?: string;
  disabled?:boolean;
}
