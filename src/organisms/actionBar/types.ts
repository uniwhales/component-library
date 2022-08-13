import { CardProps } from '../../atoms/card/types';

export interface Option {
  value: string,
  label: string,
  icon?: JSX.Element,
  id: number;
}

export interface GroupOptionInterface {
  label: string;
  options: Option[]
}

export interface ChainsInterface {
  id: number;
  value: string;
  label: string;
  isSelected?: boolean;
}

export interface TypesInterface {
  id: number;
  value: string;
  label: string;
  isSelected?: boolean;
}
export interface FilterInterface {
  id: number;
  value: string;
  label: string;
  icon: JSX.Element;
}
export interface ActionBarProps {
  filters: FilterInterface[]
  selectHandler: (e: TypesInterface) => void;
  selectValue: TypesInterface;
  setChip: (e: number) => void;
  chipValue: number;
  selectOptions: GroupOptionInterface[] | Option[];
}

export interface MobileRHSActionBarProps extends CardProps {
  left: JSX.Element | string
  right: JSX.Element | string
}
