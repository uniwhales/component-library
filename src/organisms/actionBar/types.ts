import { CardProps } from '../../atoms/card/types';
import { FilterChipProps } from '../../atoms/chips/filterChip';
import {
  SelectProps, SelectVariation,
} from '../../atoms/inputs/select';

export type ChipFilterProps = Pick<FilterChipProps, 'icon' | 'isOn' | 'id'> & {
  label: string
};

export type ActionBarProps<T extends SelectVariation> = {
  chipFilters: ChipFilterProps[]
  setChipFilter: (e: number) => void;
  chipFilterValue: number;
} & Pick<SelectProps<T>, 'selectValue' | 'onSelectChange' | 'selectOptions'>;

export interface MobileRHSActionBarProps extends CardProps {
  left: JSX.Element | string
  right: JSX.Element | string
}
