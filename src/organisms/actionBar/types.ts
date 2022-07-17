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
  chains: ChainsInterface[];
  chainHandler: (e: ChainsInterface) => void;
  types: TypesInterface[];
  typeHandler: (e: TypesInterface) => void;
  setChip: (e: number) => void;
  chipValue: number;
  chainValue: ChainsInterface;
  typeValue: TypesInterface;
}
