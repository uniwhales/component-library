import { CardProps } from '../../atoms/card/types';
import { FilterChipProps } from '../../atoms/filterChips/types';
import {
  SelectProps, SelectVariation,
} from '../../atoms/inputs/select';

export type ChipFilterProps = Pick<FilterChipProps, 'icon' | 'isOn' | 'id'> & {
  label: string
};

export type ActionBarProps<T extends SelectVariation> = {
  chipFilters: ChipFilterProps[]
  setChipFilter: (e: string) => void;
  chipFilterValue: string;
  handleClearValue: () => void;
} & Pick<SelectProps<T>, 'selectValue' | 'onSelectChange' | 'selectOptions'>;

export interface MobileRHSActionBarProps extends CardProps {
  left: JSX.Element | string
  right: JSX.Element | string
}
